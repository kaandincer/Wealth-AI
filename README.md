# Wealth-AI - AI Financial Advisor Platform

Your all-in-one financial visualization tool with an AI-powered wealth coach you can talk to. A modern, responsive platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Landing Page
- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Interactive avatar interface demo
  - Pricing toggle (monthly/annual)
  - Mobile-friendly navigation
  - Smooth scrolling navigation

### User Portal
- **Dashboard**: Financial overview with AI insights and recent activity
- **Portfolio Management**: Holdings tracking, performance analysis, and asset allocation
- **AI Chat Interface**: Interactive financial advisor with personalized advice
- **Goals Tracking**: Financial goal setting and progress visualization
- **Analytics**: Performance charts, risk metrics, and benchmark comparisons
- **Settings**: User preferences, notifications, and security settings

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaandincer/Wealth-AI.git
   cd Wealth-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Wealth-AI/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── portal/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── AIChat.tsx
│   │   │   ├── Goals.tsx
│   │   │   ├── Analytics.tsx
│   │   │   └── Settings.tsx
│   │   ├── UserPortal.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── AvatarInterface.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient (`primary-50` to `primary-900`)
- Secondary colors: Purple gradient (`secondary-50` to `secondary-900`)

### Components
Each section is a separate component in the `src/components/` directory:
- Modify individual components to change content and styling
- Add new sections by creating new components and importing them in `App.tsx`

### Styling
- Custom CSS classes are defined in `src/index.css`
- Tailwind utilities are used throughout the components
- Custom animations are defined in the Tailwind config

## 🌟 Key Features Highlighted

### AI Financial Coach
- Complete financial picture through Plaid integration
- Intelligent simulations and "what-if" scenarios
- Money therapy and emotional support
- Regular check-ins and proactive insights

### Avatar Interface
- Natural conversation flow
- Emotional intelligence
- Judgment-free guidance
- 24/7 availability

### User Portal Features
- **Dashboard**: Real-time financial overview with AI insights
- **Portfolio**: Comprehensive holdings and performance tracking
- **AI Chat**: Interactive financial advisor with quick questions
- **Goals**: Financial goal setting with progress tracking
- **Analytics**: Performance charts and risk metrics
- **Settings**: User preferences and security management

### Pricing Plans
- Starter: $9/month (annual) - Basic features
- Professional: $19/month (annual) - Most popular
- Enterprise: $39/month (annual) - Advanced features

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size
- Fast loading times

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact the development team.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
