import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const PerformanceChart = ({ data, isLoading = false }) => {
  if (isLoading) {
    return <div className="w-full h-full bg-dark-lighter animate-pulse rounded"></div>;
  }
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
          dataKey="date" 
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
        <ReferenceLine y={0} stroke="#4B5563" />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#6D37F6" 
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;