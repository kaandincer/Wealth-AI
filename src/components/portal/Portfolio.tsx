import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');

  const holdings = [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 25, price: 150.25, change: 2.5, allocation: 35 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 15, price: 320.50, change: -1.2, allocation: 28 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 8, price: 2800.00, change: 0.8, allocation: 20 },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 12, price: 850.75, change: 5.2, allocation: 12 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 6, price: 450.00, change: -0.5, allocation: 5 },
  ];

  const timeframes = ['1W', '1M', '3M', '6M', '1Y', 'ALL'];

  const totalValue = holdings.reduce((sum, holding) => sum + (holding.shares * holding.price), 0);

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Portfolio Summary</h3>
          <div className="flex space-x-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  selectedTimeframe === timeframe
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Value</p>
            <p className="text-2xl font-bold text-gray-900">${totalValue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Total Return</p>
            <p className="text-2xl font-bold text-green-600">+12.5%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Today's Change</p>
            <p className="text-2xl font-bold text-green-600">+$1,250</p>
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Holdings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shares
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Allocation
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {holdings.map((holding, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{holding.symbol}</div>
                      <div className="text-sm text-gray-500">{holding.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {holding.shares}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${holding.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${(holding.shares * holding.price).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      holding.change >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {holding.change >= 0 ? '+' : ''}{holding.change}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${holding.allocation}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{holding.allocation}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Asset Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Allocation</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                <span className="text-sm font-medium text-gray-900">Technology</span>
              </div>
              <span className="text-sm text-gray-600">65%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <span className="text-sm font-medium text-gray-900">Healthcare</span>
              </div>
              <span className="text-sm text-gray-600">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                <span className="text-sm font-medium text-gray-900">Consumer</span>
              </div>
              <span className="text-sm text-gray-600">10%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                <span className="text-sm font-medium text-gray-900">Other</span>
              </div>
              <span className="text-sm text-gray-600">5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance vs Market</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Your Portfolio</span>
              <span className="text-sm font-medium text-green-600">+12.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">S&P 500</span>
              <span className="text-sm font-medium text-gray-900">+8.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">NASDAQ</span>
              <span className="text-sm font-medium text-gray-900">+10.1%</span>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Outperformance</span>
                <span className="text-sm font-medium text-green-600">+4.3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 