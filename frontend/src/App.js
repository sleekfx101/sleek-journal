import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import Dashboard from './pages/dashboard/Dashboard';
import Journal from './pages/journal/Journal';
import Analytics from './pages/analytics/Analytics';
import Backtesting from './pages/backtesting/Backtesting';
import Settings from './pages/settings/Settings';
import LandingPage from './pages/LandingPage';

// Components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="App">
      {!isLandingPage && (
        <>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Sidebar sidebarOpen={sidebarOpen} />
        </>
      )}
      
      <main className={`${!isLandingPage ? 'ml-0 lg:ml-64 pt-16' : ''} transition-all duration-300 min-h-screen`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/backtesting" element={<Backtesting />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
