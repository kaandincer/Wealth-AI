import { useState } from 'react';

const AvatarInterface = () => {
  const [activeTab, setActiveTab] = useState('conversation');

  const conversationMessages = [
    {
      type: 'ai',
      message: "Hi Sarah! I noticed you've been spending more on dining out this month. Would you like to discuss your budget goals?",
      time: "2:30 PM"
    },
    {
      type: 'user',
      message: "Yes, I've been stressed about work and treating myself. I know it's not great for my savings goals.",
      time: "2:31 PM"
    },
    {
      type: 'ai',
      message: "I understand completely. Stress spending is really common. Let's look at some alternatives that might help you feel better without impacting your goals.",
      time: "2:32 PM"
    }
  ];

  const features = [
    "Natural conversation flow",
    "Emotional intelligence",
    "Judgment-free guidance",
    "24/7 availability",
    "Personalized responses",
    "Context awareness"
  ];

  return (
    <section id="avatar" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your AI Financial Coach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike traditional robo-advisors, your AI coach talks to you like a smart, calm friend — reassuring, knowledgeable, and never condescending.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Interface Demo */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-2xl">
              {/* Avatar */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah's AI Coach</h3>
                <p className="text-gray-600">Always here to help</p>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-white rounded-xl p-1 mb-6">
                <button
                  onClick={() => setActiveTab('conversation')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'conversation'
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Conversation
                </button>
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'insights'
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Insights
                </button>
              </div>

              {/* Conversation Tab */}
              {activeTab === 'conversation' && (
                <div className="bg-white rounded-xl p-4 h-64 overflow-y-auto">
                  {conversationMessages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${msg.type === 'ai' ? 'text-left' : 'text-right'}`}>
                      <div className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        msg.type === 'ai' 
                          ? 'bg-gray-100 text-gray-800' 
                          : 'bg-primary-500 text-white'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.type === 'ai' ? 'text-gray-500' : 'text-primary-100'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Insights Tab */}
              {activeTab === 'insights' && (
                <div className="bg-white rounded-xl p-4 h-64">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-green-800">Savings Goal</span>
                      <span className="text-sm font-bold text-green-600">+15% this month</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium text-yellow-800">Dining Out</span>
                      <span className="text-sm font-bold text-yellow-600">$320 over budget</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-blue-800">Investment Growth</span>
                      <span className="text-sm font-bold text-blue-600">+8.2% YTD</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="mt-4 flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask your AI coach anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why It Feels Different
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Because it doesn't just show you numbers — it talks to you. It makes finance feel human, manageable, and even… therapeutic. It's not just a tool — it's a teammate.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Your Money Therapist
              </h4>
              <p className="text-gray-600">
                Get help processing procrastination, anxiety, and shame around money with judgment-free guidance from your AI coach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarInterface; 