// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5050;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Koneksi MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('✅ Terhubung ke MongoDB Compass'))
  .catch((err) => console.error('❌ Gagal konek MongoDB:', err));
  // galeri 
const galeriRoutes = require('./routes/galeriRoutes');
app.use('/api', galeriRoutes);
// Skema dan Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Endpoint Register
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah digunakan' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Pendaftaran berhasil!' });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});
const ideaRoutes = require('./routes/ideaRoutes');
app.use('/api', ideaRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
