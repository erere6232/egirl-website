import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Coins, Users, TrendingUp, Zap, Heart, Brain, Shield, Gift, Download, ShoppingCart, MessageCircle, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TokenCard from '../components/TokenCard';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const tokenInfo = [
    {
      title: 'Total Supply',
      value: '1B EGIRL',
      icon: Coins,
      description: '1,000,000,000 tokens'
    },
    {
      title: 'Contract Address',
      value: '0x2814...fb11',
      icon: Shield,
      description: 'BSC Network',
      isClickable: true
    },
    {
      title: 'Community',
      value: 'Growing',
      icon: Users,
      description: 'Join us now'
    },
    {
      title: 'Current Price',
      value: '$0.000015',
      icon: TrendingUp,
      description: 'Early stage'
    }
  ];

  const features = [
    {
      icon: Heart,
      title: 'Satirical Reflection',
      description: 'Not encouraging frivolity, but satirizing imbalance in modern relationships'
    },
    {
      icon: Brain,
      title: 'Social Commentary',
      description: 'Using blockchain to express reflections on reality through memes'
    },
    {
      icon: Zap,
      title: 'Community Driven',
      description: 'Building consensus through humor and technology'
    }
  ];

  return (
    <>
      <SEO 
        title="EasyGirl (EGIRL) - Satirical Meme Token"
        description="EasyGirl (EGIRL) - A satirical meme token reflecting on modern relationships through blockchain technology. Community-driven on BSC."
        url="/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-egirl-dark via-purple-900 to-egirl-dark">
        <Header />
        
        {/* Airdrop Banner - Top */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 pt-8 pb-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-egirl-pink/20 via-egirl-purple/20 to-egirl-cyan/20 backdrop-blur-lg border-2 border-egirl-pink rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className="inline-block mb-4"
                  >
                    <Gift className="w-16 h-16 text-egirl-pink mx-auto md:mx-0" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="gradient-text">{t('airdrop.title')}</span> 🎁
                  </h2>
                  <p className="text-xl text-white mb-6">
                    {t('airdrop.description')} <span className="font-bold text-egirl-pink text-2xl">500-1,000 EGIRL</span> tokens for FREE!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://t.me/+VdZHL9gqOF5lNTI1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center group"
                    >
                      <Gift className="w-5 h-5 mr-2 animate-bounce" />
                      {t('airdrop.claim')}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {t('buy.now.short')}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
                    <div className="space-y-4">
                      <Link
                        href="/whitepaper"
                        className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all"
                      >
                        <Download className="w-5 h-5 inline mr-2" />
                        Whitepaper
                      </Link>
                      <a
                        href="https://t.me/+VdZHL9gqOF5lNTI1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all mb-3"
                      >
                        <MessageCircle className="w-5 h-5 inline mr-2" />
                        🇬🇧 English Community
                      </a>
                      <a
                        href="https://t.me/+N7FUuuYJIdQyMjFl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all"
                      >
                        <MessageCircle className="w-5 h-5 inline mr-2" />
                        🇨🇳 中文社区
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-8"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center mx-auto animate-float">
                  <Coins className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="gradient-text">EGIRL</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">
                {t('hero.subtitle')}
              </p>
              <p className="text-2xl md:text-3xl text-egirl-pink font-semibold mb-8">
                {t('hero.subtitle2')}
              </p>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {t('buy.now')}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <Link href="/token" className="btn-secondary inline-flex items-center justify-center">
                  {t('learn.more')} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Token Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {tokenInfo.map((info, index) => (
                <TokenCard
                  key={index}
                  title={info.title}
                  value={info.value}
                  icon={info.icon}
                  description={info.description}
                  isClickable={info.isClickable}
                />
              ))}
            </motion.div>

            {/* Core Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {t('philosophy')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                    className="card text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Theory Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="card max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="gradient-text">{t('theory.title')}</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t('theory.description')}
              </p>
              
              <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-2xl p-6">
                <p className="text-xl text-white font-semibold mb-4">
                  {t('theory.quote')}
                </p>
                <p className="text-gray-300">
                  {t('theory.quote.desc')}
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-r from-egirl-pink/30 to-egirl-purple/30 rounded-3xl p-8 backdrop-blur-lg border border-egirl-pink/50">
                <h2 className="text-4xl font-bold text-white mb-6">
                  {t('cta.title')} <span className="gradient-text">{t('cta.title2')}</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {t('cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://t.me/+VdZHL9gqOF5lNTI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
                  >
                    <Gift className="w-6 h-6 mr-2" />
                    {t('airdrop.claim')}
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
                  >
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Buy on PancakeSwap
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
