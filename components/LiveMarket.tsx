import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ShoppingCart, MessageCircle, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LiveMarket = () => {
  const { language } = useLanguage();
  const [currentPrice, setCurrentPrice] = useState('0.000015');
  const [priceChange, setPriceChange] = useState('+12.5%');
  const [isPositive, setIsPositive] = useState(true);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  // 虚拟交易数据
  const virtualTrades = [
    { type: 'buy', address: '0x3a2f...8b91', amount: '1,250,000', time: '2s ago' },
    { type: 'sell', address: '0x7c4e...2d45', amount: '850,000', time: '5s ago' },
    { type: 'buy', address: '0x9f1a...4e67', amount: '2,100,000', time: '8s ago' },
    { type: 'buy', address: '0x2b8c...9f23', amount: '500,000', time: '12s ago' },
    { type: 'buy', address: '0x5d3e...7a89', amount: '3,500,000', time: '15s ago' },
    { type: 'sell', address: '0x1f9a...3c56', amount: '1,200,000', time: '18s ago' },
    { type: 'buy', address: '0x8e2b...9d34', amount: '950,000', time: '22s ago' },
    { type: 'buy', address: '0x4c7d...2f81', amount: '1,800,000', time: '25s ago' },
    { type: 'buy', address: '0x6a9b...5e12', amount: '2,750,000', time: '28s ago' },
    { type: 'sell', address: '0x3f8c...7a45', amount: '650,000', time: '32s ago' },
  ];

  // 虚拟评论数据（英文为主，中文辅助）
  const comments = [
    {
      en: "Finally found it! This token speaks to my heart. Modern relationships are so imbalanced! 🚀",
      zh: "终于找到了！这个代币说出了我的心声！"
    },
    {
      en: "Missed DOGE and SHIB, but NOT missing EGIRL! 100x potential! 💎",
      zh: "错过了DOGE和SHIB，但不会错过EGIRL！"
    },
    {
      en: "Buying the dip now! 100x returns after listing. Community consensus is strong! 🔥",
      zh: "现在抄底！上市后百倍回报！"
    },
    {
      en: "This project gets it. The emotional investment theory is so real. All in! 🎯",
      zh: "这个项目真的懂我们！"
    },
    {
      en: "FOMO is real! Everyone's talking about EGIRL. Don't be left behind! ⚡",
      zh: "FOMO来了！大家都在讨论EGIRL！"
    },
    {
      en: "The awakening token! This is the one that will change everything. 🚀",
      zh: "觉醒代币！这个会改变一切！"
    },
  ];

  // 轮播评论
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prev) => (prev + 1) % comments.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // 模拟价格更新（可以后续替换为真实API）
  useEffect(() => {
    const interval = setInterval(() => {
      // 模拟价格波动
      const basePrice = 0.000015;
      const variation = (Math.random() - 0.5) * 0.000002;
      const newPrice = (basePrice + variation).toFixed(8);
      setCurrentPrice(newPrice);
      
      // 模拟涨跌（偏向上涨）
      const change = (Math.random() - 0.4) * 30;
      setIsPositive(change > 0);
      setPriceChange(`${change > 0 ? '+' : ''}${change.toFixed(2)}%`);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      {/* 顶部宣传语 */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          <span className="gradient-text">
            {language === 'zh' 
              ? '你错过了 Dogecoin，错过了 Shiba Inu...' 
              : 'You missed Dogecoin, you missed Shiba Inu...'}
          </span>
          <br />
          <span className="text-3xl md:text-4xl">
            {language === 'zh' 
              ? '但这一次，你不能再错过 EGIRL！' 
              : 'But this time, you CAN\'T miss EGIRL!'}
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6"
        >
          {language === 'zh' 
            ? '当现代关系的不平衡成为共识，当情感投资的不对称被区块链记录，EGIRL 不只是代币，更是觉醒的象征。'
            : 'When relationship imbalance becomes consensus, when emotional investment asymmetry is recorded on blockchain, EGIRL is not just a token, it\'s a symbol of awakening.'}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-egirl-pink text-lg md:text-xl font-semibold"
        >
          <Zap className="w-6 h-6 animate-pulse" />
          <span>
            {language === 'zh' 
              ? '现在抄底买入，等待百倍回报！人群共识正在形成，FOMO 正在蔓延...'
              : 'Buy the dip now, wait for 100x returns! Community consensus is forming, FOMO is spreading...'}
          </span>
          <Zap className="w-6 h-6 animate-pulse" />
        </motion.div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* 左侧：实时价格 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="card"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-egirl-pink" />
            {language === 'zh' ? '实时价格' : 'Live Price'}
          </h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">{language === 'zh' ? '当前价格' : 'Current Price'}</p>
              <p className="text-3xl font-bold text-egirl-pink">${currentPrice}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">{language === 'zh' ? '24h 涨跌' : '24h Change'}</p>
              <div className={`flex items-center gap-2 text-xl font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                {priceChange}
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-2">{language === 'zh' ? '24h 交易量' : '24h Volume'}</p>
              <p className="text-xl font-semibold text-white">$1.2M</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-2">{language === 'zh' ? '持有者' : 'Holders'}</p>
              <p className="text-xl font-semibold text-white">1,247</p>
            </div>
          </div>
        </motion.div>

        {/* 中间：虚拟交易流 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="card"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-egirl-cyan" />
            {language === 'zh' ? '实时交易' : 'Live Trades'}
          </h3>
          
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {virtualTrades.map((trade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  trade.type === 'buy' ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${trade.type === 'buy' ? 'bg-green-400' : 'bg-red-400'}`} />
                  <span className="text-sm text-gray-300 font-mono">{trade.address}</span>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                    {trade.type === 'buy' ? 'Bought' : 'Sold'} {trade.amount}
                  </p>
                  <p className="text-xs text-gray-400">{trade.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 右侧：社区评论 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="card"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-egirl-purple" />
            {language === 'zh' ? '社区声音' : 'Community Voice'}
          </h3>
          
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCommentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-egirl-pink/20 to-egirl-purple/20 rounded-xl p-6 h-full flex flex-col justify-center border border-egirl-pink/30"
              >
                <MessageCircle className="w-8 h-8 text-egirl-pink mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  {language === 'zh' ? comments[currentCommentIndex].zh : comments[currentCommentIndex].en}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-8 h-8 bg-egirl-pink/30 rounded-full flex items-center justify-center">
                    <span className="text-egirl-pink">👤</span>
                  </div>
                  <span>Community Member</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* 底部CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-egirl-pink/30 to-egirl-purple/30 rounded-2xl p-6 backdrop-blur-lg border-2 border-egirl-pink/50">
          <p className="text-xl text-white mb-4 font-semibold">
            {language === 'zh' 
              ? '🚨 现在抄底买入，上市后百倍回报！' 
              : '🚨 Buy the dip now, 100x returns after listing!'}
          </p>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            <ShoppingCart className="w-6 h-6 mr-2" />
            {language === 'zh' ? '立即抄底买入' : 'Buy the Dip Now'}
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LiveMarket;

