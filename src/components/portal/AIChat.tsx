import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI financial advisor. I can help you with investment strategies, portfolio analysis, retirement planning, and more. What would you like to discuss today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "How should I diversify my portfolio?",
    "What's my retirement outlook?",
    "Should I invest in tech stocks?",
    "How much should I save monthly?",
    "What's my risk tolerance?"
  ];

  const generateAIResponse = (userMessage: string): string => {
    const responses = {
      portfolio: "Based on your current portfolio, I recommend diversifying across different sectors. Consider adding some international exposure and bonds to reduce risk. Your current tech-heavy allocation (65%) could be balanced with healthcare and consumer staples.",
      retirement: "Looking at your current savings and investment rate, you're on track for retirement at 65. However, increasing your monthly contribution by $500 could allow you to retire 3 years earlier. Consider maxing out your 401(k) and IRA contributions.",
      tech: "Tech stocks can be volatile but offer strong growth potential. Given your current tech allocation, I'd suggest being selective. Focus on established companies with strong fundamentals rather than speculative growth stocks.",
      savings: "Aim to save 20% of your income, with 10% going to retirement accounts and 10% to emergency funds and other goals. Given your current expenses, that's about $2,000 per month.",
      risk: "Your current risk score is 65/100, which is moderate. This aligns well with your age and goals. Consider reducing risk as you approach retirement by increasing bond allocation."
    };

    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('diversify') || lowerMessage.includes('portfolio')) return responses.portfolio;
    if (lowerMessage.includes('retirement')) return responses.retirement;
    if (lowerMessage.includes('tech') || lowerMessage.includes('stock')) return responses.tech;
    if (lowerMessage.includes('save') || lowerMessage.includes('monthly')) return responses.savings;
    if (lowerMessage.includes('risk')) return responses.risk;

    return "I understand your question. Let me analyze your financial data and provide personalized advice. Could you provide more specific details about what you'd like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <h3 className="font-semibold">AI Financial Advisor</h3>
            <p className="text-sm text-blue-100">Online • Ready to help</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <p className="text-sm font-medium text-gray-700 mb-3">Quick Questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me about your finances..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat; 