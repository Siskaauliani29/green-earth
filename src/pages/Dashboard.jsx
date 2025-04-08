import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts';

const dataPohon = [
  { bulan: 'Jan', jumlah: 120 },
  { bulan: 'Feb', jumlah: 200 },
  { bulan: 'Mar', jumlah: 150 },
  { bulan: 'Apr', jumlah: 300 },
  { bulan: 'Mei', jumlah: 250 },
];

const dataLahanHijau = [
  { name: 'Lahan Hijau', value: 65 },
  { name: 'Area Terbangun', value: 35 }
];

const COLORS = ['#66bb6a', '#c8e6c9'];

const dataBar = [
  { tahun: '2021', pohon: 1500 },
  { tahun: '2022', pohon: 2400 },
  { tahun: '2023', pohon: 3100 },
  { tahun: '2024', pohon: 4200 },
];

function Dashboard() {
  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2e7d32' }}>
        🌍 Dashboard Statistik Lingkungan (Dummy)
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>

        {/* Line Chart */}
        <div>
          <h4>📈 Jumlah Pohon Ditanam per Bulan</h4>
          <LineChart width={400} height={250} data={dataPohon}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bulan" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="jumlah" stroke="#2e7d32" strokeWidth={3} />
          </LineChart>
        </div>

        {/* Pie Chart */}
        <div>
          <h4>🌳 Persentase Lahan Hijau</h4>
          <PieChart width={300} height={250}>
            <Pie
              data={dataLahanHijau}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {dataLahanHijau.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Bar Chart */}
        <div>
          <h4>📊 Pohon Ditanam per Tahun</h4>
          <BarChart width={400} height={250} data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tahun" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pohon" fill="#43a047" />
          </BarChart>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
