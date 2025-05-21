// Mock data for our application

// Dashboard performance chart data
export const performanceData = [
  { date: 'Jan', value: 400 },
  { date: 'Feb', value: 300 },
  { date: 'Mar', value: 500 },
  { date: 'Apr', value: 700 },
  { date: 'May', value: 400 },
  { date: 'Jun', value: 800 },
  { date: 'Jul', value: 900 },
  { date: 'Aug', value: 700 },
  { date: 'Sep', value: 1100 },
  { date: 'Oct', value: 1300 },
  { date: 'Nov', value: 1700 },
  { date: 'Dec', value: 2000 },
];

// Mock win/loss data
export const winLossData = {
  wins: 68,
  losses: 32,
};

// Mock profit distribution data
export const profitDistributionData = [
  { range: '-50%', count: 5, value: -50 },
  { range: '-40%', count: 7, value: -40 },
  { range: '-30%', count: 10, value: -30 },
  { range: '-20%', count: 12, value: -20 },
  { range: '-10%', count: 18, value: -10 },
  { range: '0%', count: 20, value: 0 },
  { range: '10%', count: 30, value: 10 },
  { range: '20%', count: 22, value: 20 },
  { range: '30%', count: 15, value: 30 },
  { range: '40%', count: 8, value: 40 },
  { range: '50%+', count: 3, value: 50 },
];

// Mock trades calendar data
export const tradesCalendarData = Array(100).fill(0).map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 60));
  
  const isWin = Math.random() > 0.3;
  
  return {
    id: i + 1,
    date: date.toISOString(),
    symbol: ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META'][Math.floor(Math.random() * 7)],
    type: Math.random() > 0.5 ? 'Long' : 'Short',
    entryPrice: parseFloat((Math.random() * 1000 + 100).toFixed(2)),
    exitPrice: parseFloat((Math.random() * 1000 + 100).toFixed(2)),
    profitLoss: isWin ? parseFloat((Math.random() * 1000).toFixed(2)) : parseFloat((-Math.random() * 500).toFixed(2)),
    riskReward: parseFloat((Math.random() * 3 + 0.5).toFixed(2)),
  };
});

// Recent trades data for dashboard
export const recentTradesData = tradesCalendarData
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 10);

// Generate mock candlestick data for TradingView chart
export const generateCandlestickData = (numPoints = 100, basePrice = 100) => {
  const data = [];
  let currentPrice = basePrice;
  
  const now = new Date();
  const startTime = new Date(now.getTime() - numPoints * 24 * 60 * 60 * 1000).getTime() / 1000;
  
  for (let i = 0; i < numPoints; i++) {
    const time = startTime + i * 24 * 60 * 60;
    const volatility = basePrice * 0.03;
    
    const open = currentPrice;
    const close = open + (Math.random() - 0.5) * volatility * 2;
    const high = Math.max(open, close) + Math.random() * volatility;
    const low = Math.min(open, close) - Math.random() * volatility;
    const volume = Math.floor(Math.random() * 100000 + 50000);
    
    data.push({
      time,
      open,
      high,
      low,
      close,
      volume,
    });
    
    currentPrice = close;
  }
  
  return data;
};

// Mock candlestick data
export const candlestickData = generateCandlestickData();

// Mock strategies data for backtesting
export const strategiesData = [
  {
    id: 1,
    name: 'Moving Average Crossover',
    description: 'Simple strategy using 50 and 200 EMA crossover signals',
    winRate: 62,
    avgReturn: 2.4,
    maxDrawdown: 12.5,
    created: '2023-08-15',
  },
  {
    id: 2,
    name: 'RSI Divergence',
    description: 'Using RSI divergence to identify potential reversals',
    winRate: 58,
    avgReturn: 3.1,
    maxDrawdown: 18.2,
    created: '2023-06-22',
  },
  {
    id: 3,
    name: 'MACD Momentum',
    description: 'Using MACD for momentum trading in trending markets',
    winRate: 65,
    avgReturn: 1.8,
    maxDrawdown: 9.3,
    created: '2023-10-05',
  },
  {
    id: 4,
    name: 'Bollinger Band Breakouts',
    description: 'Trading breakouts from Bollinger Bands with confirmation',
    winRate: 54,
    avgReturn: 3.5,
    maxDrawdown: 15.7,
    created: '2023-04-18',
  },
  {
    id: 5,
    name: 'Support/Resistance Bounces',
    description: 'Trading bounces off major support and resistance levels',
    winRate: 60,
    avgReturn: 2.2,
    maxDrawdown: 11.8,
    created: '2023-09-12',
  },
];

// Mock metrics for analytics
export const metricsData = {
  totalTrades: 235,
  winRate: 64.7,
  profitFactor: 2.3,
  expectancy: 1.8,
  averageWin: 420.53,
  averageLoss: 215.26,
  largestWin: 2354.89,
  largestLoss: 876.32,
  totalProfit: 32589.75,
  maxDrawdown: 4521.38,
  maxDrawdownPercentage: 12.8,
  averageHoldingTime: '3d 4h',
  sharpeRatio: 1.75,
  sortinoRatio: 2.1,
};