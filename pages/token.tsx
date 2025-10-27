import { motion } from 'framer-motion';
import { Coins, Shield, TrendingUp, Users, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
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
      title: 'Network',
      value: 'BSC',
      icon: Shield,
      description: 'Binance Smart Chain'
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A satirical meme token built on Binance Smart Chain, reflecting on modern 
                relationships through blockchain technology.
              </p>
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
                    className="btn-primary inline-flex items-center"
                  >
                    {copied ? <CheckCircle className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                    {copied ? 'Copied!' : 'Copy Address'}
                  </button>
                  <a
                    href={`https://bscscan.com/token/${contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
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
              className="card max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">Trading Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Where to Buy</h3>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="block bg-gradient-to-r from-egirl-pink to-egirl-purple text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      PancakeSwap
                    </a>
                    <a
                      href="#"
                      className="block bg-gradient-to-r from-egirl-cyan to-blue-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Uniswap
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Price Tracking</h3>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="block bg-gradient-to-r from-egirl-gold to-yellow-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      CoinGecko
                    </a>
                    <a
                      href="#"
                      className="block bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      DEXScreener
                    </a>
                  </div>
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
