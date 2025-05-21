import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProfitDistributionChart = ({ data, isLoading = false }) => {
  if (isLoading) {
    return <div className="w-full h-full bg-dark-lighter animate-pulse rounded"></div>;
  }
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#2A2F45" />
        <XAxis 
          dataKey="range" 
          stroke="#94A3B8" 
          fontSize={12}
          tickLine={false}
        />
        <YAxis 
          stroke="#94A3B8" 
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#2A2F45', 
            border: 'none',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            color: '#F1F5F9'
          }}
          itemStyle={{ color: '#F1F5F9' }}
          labelStyle={{ color: '#94A3B8', fontWeight: 'bold', marginBottom: '0.5rem' }}
        />
        <Bar 
          dataKey="count" 
          fill={(data) => data.value >= 0 ? '#20D68B' : '#FF4D6A'}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProfitDistributionChart;