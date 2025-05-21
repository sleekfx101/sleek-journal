import React from 'react';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiTrendingUp, FiFileText, FiCheckCircle, FiShare2, FiUploadCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="bg-dark-lighter/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">
                SleekJournal
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-text-secondary hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-text-secondary hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-text-secondary hover:text-white transition-colors">Testimonials</a>
              <a href="#faq" className="text-text-secondary hover:text-white transition-colors">FAQ</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.h1 
                className="text-4xl md:text-display-1 font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Take Your Trading to the <span className="bg-gradient-primary text-transparent bg-clip-text">Next Level</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-text-secondary mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                SleekJournal helps you analyze your trades, improve your strategy, and maximize your profits with advanced analytics and backtesting tools.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/dashboard" className="btn btn-primary">
                  Start Journaling Now
                </Link>
                <a href="#features" className="btn btn-outline">
                  Explore Features
                </a>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-dark-card">
                  <img src="https://firebasestorage.googleapis.com/v0/b/tradezella.appspot.com/o/static%2FScreenshot%202023-02-27%20at%209.12.31%20AM.jpg?alt=media&token=bb5c9ce5-6f57-470e-9a49-5a1f5e78f8bc" alt="Dashboard Preview" className="w-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-display-3 font-bold mb-4">Powerful Features</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">All the tools you need to take control of your trading performance and strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FiBarChart2 size={32} className="text-primary" />}
              title="Advanced Analytics"
              description="Visualize your trading performance with powerful charts and metrics. Track win rates, profit factors, and more."
            />
            <FeatureCard 
              icon={<FiTrendingUp size={32} className="text-accent" />}
              title="Backtesting Engine"
              description="Test your strategies on historical data with our TradingView-style backtesting engine. Optimize before risking real money."
            />
            <FeatureCard 
              icon={<FiFileText size={32} className="text-secondary" />}
              title="Comprehensive Journal"
              description="Document every aspect of your trades with our detailed journaling system. Add notes, screenshots, and tags."
            />
            <FeatureCard 
              icon={<FiCheckCircle size={32} className="text-accent" />}
              title="Performance Metrics"
              description="Get insights into your trading patterns with detailed metrics like win rate, average R:R ratio, and drawdown analysis."
            />
            <FeatureCard 
              icon={<FiShare2 size={32} className="text-primary" />}
              title="Social Sharing"
              description="Share trade setups and insights with the community. Learn from other successful traders."
            />
            <FeatureCard 
              icon={<FiUploadCloud size={32} className="text-secondary" />}
              title="Data Import/Export"
              description="Easily import trading data from popular platforms via CSV. Export your journal and analysis for backup."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-8 lg:mb-0 lg:mr-8">
                <h2 className="text-2xl md:text-display-4 font-bold text-white mb-4">Ready to transform your trading?</h2>
                <p className="text-white/80 text-lg max-w-xl">Join thousands of traders who've improved their performance with SleekJournal's powerful tools.</p>
              </div>
              <Link to="/dashboard" className="btn bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-xl shadow-lg">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-lighter py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-2">
                SleekJournal
              </h2>
              <p className="text-text-secondary">Your trading success starts here</p>
            </div>
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="font-semibold mb-3">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-px bg-dark-card my-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm mb-4 md:mb-0">© 2023 SleekJournal. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-text-secondary hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="card hover:border hover:border-primary/20"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  );
};

export default LandingPage;