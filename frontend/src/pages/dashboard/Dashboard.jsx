import React, { useState } from 'react';
import { FiBarChart2, FiPieChart, FiActivity, FiCalendar, FiDollarSign, FiTrendingUp, FiTrendingDown, FiPercent } from 'react-icons/fi';

import PageHeader from '../../components/common/PageHeader';
import MetricCard from '../../components/common/MetricCard';
import ChartCard from '../../components/common/ChartCard';
import DataTable from '../../components/common/DataTable';
import PerformanceChart from '../../components/charts/PerformanceChart';
import WinRateChart from '../../components/charts/WinRateChart';
import TradesCalendar from '../../components/charts/TradesCalendar';
import ProfitDistributionChart from '../../components/charts/ProfitDistributionChart';

import { 
  performanceData, 
  winLossData, 
  profitDistributionData, 
  recentTradesData,
  metricsData 
} from '../../data/mockData';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const today = new Date();
  
  const recentTradesColumns = [
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
  ];
  
  return (
    <div className="p-4 md:p-6">
      <PageHeader 
        title="Dashboard" 
        subtitle="Welcome back! Here's your trading summary."
        showDateFilter={true}
      />
      
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard 
          title="Win Rate" 
          value={`${metricsData.winRate}%`} 
          change={2.5} 
          changeType="positive" 
          isLoading={isLoading}
          icon={<FiPieChart size={20} />}
          description="Percentage of winning trades out of total trades"
        />
        <MetricCard 
          title="Profit Factor" 
          value={metricsData.profitFactor} 
          change={0.3} 
          changeType="positive" 
          isLoading={isLoading}
          icon={<FiBarChart2 size={20} />}
          description="Ratio of gross profit to gross loss"
        />
        <MetricCard 
          title="Total Profit" 
          value={`$${metricsData.totalProfit.toLocaleString()}`} 
          change={12.8} 
          changeType="positive" 
          isLoading={isLoading}
          icon={<FiDollarSign size={20} />}
          description="Total profit across all trades"
        />
        <MetricCard 
          title="Max Drawdown" 
          value={`${metricsData.maxDrawdownPercentage}%`} 
          change={1.2} 
          changeType="negative" 
          isLoading={isLoading}
          icon={<FiTrendingDown size={20} />}
          description="Maximum peak to trough decline in account value"
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <ChartCard 
          title="Performance" 
          icon={<FiActivity size={20} />}
          isLoading={isLoading}
          className="lg:col-span-2"
        >
          <PerformanceChart data={performanceData} isLoading={isLoading} />
        </ChartCard>
        
        <ChartCard 
          title="Win/Loss Ratio" 
          icon={<FiPieChart size={20} />}
          isLoading={isLoading}
        >
          <WinRateChart data={winLossData} isLoading={isLoading} />
        </ChartCard>
      </div>
      
      {/* More Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <ChartCard 
          title="Trade Distribution" 
          icon={<FiBarChart2 size={20} />}
          isLoading={isLoading}
        >
          <ProfitDistributionChart data={profitDistributionData} isLoading={isLoading} />
        </ChartCard>
        
        <ChartCard 
          title="Trading Calendar" 
          icon={<FiCalendar size={20} />}
          isLoading={isLoading}
        >
          <TradesCalendar 
            data={recentTradesData} 
            month={today.getMonth()} 
            year={today.getFullYear()} 
            isLoading={isLoading} 
          />
        </ChartCard>
      </div>
      
      {/* Recent Trades */}
      <div className="mb-6">
        <ChartCard 
          title="Recent Trades" 
          isLoading={isLoading}
        >
          <DataTable 
            data={recentTradesData} 
            columns={recentTradesColumns} 
            isLoading={isLoading}
          />
        </ChartCard>
      </div>
      
      {/* More Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard 
          title="Avg. Win" 
          value={`$${metricsData.averageWin.toLocaleString()}`} 
          isLoading={isLoading}
          icon={<FiTrendingUp size={20} />}
          description="Average profit on winning trades"
        />
        <MetricCard 
          title="Avg. Loss" 
          value={`$${metricsData.averageLoss.toLocaleString()}`} 
          isLoading={isLoading}
          icon={<FiTrendingDown size={20} />}
          description="Average loss on losing trades"
        />
        <MetricCard 
          title="Expectancy" 
          value={`$${metricsData.expectancy.toLocaleString()}`} 
          isLoading={isLoading}
          icon={<FiDollarSign size={20} />}
          description="Average amount you can expect to win/lose per trade"
        />
        <MetricCard 
          title="Sharpe Ratio" 
          value={metricsData.sharpeRatio} 
          isLoading={isLoading}
          icon={<FiPercent size={20} />}
          description="Measure of risk-adjusted return"
        />
      </div>
    </div>
  );
};

export default Dashboard;