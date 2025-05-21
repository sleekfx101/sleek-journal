import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiBell, FiSearch, FiUser, FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-dark-lighter z-50 backdrop-blur-sm bg-opacity-80">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left Side */}
        <div className="flex items-center">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-2 rounded-lg hover:bg-dark-card text-text-secondary hover:text-text-primary transition-colors"
          >
            <FiMenu size={20} />
          </button>
          
          <Link to="/dashboard" className="flex items-center">
            <h1 className="hidden md:block text-xl font-bold bg-gradient-primary text-transparent bg-clip-text">
              SleekJournal
            </h1>
          </Link>
        </div>
        
        {/* Center - Search Bar */}
        <div className="hidden md:flex items-center max-w-md w-full mx-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiSearch className="text-text-secondary" />
            </div>
            <input 
              type="text" 
              className="input pl-10 w-full" 
              placeholder="Search journals, trades..." 
            />
          </div>
        </div>
        
        {/* Right Side - Action Buttons */}
        <div className="flex items-center gap-1 md:gap-3">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg hover:bg-dark-card text-text-secondary"
          >
            <FiSearch size={20} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-dark-card text-text-secondary relative"
          >
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex btn btn-primary"
          >
            <FiPlus className="mr-2" /> New Trade
          </motion.button>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer"
          >
            <FiUser size={18} className="text-primary" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;