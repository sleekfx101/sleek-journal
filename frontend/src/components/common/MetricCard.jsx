import React from 'react';
import { FiInfo, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  description, 
  isLoading = false,
  className = ""
}) => {
  
  const getChangeIcon = () => {
    if (change === 0) return null;
    return change > 0 ? <FiTrendingUp className="mr-1" /> : <FiTrendingDown className="mr-1" />;
  };
  
  const getChangeColor = () => {
    if (change === 0) return "text-text-secondary";
    return change > 0 ? "text-accent" : "text-accent-red";
  };
  
  return (
    <motion.div 
      className={`card hover:border hover:border-primary/20 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-text-secondary">{title}</h3>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      
      {isLoading ? (
        <div className="animate-pulse h-8 bg-dark-lighter rounded mb-2"></div>
      ) : (
        <div className="text-2xl font-semibold mb-2">{value}</div>
      )}
      
      {(change !== undefined && !isLoading) && (
        <div className="flex items-center">
          <div className={`flex items-center text-sm ${getChangeColor()}`}>
            {getChangeIcon()}
            {Math.abs(change)}% {changeType === 'positive' ? 'increase' : changeType === 'negative' ? 'decrease' : ''}
          </div>
          
          {description && (
            <div className="ml-2 text-text-secondary group relative">
              <FiInfo size={16} />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-48 p-2 bg-dark-card rounded shadow-lg text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                {description}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default MetricCard;