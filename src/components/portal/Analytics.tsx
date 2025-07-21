import React, { useState } from 'react';

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1Y');

  const periods = ['1M', '3M', '6M', '1Y', '3Y', '5Y'];

  const performanceData = {
    portfolio: [100, 105, 98, 112, 108, 115, 120, 118, 125, 130, 128, 135],
    sp500: [100, 102, 99, 105, 103, 108, 110, 109, 112, 115, 113, 118],
    nasdaq: [100, 104, 97, 110, 106, 113, 116, 114, 120, 125, 122, 128]
  };

  const monthlyReturns = [
    { month: 'Jan', return: 5.2, benchmark: 3.1 },
    { month: 'Feb', return: -2.1, benchmark: -1.8 },
    { month: 'Mar', return: 8.5, benchmark: 6.2 },
    { month: 'Apr', return: 3.2, benchmark: 2.9 },
    { month: 'May', return: -1.5, benchmark: -0.8 },
    { month: 'Jun', return: 6.8, benchmark: 5.1 },
    { month: 'Jul', return: 4.2, benchmark: 3.8 },
    { month: 'Aug', return: -0.8, benchmark: -1.2 },
    { month: 'Sep', return: 7.1, benchmark: 5.9 },
    { month: 'Oct', return: 2.4, benchmark: 2.1 },
    { month: 'Nov', return: 9.2, benchmark: 7.3 },
    { month: 'Dec', return: 3.8, benchmark: 3.2 }
  ];

  const riskMetrics = {
    volatility: 12.5,
    sharpeRatio: 1.8,
    maxDrawdown: -8.2,
    beta: 1.1,
    alpha: 2.3
  };

  const sectorPerformance = [
    { sector: 'Technology', weight: 65, return: 15.2, benchmark: 12.1 },
    { sector: 'Healthcare', weight: 20, return: 8.5, benchmark: 6.8 },
    { sector: 'Consumer', weight: 10, return: 5.2, benchmark: 4.9 },
    { sector: 'Other', weight: 5, return: 3.1, benchmark: 2.8 }
  ];

  const getMaxValue = (data: number[]) => Math.max(...data);
  const getMinValue = (data: number[]) => Math.min(...data);

  const maxValue = getMaxValue(performanceData.portfolio);
  const minValue = getMinValue(performanceData.portfolio);

  const getBarHeight = (value: number) => {
    const range = maxValue - minValue;
    return ((value - minValue) / range) * 100;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Analytics & Performance</h3>
          <p className="text-sm text-gray-600">Detailed insights into your portfolio performance</p>
        </div>
        <div className="flex space-x-2">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                selectedPeriod === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Chart</h4>
          <div className="h-64 flex items-end justify-between space-x-1">
            {performanceData.portfolio.map((value, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-blue-600 rounded-t"
                  style={{ height: `${getBarHeight(value)}%` }}
                ></div>
                <div className="text-xs text-gray-500 mt-1">{index + 1}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-gray-600">Portfolio Growth</span>
            <span className="font-semibold text-green-600">+35%</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Risk Metrics</h4>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Volatility</span>
              <span className="text-sm font-medium text-gray-900">{riskMetrics.volatility}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Sharpe Ratio</span>
              <span className="text-sm font-medium text-green-600">{riskMetrics.sharpeRatio}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Max Drawdown</span>
              <span className="text-sm font-medium text-red-600">{riskMetrics.maxDrawdown}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Beta</span>
              <span className="text-sm font-medium text-gray-900">{riskMetrics.beta}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Alpha</span>
              <span className="text-sm font-medium text-green-600">{riskMetrics.alpha}%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance vs Benchmarks</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Your Portfolio</span>
              </div>
              <span className="text-sm font-medium text-green-600">+35%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">S&P 500</span>
              </div>
              <span className="text-sm font-medium text-gray-900">+18%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">NASDAQ</span>
              </div>
              <span className="text-sm font-medium text-gray-900">+28%</span>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Outperformance</span>
                <span className="text-sm font-medium text-green-600">+17%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Returns */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900">Monthly Returns</h4>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Your Return</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Benchmark</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {monthlyReturns.map((month, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{month.month}</td>
                    <td className={`px-4 py-3 text-sm font-medium ${
                      month.return >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {month.return >= 0 ? '+' : ''}{month.return}%
                    </td>
                    <td className={`px-4 py-3 text-sm text-gray-600 ${
                      month.benchmark >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {month.benchmark >= 0 ? '+' : ''}{month.benchmark}%
                    </td>
                    <td className={`px-4 py-3 text-sm font-medium ${
                      month.return - month.benchmark >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {month.return - month.benchmark >= 0 ? '+' : ''}{(month.return - month.benchmark).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sector Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900">Sector Performance</h4>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {sectorPerformance.map((sector, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <div>
                    <p className="font-medium text-gray-900">{sector.sector}</p>
                    <p className="text-sm text-gray-600">{sector.weight}% allocation</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    sector.return >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {sector.return >= 0 ? '+' : ''}{sector.return}%
                  </p>
                  <p className="text-sm text-gray-600">vs {sector.benchmark}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 