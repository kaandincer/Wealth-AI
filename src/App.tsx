import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AvatarInterface from './components/AvatarInterface';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import UserPortal from './components/UserPortal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <UserPortal onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header onLogin={handleLogin} />
      <Hero onLogin={handleLogin} />
      <Features />
      <HowItWorks />
      <AvatarInterface />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App; 