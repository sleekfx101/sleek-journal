import React from 'react';
import { FiMoreVertical, FiMaximize, FiMinimize, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ChartCard = ({ 
  title, 
  children, 
  icon, 
  isFullscreen = false, 
  onToggleFullscreen,
  isLoading = false,
  className = "",
  height = "h-96",
  toolbar = true
}) => {
  
  return (
    <motion.div 
      className={`card flex flex-col ${className} ${isFullscreen ? 'fixed inset-0 z-50 m-0 rounded-none' : ''}`}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {toolbar && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {icon && <div className="mr-2 text-primary">{icon}</div>}
            <h3 className="font-medium">{title}</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              className="p-1.5 hover:bg-dark-lighter rounded-lg text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => {}}
            >
              <FiDownload size={18} />
            </button>
            
            {onToggleFullscreen && (
              <button 
                className="p-1.5 hover:bg-dark-lighter rounded-lg text-text-secondary hover:text-text-primary transition-colors"
                onClick={onToggleFullscreen}
              >
                {isFullscreen ? <FiMinimize size={18} /> : <FiMaximize size={18} />}
              </button>
            )}
            
            <button 
              className="p-1.5 hover:bg-dark-lighter rounded-lg text-text-secondary hover:text-text-primary transition-colors"
            >
              <FiMoreVertical size={18} />
            </button>
          </div>
        </div>
      )}
      
      <div className={`flex-1 ${isLoading ? 'animate-pulse bg-dark-lighter rounded' : ''} ${height}`}>
        {isLoading ? null : children}
      </div>
    </motion.div>
  );
};

export default ChartCard;