import { motion } from 'framer-motion';
import { Coins, Shield, TrendingUp, Users, ExternalLink, Copy, CheckCircle, ShoppingCart, Gift, MessageCircle, Download } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TokenCard from '../components/TokenCard';
import SEO from '../components/SEO';

const TokenPage = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x2814cdae605eeb2e7755ee7aad38da9facfafb11';

  const tokenDetails = [
    {
      title: 'Token Name',
      value: 'EasyGirl',
      icon: Coins,
      description: 'Official token name'
    },
    {
      title: 'Token Symbol',
      value: 'EGIRL',
      icon: TrendingUp,
      description: 'Trading symbol'
    },
    {
      title: 'Total Supply',
      value: '1,000,000,000',
      icon: Coins,
      description: 'Maximum supply'
    },
    {
      title: 'Current Price',
      value: '$0.000015',
      icon: TrendingUp,
      description: 'Early stage'
    }
  ];

  const allocationData = [
    { category: 'Liquidity Pool', percentage: 40, color: 'from-egirl-pink to-egirl-purple' },
    { category: 'Community Rewards', percentage: 30, color: 'from-egirl-cyan to-blue-500' },
    { category: 'Team Reserve', percentage: 20, color: 'from-egirl-gold to-yellow-500' },
    { category: 'Marketing', percentage: 10, color: 'from-green-400 to-green-600' }
  ];

  const handleCopyContract = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO 
        title="Token Information"
        description="Complete EGIRL token details, contract address, allocation, and trading information on BSC."
        url="/token"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-egirl-dark via-purple-900 to-egirl-dark">
        <Header />
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="gradient-text">EGIRL Token</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                A satirical meme token built on Binance Smart Chain, reflecting on modern 
                relationships through blockchain technology.
              </p>
              
              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://t.me/+VdZHL9gqOF5lNTI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Claim Free Airdrop (500-1K EGIRL)
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy on PancakeSwap
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Token Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {tokenDetails.map((detail, index) => (
                <TokenCard
                  key={index}
                  title={detail.title}
                  value={detail.value}
                  icon={detail.icon}
                  description={detail.description}
                />
              ))}
            </motion.div>

            {/* Contract Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="card max-w-4xl mx-auto mb-16"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Contract Address</h2>
                <div className="bg-egirl-dark/50 rounded-2xl p-6 mb-6">
                  <code className="text-egirl-pink text-lg font-mono break-all">
                    {contractAddress}
                  </code>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleCopyContract}
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    {copied ? <CheckCircle className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                    {copied ? 'Copied!' : 'Copy Address'}
                  </button>
                  <a
                    href={`https://bscscan.com/token/${contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View on BSCScan
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Token Allocation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="card max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">Token Allocation</h2>
              
              <div className="space-y-6">
                {allocationData.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">{item.category}</span>
                      <span className="text-egirl-pink font-bold text-xl">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trading Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="card max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">Buy & Trade EGIRL</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Buy on DEX</h3>
                  <div className="space-y-4">
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gradient-to-r from-egirl-pink to-egirl-purple text-white py-4 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <ShoppingCart className="w-6 h-6 inline mr-2" />
                      PancakeSwap
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Price Tracking</h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.dexscreener.com/bsc/0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gradient-to-r from-green-400 to-green-600 text-white py-4 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      DEXScreener
                    </a>
                  </div>
                </div>
              </div>

              {/* Airdrop Reminder */}
              <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-2xl p-6 mt-8">
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  🎁 <span className="gradient-text">Claim Your Free Airdrop!</span>
                </h3>
                <p className="text-center text-gray-300 mb-6">
                  Join our Telegram group, submit your wallet address, and receive 500-1,000 EGIRL tokens for FREE!
                </p>
                <div className="text-center">
                  <div className="space-y-3">
                    <a
                      href="https://t.me/+VdZHL9gqOF5lNTI1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center w-full justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      🇬🇧 English Community
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    <a
                      href="https://t.me/+N7FUuuYJIdQyMjFl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center w-full justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      🇨🇳 中文社区
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Whitepaper */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="card max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">Project Documentation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-egirl-dark/50 rounded-xl p-6 text-center hover:bg-egirl-dark/70 transition-all">
                  <Download className="w-12 h-12 text-egirl-pink mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Whitepaper</h3>
                  <p className="text-gray-300 mb-4">Download our complete project documentation</p>
                  <Link
                    href="/whitepaper"
                    className="btn-primary inline-flex items-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    View Whitepaper
                  </Link>
                </div>
                
                <div className="bg-egirl-dark/50 rounded-xl p-6 text-center hover:bg-egirl-dark/70 transition-all">
                  <Copy className="w-12 h-12 text-egirl-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Tokenomics</h3>
                  <p className="text-gray-300 mb-4">Learn about our token distribution</p>
                  <Link href="/token" className="btn-secondary inline-flex items-center">
                    View Tokenomics
                  </Link>
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

export default TokenPage;
