import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      company: "Tech Startup",
      avatar: "SC",
      quote: "My AI coach helped me pay off $15,000 in credit card debt in just 8 months. It's like having a financial therapist who never judges and always has the right advice.",
      rating: 5,
      improvement: "+$15,000 debt paid off"
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      company: "Fortune 500",
      avatar: "MR",
      quote: "I was always stressed about money until I met my AI coach. Now I have a clear plan for early retirement and the confidence to make big financial decisions.",
      rating: 5,
      improvement: "On track for early retirement"
    },
    {
      name: "Emily Watson",
      role: "Freelance Designer",
      company: "Self-employed",
      avatar: "EW",
      quote: "As a freelancer, my income was unpredictable. My AI coach helped me build a solid emergency fund and create a budget that actually works for my lifestyle.",
      rating: 5,
      improvement: "6-month emergency fund built"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from Real Users
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how thousands of people have transformed their financial lives with their AI financial coach.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>

              {/* Improvement */}
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="text-sm font-medium text-green-800">
                  Key Achievement:
                </div>
                <div className="text-sm font-bold text-green-600">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">$2.3M</div>
              <div className="text-gray-600">Total Debt Paid Off</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">94%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 