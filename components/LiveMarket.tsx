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

  // 生成随机数量（10000-20000000枚，支持千分位格式化）
  const getRandomAmount = () => {
    const min = 10000;
    const max = 20000000;
    const amount = Math.floor(Math.random() * (max - min + 1)) + min;
    return amount.toLocaleString();
  };

  // 生成随机以太坊地址（符合真实格式的简化版）
  const generateRandomAddress = () => {
    const prefix = '0x';
    const chars = '0123456789abcdef';
    let address = prefix;
    for (let i = 0; i < 8; i++) {
      address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address + '...' + chars.slice(Math.floor(Math.random() * 12), Math.floor(Math.random() * 12) + 4);
  };

  // 生成随机时间（1s-35s前，贴合实时交易流节奏）
  const generateRandomTime = () => {
    const seconds = Math.floor(Math.random() * 35) + 1;
    return `${seconds}s ago`;
  };

  // 虚拟交易数据（仅保留数量，10000-20000000枚，买卖随机分布）
  const virtualTrades = [
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
    { 
      type: Math.random() > 0.45 ? 'buy' : 'sell', 
      address: generateRandomAddress(), 
      amount: getRandomAmount(), 
      time: generateRandomTime() 
    },
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
      en: "Accumulating now before CEX listings. Early entry = maximum potential! 🔥",
      zh: "在CEX上线前积累。早期入场=最大潜力！"
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
    {
      en: "Just bought 5M tokens! This is the last chance before it moons. Get in now! 🌙",
      zh: "刚买了500万！这是起飞前的最后机会！"
    },
    {
      en: "The community is growing so fast! 1000+ holders already. This is going to explode! 💥",
      zh: "社区增长太快了！已经有1000+持有者！要爆发了！"
    },
    {
      en: "Relationship anxiety? This token understands. It's not just a meme, it's a movement! 🎭",
      zh: "关系焦虑？这个代币懂你。不只是梗，是运动！"
    },
    {
      en: "Wish I found this earlier! But still early. 100x is just the beginning! 📈",
      zh: "真希望早点发现！但还不晚。百倍只是开始！"
    },
    {
      en: "The imbalance in modern relationships is real. EGIRL captures it perfectly. Genius! 🧠",
      zh: "现代关系的不平衡是真实的。EGIRL完美捕捉了这一点！"
    },
    {
      en: "Sold my other bags for EGIRL. This is the one. Trust the process! 🎯",
      zh: "卖了其他代币买EGIRL。就是这个了！相信过程！"
    },
    {
      en: "The emotional investment theory hits different. This token will resonate with millions! 🌍",
      zh: "情感投资理论太对了。这个代币会引起百万人的共鸣！"
    },
    {
      en: "Early adopter here! Been holding since day 1. The community is amazing! 💪",
      zh: "早期采用者！从第一天就持有。社区太棒了！"
    },
    {
      en: "Don't wait for it to list on major exchanges. Buy now or regret later! ⏰",
      zh: "不要等它上大交易所。现在买入，否则后悔！"
    },
    {
      en: "The awakening is real. This token represents a generation's frustration. Powerful! ⚡",
      zh: "觉醒是真实的。这个代币代表了一代人的挫折。强大！"
    },
    {
      en: "Just joined the Telegram. The energy is insane! Everyone is so bullish! 🐂",
      zh: "刚加入电报群。能量太疯狂了！每个人都很看涨！"
    },
    {
      en: "Relationship dynamics are changing. EGIRL is ahead of the curve. Smart play! 🎲",
      zh: "关系动态在改变。EGIRL领先一步。聪明的选择！"
    },
    {
      en: "This is not financial advice, but I'm all in. The narrative is too strong! 📚",
      zh: "这不是财务建议，但我全仓了。叙事太强了！"
    },
    {
      en: "The dip won't last long. Smart money is accumulating. Get your bags ready! 👜",
      zh: "下跌不会持续太久。聪明钱在积累。准备好你的袋子！"
    },
    {
      en: "Got 10,000 EGIRL from the airdrop! The team is so generous. Holding for long term! 🎁",
      zh: "空投收到了10000个EGIRL！团队太大气了。长期持有！"
    },
    {
      en: "The referral rewards are amazing! Invited 5 friends, got bonus tokens. This project rewards early supporters! 🎉",
      zh: "邀请奖励太棒了！邀请了5个朋友，收到了奖励代币。这个项目奖励早期支持者！"
    },
    {
      en: "Received my airdrop tokens! 10K EGIRL in my wallet. Keeping them until CEX listing. This is going to be huge! 💰",
      zh: "收到空投代币了！钱包里有1万EGIRL。留着等上交易所。这要起飞了！"
    },
    {
      en: "The team is so generous with airdrops! Got my tokens and already bought more. Long-term holder here! 📊",
      zh: "团队空投太大气了！收到代币后又买了更多。我是长期持有者！"
    },
    {
      en: "Invited friends and got referral rewards! The more you share, the more you earn. Love this incentive model! 🎯",
      zh: "邀请朋友获得了推荐奖励！分享越多赚越多。喜欢这个激励模式！"
    },
    {
      en: "Airdrop received! 10,000 EGIRL tokens. Not selling, holding until mainstream adoption. This is the way! 🚀",
      zh: "收到空投了！10000个EGIRL代币。不卖，持有到主流认可。就是这样！"
    },
    {
      en: "The referral program is incredible! Every friend I invite gets tokens, and I get rewards too. Win-win! 🌟",
      zh: "推荐计划太棒了！每个我邀请的朋友都收到代币，我也得到奖励。双赢！"
    },
    {
      en: "Got my airdrop and immediately bought more! The team's generosity shows they're serious. Long-term bullish! 📈",
      zh: "收到空投后立即买了更多！团队的大气说明他们是认真的。长期看涨！"
    },
    {
      en: "Received 10K tokens from airdrop! Keeping them safe. Will accumulate more before it goes mainstream. Smart move! 💎",
      zh: "空投收到1万代币！好好保存。在主流认可前继续积累。明智之举！"
    },
    {
      en: "The invite rewards are fantastic! Shared with my crypto group, everyone got tokens. Community is growing fast! 🔥",
      zh: "邀请奖励太棒了！分享到我的加密群，每个人都收到代币。社区增长很快！"
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
      const basePrice = 0.000015;
      const variation = (Math.random() - 0.5) * 0.000002;
      const newPrice = (basePrice + variation).toFixed(8);
      setCurrentPrice(newPrice);
      
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
              ? '早期积累阶段，社区共识正在形成。在主流认可之前，把握机会...'
              : 'Early accumulation phase. Community consensus is forming. Get positioned before mainstream recognition...'}
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
              ? '🚨 早期积累阶段，把握主流认可前的机会' 
              : '🚨 Early accumulation phase - Position before mainstream adoption'}
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
