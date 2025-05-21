import React, { useState } from 'react';
import { FiDownload, FiBarChart2, FiPieChart, FiTrendingUp, FiTrendingDown, FiActivity, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

import PageHeader from '../../components/common/PageHeader';
import ChartCard from '../../components/common/ChartCard';
import MetricCard from '../../components/common/MetricCard';
import PerformanceChart from '../../components/charts/PerformanceChart';
import WinRateChart from '../../components/charts/WinRateChart';
import ProfitDistributionChart from '../../components/charts/ProfitDistributionChart';

import { 
  performanceData, 
  winLossData, 
  profitDistributionData, 
  metricsData 
} from '../../data/mockData';

const Analytics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  const headerActions = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-secondary flex items-center"
    >
      <FiDownload className="mr-2" /> Export Report
    </motion.button>
  );
  
  return (
    <div className="p-4 md:p-6">
      <PageHeader 
        title="Analytics" 
        subtitle="Detailed analysis of your trading performance"
        actions={headerActions}
        showDateFilter={true}
      />
      
      {/* Tabs */}
      <div className="flex overflow-x-auto mb-6 pb-2">
        <div className="flex space-x-2 p-1 bg-dark-lighter rounded-lg">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'performance' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('performance')}
          >
            Performance
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'patterns' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('patterns')}
          >
            Patterns
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'psychology' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('psychology')}
          >
            Psychology
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'monte-carlo' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('monte-carlo')}
          >
            Monte Carlo
          </button>
        </div>
      </div>
      
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <MetricCard 
              title="Total Trades" 
              value={metricsData.totalTrades} 
              isLoading={isLoading}
              icon={<FiActivity size={20} />}
            />
            <MetricCard 
              title="Win Rate" 
              value={`${metricsData.winRate}%`} 
              isLoading={isLoading}
              icon={<FiPieChart size={20} />}
            />
            <MetricCard 
              title="Profit Factor" 
              value={metricsData.profitFactor} 
              isLoading={isLoading}
              icon={<FiBarChart2 size={20} />}
            />
            <MetricCard 
              title="Expectancy" 
              value={`$${metricsData.expectancy}`} 
              isLoading={isLoading}
              icon={<FiTrendingUp size={20} />}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard 
              title="Performance Over Time" 
              icon={<FiActivity size={20} />}
              isLoading={isLoading}
            >
              <PerformanceChart data={performanceData} isLoading={isLoading} />
            </ChartCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MetricCard 
                title="Average Win" 
                value={`$${metricsData.averageWin.toLocaleString()}`} 
                isLoading={isLoading}
                icon={<FiTrendingUp size={20} />}
                className="h-auto"
              />
              <MetricCard 
                title="Average Loss" 
                value={`$${metricsData.averageLoss.toLocaleString()}`} 
                isLoading={isLoading}
                icon={<FiTrendingDown size={20} />}
                className="h-auto"
              />
              <MetricCard 
                title="Largest Win" 
                value={`$${metricsData.largestWin.toLocaleString()}`} 
                isLoading={isLoading}
                icon={<FiTrendingUp size={20} />}
                className="h-auto"
              />
              <MetricCard 
                title="Largest Loss" 
                value={`$${metricsData.largestLoss.toLocaleString()}`} 
                isLoading={isLoading}
                icon={<FiTrendingDown size={20} />}
                className="h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard 
              title="Profit Distribution" 
              icon={<FiBarChart2 size={20} />}
              isLoading={isLoading}
            >
              <ProfitDistributionChart data={profitDistributionData} isLoading={isLoading} />
            </ChartCard>
            
            <ChartCard 
              title="Win/Loss Ratio" 
              icon={<FiPieChart size={20} />}
              isLoading={isLoading}
            >
              <WinRateChart data={winLossData} isLoading={isLoading} />
            </ChartCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <MetricCard 
              title="Sharpe Ratio" 
              value={metricsData.sharpeRatio} 
              isLoading={isLoading}
              icon={<FiActivity size={20} />}
              description="Measure of risk-adjusted return"
            />
            <MetricCard 
              title="Sortino Ratio" 
              value={metricsData.sortinoRatio} 
              isLoading={isLoading}
              icon={<FiActivity size={20} />}
              description="Differentiates harmful volatility from total volatility"
            />
            <MetricCard 
              title="Max Drawdown" 
              value={`${metricsData.maxDrawdownPercentage}%`} 
              isLoading={isLoading}
              icon={<FiTrendingDown size={20} />}
              description="Maximum peak-to-trough decline"
            />
            <MetricCard 
              title="Avg. Holding Time" 
              value={metricsData.averageHoldingTime} 
              isLoading={isLoading}
              icon={<FiCalendar size={20} />}
              description="Average duration of trades"
            />
          </div>
        </>
      )}
      
      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="bg-dark-lighter rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Detailed Performance Analysis</h3>
          <p className="text-text-secondary mb-6">Advanced metrics and trend analysis for your trading performance.</p>
          <button className="btn btn-primary">Generate Report</button>
        </div>
      )}
      
      {/* Patterns Tab */}
      {activeTab === 'patterns' && (
        <div className="bg-dark-lighter rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Trading Patterns Analysis</h3>
          <p className="text-text-secondary mb-6">Identify patterns in your trading behavior and performance.</p>
          <button className="btn btn-primary">Analyze Patterns</button>
        </div>
      )}
      
      {/* Psychology Tab */}
      {activeTab === 'psychology' && (
        <div className="bg-dark-lighter rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Trading Psychology Metrics</h3>
          <p className="text-text-secondary mb-6">Insights into your psychological patterns and emotional impact on trading.</p>
          <button className="btn btn-primary">Analyze Psychology</button>
        </div>
      )}
      
      {/* Monte Carlo Tab */}
      {activeTab === 'monte-carlo' && (
        <div className="bg-dark-lighter rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Monte Carlo Simulation</h3>
          <p className="text-text-secondary mb-6">Run probability simulations to forecast potential future performance.</p>
          <button className="btn btn-primary">Run Simulation</button>
        </div>
      )}
    </div>
  );
};

export default Analytics;