import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';

const TradingViewChart = ({ 
  data, 
  width = '100%', 
  height = '100%',
  isLoading = false,
  onCrosshairMove = () => {},
  timeScale = { timeVisible: true, secondsVisible: false },
}) => {
  const chartContainerRef = useRef(null);
  const chart = useRef(null);
  const candleSeries = useRef(null);
  const volumeSeries = useRef(null);
  
  useEffect(() => {
    if (isLoading || !chartContainerRef.current) return;
    
    const chartOptions = {
      layout: {
        background: { color: '#2A2F45' },
        textColor: '#94A3B8',
      },
      grid: {
        vertLines: { color: '#1E2338' },
        horzLines: { color: '#1E2338' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          width: 1,
          color: '#6D37F6',
          style: 0,
        },
        horzLine: {
          width: 1,
          color: '#6D37F6',
          style: 0,
        },
      },
      timeScale: {
        ...timeScale,
        borderColor: '#1E2338',
      },
      rightPriceScale: {
        borderColor: '#1E2338',
      },
    };
    
    chart.current = createChart(chartContainerRef.current, chartOptions);
    
    candleSeries.current = chart.current.addCandlestickSeries({
      upColor: '#20D68B',
      downColor: '#FF4D6A',
      borderVisible: false,
      wickUpColor: '#20D68B',
      wickDownColor: '#FF4D6A',
    });
    
    volumeSeries.current = chart.current.addHistogramSeries({
      color: '#3B82F6',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      },
    });
    
    chart.current.subscribeCrosshairMove((param) => {
      onCrosshairMove(param);
    });
    
    const handleResize = () => {
      if (chart.current) {
        chart.current.applyOptions({ 
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight 
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (chart.current) {
        chart.current.remove();
        chart.current = null;
      }
    };
  }, [isLoading]);
  
  useEffect(() => {
    if (!candleSeries.current || !data || isLoading) return;
    
    const candleData = data.map(item => ({
      time: item.time,
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
    }));
    
    const volumeData = data.map(item => ({
      time: item.time,
      value: item.volume,
      color: item.close >= item.open ? 'rgba(32, 214, 139, 0.3)' : 'rgba(255, 77, 106, 0.3)',
    }));
    
    candleSeries.current.setData(candleData);
    volumeSeries.current.setData(volumeData);
    
    // Fit content
    chart.current.timeScale().fitContent();
    
  }, [data, isLoading]);
  
  if (isLoading) {
    return <div className="w-full h-full bg-dark-lighter animate-pulse rounded"></div>;
  }
  
  return (
    <div 
      ref={chartContainerRef} 
      className="lightweight-chart-container"
      style={{ width, height }} 
    />
  );
};

export default TradingViewChart;