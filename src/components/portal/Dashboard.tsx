import React from 'react';

const Dashboard: React.FC = () => {
  const financialData = {
    totalAssets: 125000,
    monthlyGrowth: 3.2,
    riskScore: 65,
    aiInsights: [
      "Your portfolio is well-diversified across tech and healthcare sectors",
      "Consider increasing your emergency fund to 6 months of expenses",
      "Your retirement contributions are on track for your goals"
    ]
  };

  const recentActivity = [
    { type: 'investment', description: 'Bought 10 shares of AAPL', amount: 1500, date: '2024-01-15' },
    { type: 'withdrawal', description: 'Emergency fund withdrawal', amount: -500, date: '2024-01-12' },
    { type: 'deposit', description: 'Salary deposit', amount: 3500, date: '2024-01-10' },
    { type: 'investment', description: 'Sold 5 shares of TSLA', amount: -1200, date: '2024-01-08' },
  ];

  return (
    <div className="space-y-6">
      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Assets</p>
              <p className="text-2xl font-bold text-gray-900">${financialData.totalAssets.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-green-600 text-xl">💰</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm font-medium">+{financialData.monthlyGrowth}% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
              <p className="text-2xl font-bold text-gray-900">+{financialData.monthlyGrowth}%</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <span className="text-blue-600 text-xl">📈</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-600 text-sm">vs. market +2.1%</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Risk Score</p>
              <p className="text-2xl font-bold text-gray-900">{financialData.riskScore}/100</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <span className="text-yellow-600 text-xl">⚠️</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-600 text-sm">Moderate risk</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">AI Advisor</p>
              <p className="text-2xl font-bold text-gray-900">Online</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <span className="text-purple-600 text-xl">🤖</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm font-medium">Ready to help</span>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <span className="mr-2">🤖</span>
            AI Insights
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {financialData.aiInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'investment' ? 'bg-blue-100' :
                    activity.type === 'deposit' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <span className={`text-lg ${
                      activity.type === 'investment' ? 'text-blue-600' :
                      activity.type === 'deposit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {activity.type === 'investment' ? '📊' :
                       activity.type === 'deposit' ? '💰' : '💸'}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </div>
                <div className={`font-semibold ${
                  activity.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.amount > 0 ? '+' : ''}${Math.abs(activity.amount).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 