import React, { useState } from 'react';
import { FiPlus, FiFilter, FiDownload, FiUpload, FiCalendar, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

import PageHeader from '../../components/common/PageHeader';
import DataTable from '../../components/common/DataTable';
import ChartCard from '../../components/common/ChartCard';

import { tradesCalendarData } from '../../data/mockData';

const Journal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  
  // Calculate all unique symbols from the trades data
  const symbols = [...new Set(tradesCalendarData.map(trade => trade.symbol))];
  
  // Filter trades based on search query and selected filters
  const filteredTrades = tradesCalendarData.filter(trade => {
    const matchesSearch = 
      trade.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trade.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSymbol = selectedSymbols.length === 0 || selectedSymbols.includes(trade.symbol);
    
    return matchesSearch && matchesSymbol;
  });
  
  const tradeColumns = [
    { 
      header: 'Date',
      accessorKey: 'date',
      cell: (info) => new Date(info.getValue()).toLocaleDateString()
    },
    { 
      header: 'Symbol',
      accessorKey: 'symbol',
    },
    { 
      header: 'Type',
      accessorKey: 'type',
      cell: (info) => (
        <span className={info.getValue() === 'Long' ? 'text-accent' : 'text-accent-red'}>
          {info.getValue()}
        </span>
      )
    },
    { 
      header: 'Entry',
      accessorKey: 'entryPrice',
      cell: (info) => `$${info.getValue().toLocaleString()}`
    },
    { 
      header: 'Exit',
      accessorKey: 'exitPrice',
      cell: (info) => `$${info.getValue().toLocaleString()}`
    },
    { 
      header: 'P/L',
      accessorKey: 'profitLoss',
      cell: (info) => (
        <span className={info.getValue() >= 0 ? 'text-accent' : 'text-accent-red'}>
          ${Math.abs(info.getValue()).toLocaleString()}
        </span>
      )
    },
    { 
      header: 'R:R',
      accessorKey: 'riskReward',
    },
    {
      header: 'Actions',
      cell: () => (
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-dark-lighter rounded">View</button>
          <button className="p-1 hover:bg-dark-lighter rounded">Edit</button>
        </div>
      ),
    }
  ];
  
  // Actions to show in the page header
  const headerActions = (
    <div className="flex space-x-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-secondary flex items-center"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FiFilter className="mr-2" /> Filter
      </motion.button>
      
      <div className="hidden md:flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-secondary flex items-center"
        >
          <FiUpload className="mr-2" /> Import
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-secondary flex items-center"
        >
          <FiDownload className="mr-2" /> Export
        </motion.button>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary flex items-center"
      >
        <FiPlus className="mr-2" /> New Trade
      </motion.button>
    </div>
  );
  
  return (
    <div className="p-4 md:p-6">
      <PageHeader 
        title="Trade Journal" 
        subtitle="Record and analyze your trades"
        actions={headerActions}
      />
      
      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-full md:w-80 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search trades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10 w-full"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FiCalendar className="text-text-secondary" />
              <select className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Expanded Filters */}
        {showFilters && (
          <motion.div 
            className="mt-4 p-4 bg-dark-lighter rounded-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Symbols</label>
                <div className="flex flex-wrap gap-2">
                  {symbols.map(symbol => (
                    <button
                      key={symbol}
                      onClick={() => {
                        setSelectedSymbols(prev => 
                          prev.includes(symbol) 
                            ? prev.filter(s => s !== symbol) 
                            : [...prev, symbol]
                        );
                      }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedSymbols.includes(symbol) 
                          ? 'bg-primary text-white' 
                          : 'bg-dark-card hover:bg-dark-card/80 text-text-secondary'
                      }`}
                    >
                      {symbol}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Trade Type</label>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-dark-card hover:bg-dark-card/80 text-text-secondary">
                    Long
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-dark-card hover:bg-dark-card/80 text-text-secondary">
                    Short
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Outcome</label>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-dark-card hover:bg-dark-card/80 text-text-secondary">
                    Profitable
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-dark-card hover:bg-dark-card/80 text-text-secondary">
                    Loss
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button className="btn btn-secondary mr-3">Reset Filters</button>
              <button className="btn btn-primary">Apply Filters</button>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Trades Table */}
      <ChartCard isLoading={isLoading} toolbar={false}>
        <DataTable 
          data={filteredTrades} 
          columns={tradeColumns} 
          isLoading={isLoading}
          pageSize={15}
        />
      </ChartCard>
    </div>
  );
};

export default Journal;