import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const PageHeader = ({ 
  title, 
  subtitle, 
  actions = null,
  showDateFilter = false 
}) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-4 md:px-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
        {subtitle && <p className="text-text-secondary">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {showDateFilter && (
          <div className="flex items-center p-2 bg-dark-lighter rounded-lg">
            <FiCalendar className="mr-2 text-text-secondary" />
            <select className="bg-transparent text-text-secondary focus:outline-none">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this_week">This Week</option>
              <option value="this_month" selected>This Month</option>
              <option value="this_year">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        )}
        
        {actions}
      </div>
    </motion.div>
  );
};

export default PageHeader;