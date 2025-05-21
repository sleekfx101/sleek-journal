import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#20D68B', '#FF4D6A'];

const WinRateChart = ({ data, isLoading = false }) => {
  if (isLoading) {
    return <div className="w-full h-full bg-dark-lighter animate-pulse rounded"></div>;
  }
  
  const formattedData = [
    { name: 'Wins', value: data.wins },
    { name: 'Losses', value: data.losses }
  ];
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={formattedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          innerRadius={60}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={2}
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#2A2F45', 
            border: 'none',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            color: '#F1F5F9'
          }}
          formatter={(value) => [`${value} trades`, null]}
          itemStyle={{ color: '#F1F5F9' }}
        />
        <Legend 
          verticalAlign="bottom" 
          align="center"
          iconType="circle"
          wrapperStyle={{ color: '#94A3B8' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default WinRateChart;