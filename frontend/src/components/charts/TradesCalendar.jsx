import React from 'react';
import { motion } from 'framer-motion';

const TradesCalendar = ({ data, month, year, isLoading = false }) => {
  if (isLoading) {
    return <div className="w-full h-full bg-dark-lighter animate-pulse rounded"></div>;
  }
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const prefixDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);
  const allDays = [...prefixDays, ...days];
  
  // Group trades by day
  const tradesByDay = data.reduce((acc, trade) => {
    const tradeDate = new Date(trade.date);
    const tradeDay = tradeDate.getDate();
    
    if (tradeDate.getMonth() === month && tradeDate.getFullYear() === year) {
      if (!acc[tradeDay]) {
        acc[tradeDay] = [];
      }
      acc[tradeDay].push(trade);
    }
    
    return acc;
  }, {});
  
  const getDayColor = (day) => {
    if (!tradesByDay[day]) return 'bg-dark-lighter';
    
    const dayTrades = tradesByDay[day];
    const wins = dayTrades.filter(trade => trade.profitLoss > 0).length;
    const total = dayTrades.length;
    
    if (wins === total) return 'bg-accent';
    if (wins === 0) return 'bg-accent-red';
    
    return wins > total / 2 ? 'bg-accent/70' : 'bg-accent-red/70';
  };
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-text-secondary text-sm font-medium">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {allDays.map((day, i) => (
          <div key={i} className="aspect-square">
            {day && (
              <motion.div 
                className={`h-full w-full flex flex-col items-center justify-center rounded-md cursor-pointer ${getDayColor(day)}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">{day}</span>
                {tradesByDay[day] && (
                  <span className="text-xs mt-1">{tradesByDay[day].length}</span>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradesCalendar;