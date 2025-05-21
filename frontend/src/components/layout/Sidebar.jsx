import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBook, FiBarChart2, FiSettings, FiActivity, FiPieChart, FiShield, FiFolder, FiUsers, FiHelpCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Sidebar = ({ sidebarOpen }) => {
  const navLinks = [
    { to: '/dashboard', icon: <FiHome size={20} />, label: 'Dashboard' },
    { to: '/journal', icon: <FiBook size={20} />, label: 'Trade Journal' },
    { to: '/analytics', icon: <FiBarChart2 size={20} />, label: 'Analytics' },
    { to: '/backtesting', icon: <FiActivity size={20} />, label: 'Backtesting' },
    { to: '/settings', icon: <FiSettings size={20} />, label: 'Settings' },
  ];

  const secondaryLinks = [
    { to: '/reports', icon: <FiPieChart size={20} />, label: 'Reports' },
    { to: '/strategies', icon: <FiShield size={20} />, label: 'Strategies' },
    { to: '/templates', icon: <FiFolder size={20} />, label: 'Templates' },
  ];

  return (
    <aside
      className={`fixed top-16 left-0 bottom-0 w-64 bg-dark z-40 transition-all duration-300 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-16'
      }`}
    >
      <div className="h-full flex flex-col py-6 overflow-y-auto">
        <nav className="px-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''} ${!sidebarOpen && 'lg:justify-center'}`
              }
            >
              {link.icon}
              {(sidebarOpen || window.innerWidth < 1024) && <span>{link.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 px-4">
          <div className="h-px bg-dark-lighter"></div>
        </div>

        <nav className="mt-6 px-3 space-y-1">
          {secondaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''} ${!sidebarOpen && 'lg:justify-center'}`
              }
            >
              {link.icon}
              {(sidebarOpen || window.innerWidth < 1024) && <span>{link.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-3">
          <motion.div 
            className="flex flex-col p-4 rounded-xl bg-dark-lighter"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <FiHelpCircle className="text-primary" size={16} />
              </div>
              {(sidebarOpen || window.innerWidth < 1024) && (
                <p className="font-medium">Need Help?</p>
              )}
            </div>
            {(sidebarOpen || window.innerWidth < 1024) && (
              <p className="text-sm text-text-secondary mb-3">
                Check our documentation or contact support
              </p>
            )}
            {(sidebarOpen || window.innerWidth < 1024) && (
              <button className="btn btn-primary py-1.5 text-sm">
                Support Center
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;