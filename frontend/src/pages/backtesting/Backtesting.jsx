import React, { useState } from 'react';
import { FiPlay, FiPlus, FiEdit, FiTrash, FiSave, FiPlusCircle, FiMinusCircle, FiSliders, FiBarChart2, FiPieChart } from 'react-icons/fi';
import { motion } from 'framer-motion';

import PageHeader from '../../components/common/PageHeader';
import ChartCard from '../../components/common/ChartCard';
import MetricCard from '../../components/common/MetricCard';
import TradingViewChart from '../../components/backtesting/TradingViewChart';
import DataTable from '../../components/common/DataTable';

import { 
  candlestickData,
  strategiesData
} from '../../data/mockData';

const Backtesting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('chart');
  const [timeframe, setTimeframe] = useState('1d');
  const [showStrategyPanel, setShowStrategyPanel] = useState(false);
  
  const mockBacktestResults = {
    totalTrades: 42,
    winRate: 64.3,
    profitFactor: 2.18,
    netProfit: 5843.27,
    maxDrawdown: 12.4,
    sharpeRatio: 1.65,
  };
  
  const strategyColumns = [
    { 
      header: 'Strategy Name',
      accessorKey: 'name',
    },
    { 
      header: 'Description',
      accessorKey: 'description',
    },
    { 
      header: 'Win Rate',
      accessorKey: 'winRate',
      cell: (info) => `${info.getValue()}%`
    },
    { 
      header: 'Avg. Return',
      accessorKey: 'avgReturn',
      cell: (info) => `${info.getValue()}%`
    },
    { 
      header: 'Max Drawdown',
      accessorKey: 'maxDrawdown',
      cell: (info) => `${info.getValue()}%`
    },
    {
      header: 'Created',
      accessorKey: 'created',
      cell: (info) => new Date(info.getValue()).toLocaleDateString()
    },
    {
      header: 'Actions',
      cell: () => (
        <div className="flex space-x-2">
          <button 
            className="p-1 hover:bg-dark-lighter rounded text-primary"
            title="Run Backtest"
          >
            <FiPlay size={18} />
          </button>
          <button 
            className="p-1 hover:bg-dark-lighter rounded text-text-secondary"
            title="Edit Strategy"
          >
            <FiEdit size={18} />
          </button>
          <button 
            className="p-1 hover:bg-dark-lighter rounded text-accent-red"
            title="Delete Strategy"
          >
            <FiTrash size={18} />
          </button>
        </div>
      ),
    }
  ];
  
  const headerActions = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-primary flex items-center"
      onClick={() => setShowStrategyPanel(true)}
    >
      <FiPlus className="mr-2" /> New Strategy
    </motion.button>
  );
  
  return (
    <div className="p-4 md:p-6 relative">
      <PageHeader 
        title="Backtesting" 
        subtitle="Test your strategies on historical data"
        actions={headerActions}
      />
      
      {/* Tabs */}
      <div className="flex overflow-x-auto mb-6 pb-2">
        <div className="flex space-x-2 p-1 bg-dark-lighter rounded-lg">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'chart' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('chart')}
          >
            Chart
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'strategies' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('strategies')}
          >
            Strategies
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'results' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('results')}
          >
            Results
          </button>
        </div>
      </div>
      
      {/* Chart Tab */}
      {activeTab === 'chart' && (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <select 
                className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="1m">1 Minute</option>
                <option value="5m">5 Minutes</option>
                <option value="15m">15 Minutes</option>
                <option value="1h">1 Hour</option>
                <option value="4h">4 Hours</option>
                <option value="1d">1 Day</option>
                <option value="1w">1 Week</option>
              </select>
              
              <select className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="NASDAQ">NASDAQ</option>
                <option value="S&P500">S&P 500</option>
              </select>
              
              <select className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="AAPL">AAPL</option>
                <option value="MSFT">MSFT</option>
                <option value="GOOGL">GOOGL</option>
                <option value="AMZN">AMZN</option>
                <option value="TSLA">TSLA</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="btn btn-secondary flex items-center">
                <FiSliders className="mr-2" /> Indicators
              </button>
              <button className="btn btn-primary flex items-center">
                <FiPlay className="mr-2" /> Run Backtest
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <ChartCard 
              className="lg:col-span-3"
              toolbar={false}
              height="h-[600px]"
            >
              <TradingViewChart 
                data={candlestickData} 
                isLoading={isLoading} 
              />
            </ChartCard>
            
            <div className="flex flex-col space-y-4">
              <ChartCard
                title="Strategy Parameters"
                toolbar={false}
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Strategy</label>
                    <select className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary w-full">
                      <option value="ma_crossover">Moving Average Crossover</option>
                      <option value="rsi_divergence">RSI Divergence</option>
                      <option value="macd">MACD Strategy</option>
                      <option value="bollinger">Bollinger Bands</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Fast EMA Period</label>
                    <input 
                      type="number" 
                      className="input w-full" 
                      value="50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Slow EMA Period</label>
                    <input 
                      type="number" 
                      className="input w-full" 
                      value="200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Position Size</label>
                    <div className="flex items-center">
                      <input 
                        type="number" 
                        className="input w-full" 
                        value="1000"
                      />
                      <span className="ml-2">USD</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Stop Loss</label>
                    <div className="flex items-center">
                      <input 
                        type="number" 
                        className="input w-full" 
                        value="2"
                      />
                      <span className="ml-2">%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Take Profit</label>
                    <div className="flex items-center">
                      <input 
                        type="number" 
                        className="input w-full" 
                        value="6"
                      />
                      <span className="ml-2">%</span>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-full">
                    Save Parameters
                  </button>
                </div>
              </ChartCard>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <MetricCard 
              title="Win Rate" 
              value={`${mockBacktestResults.winRate}%`} 
              icon={<FiPieChart size={20} />}
            />
            <MetricCard 
              title="Profit Factor" 
              value={mockBacktestResults.profitFactor} 
              icon={<FiBarChart2 size={20} />}
            />
            <MetricCard 
              title="Net Profit" 
              value={`$${mockBacktestResults.netProfit.toLocaleString()}`} 
            />
          </div>
        </>
      )}
      
      {/* Strategies Tab */}
      {activeTab === 'strategies' && (
        <ChartCard toolbar={false}>
          <DataTable 
            data={strategiesData} 
            columns={strategyColumns} 
            isLoading={isLoading}
          />
        </ChartCard>
      )}
      
      {/* Results Tab */}
      {activeTab === 'results' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Backtest Performance">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <MetricCard 
                title="Total Trades" 
                value={mockBacktestResults.totalTrades} 
              />
              <MetricCard 
                title="Win Rate" 
                value={`${mockBacktestResults.winRate}%`} 
              />
              <MetricCard 
                title="Profit Factor" 
                value={mockBacktestResults.profitFactor} 
              />
              <MetricCard 
                title="Net Profit" 
                value={`$${mockBacktestResults.netProfit.toLocaleString()}`} 
              />
              <MetricCard 
                title="Max Drawdown" 
                value={`${mockBacktestResults.maxDrawdown}%`} 
              />
              <MetricCard 
                title="Sharpe Ratio" 
                value={mockBacktestResults.sharpeRatio} 
              />
            </div>
            
            <div className="border-t border-dark-lighter pt-4">
              <h3 className="font-medium mb-3">Trade Details</h3>
              <div className="bg-dark-lighter p-4 rounded-lg text-center">
                <p className="text-text-secondary">Run a backtest to see detailed trade information</p>
              </div>
            </div>
          </ChartCard>
          
          <ChartCard title="Strategy Comparison">
            <div className="bg-dark-lighter rounded-lg p-6 flex flex-col items-center justify-center h-full">
              <FiBarChart2 size={48} className="text-text-secondary mb-4" />
              <h3 className="font-medium mb-2">Compare Strategies</h3>
              <p className="text-text-secondary text-center mb-4">
                Run multiple backtests to compare strategy performance
              </p>
              <button className="btn btn-primary">
                Run Comparison
              </button>
            </div>
          </ChartCard>
        </div>
      )}
      
      {/* Strategy Panel */}
      {showStrategyPanel && (
        <motion.div 
          className="fixed inset-0 bg-dark/80 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowStrategyPanel(false)}
        >
          <motion.div 
            className="bg-dark-card max-w-md w-full p-6 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">New Strategy</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1">Strategy Name</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  placeholder="e.g. MA Crossover Strategy"
                />
              </div>
              
              <div>
                <label className="block text-sm text-text-secondary mb-1">Description</label>
                <textarea 
                  className="input w-full h-24" 
                  placeholder="Describe your trading strategy..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm text-text-secondary mb-1">Strategy Type</label>
                <select className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary w-full">
                  <option value="trend">Trend Following</option>
                  <option value="reversal">Reversal</option>
                  <option value="breakout">Breakout</option>
                  <option value="momentum">Momentum</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-text-secondary mb-1">Indicators</label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-dark-lighter p-2 rounded">
                    <span>Moving Average</span>
                    <div className="flex space-x-2">
                      <button className="text-primary"><FiEdit size={16} /></button>
                      <button className="text-accent-red"><FiTrash size={16} /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-dark-lighter p-2 rounded">
                    <span>RSI</span>
                    <div className="flex space-x-2">
                      <button className="text-primary"><FiEdit size={16} /></button>
                      <button className="text-accent-red"><FiTrash size={16} /></button>
                    </div>
                  </div>
                  <button className="flex items-center text-primary hover:underline">
                    <FiPlusCircle size={16} className="mr-1" /> Add Indicator
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowStrategyPanel(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary flex items-center">
                  <FiSave className="mr-2" /> Save Strategy
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Backtesting;