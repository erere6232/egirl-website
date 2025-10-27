import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Homepage
    'hero.title': 'EGIRL',
    'hero.subtitle': 'When memes become mirrors,',
    'hero.subtitle2': 'awakening becomes consensus',
    'hero.description': 'EasyGirl (EGIRL) is a satirical meme token that reflects on modern relationships through blockchain technology. Not encouraging frivolity, but satirizing imbalance.',
    'airdrop.title': 'Free Airdrop!',
    'airdrop.description': 'Join our Telegram and submit your wallet address to receive',
    'airdrop.claim': 'Claim Free Airdrop',
    'airdrop.join': 'Join Telegram',
    'buy.now': 'Buy EGIRL Now',
    'buy.now.short': 'Buy Now',
    'learn.more': 'Learn More',
    'price': 'Current Price',
    'price.desc': 'Early stage',
    'supply': 'Total Supply',
    'community': 'Community',
    'community.desc': 'Growing',
    'contract': 'Contract Address',
    'network': 'BSC Network',
    'philosophy': 'Our Philosophy',
    'theory.title': 'The "Labor Investment Theory"',
    'theory.description': 'In the imbalanced relationships of desire and responsibility, there are always those who invest everything, and those who benefit easily. EGIRL uses blockchain language to satirize this asymmetrical absurdity.',
    'theory.quote': '"Awakening is not anger, but clarity; not escaping responsibility, but redefining value."',
    'theory.quote.desc': 'Male de-responsibilization awakening is not about abandoning responsibility, but refusing to be held hostage by emotions and money, reclaiming the freedom of independent thinking and choice.',
    'cta.title': 'Ready to Join the',
    'cta.title2': 'Movement',
    'cta.description': 'Get your free airdrop or buy EGIRL on PancakeSwap now!',
    // Navigation
    'nav.home': 'Home',
    'nav.token': 'Token',
    'nav.team': 'Team',
    'nav.roadmap': 'Roadmap',
    'nav.contact': 'Contact',
    'nav.whitepaper': 'Whitepaper',
    // Footer
    'footer.description': 'EasyGirl (EGIRL) - A satirical meme token that reflects on modern relationships through blockchain technology. Not encouraging frivolity, but satirizing imbalance.',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect With Us',
    'footer.telegram': 'Telegram Community:',
    'footer.english': '🇬🇧 English',
    'footer.chinese': '🇨🇳 中文',
  },
  zh: {
    // Homepage
    'hero.title': 'EGIRL',
    'hero.subtitle': '当梗成为镜子时，',
    'hero.subtitle2': '觉醒成为共识',
    'hero.description': 'EasyGirl (EGIRL) 是一个反映现代关系的讽刺梗代币，通过区块链技术传达。不鼓励轻浮，而是讽刺不平衡。',
    'airdrop.title': '免费空投！',
    'airdrop.description': '加入我们的电报群并提交您的钱包地址，即可免费获得',
    'airdrop.claim': '领取免费空投',
    'airdrop.join': '加入电报群',
    'buy.now': '立即购买 EGIRL',
    'buy.now.short': '立即购买',
    'learn.more': '了解更多',
    'price': '当前价格',
    'price.desc': '早期阶段',
    'supply': '总供应量',
    'community': '社区',
    'community.desc': '发展中',
    'contract': '合约地址',
    'network': 'BSC网络',
    'philosophy': '我们的理念',
    'theory.title': '"劳动投资理论"',
    'theory.description': '在欲望和责任的失衡关系中，总有些人付出一切，而另一些人轻易获益。EGIRL 使用区块链语言来讽刺这种不对称的荒谬。',
    'theory.quote': '"觉醒不是愤怒，而是清晰；不是逃避责任，而是重新定义价值。"',
    'theory.quote.desc': '男性的去责任觉醒不是放弃责任，而是拒绝被情感和金钱绑架，重获独立思考和选择的自由。',
    'cta.title': '准备好加入',
    'cta.title2': '这场运动',
    'cta.description': '现在领取免费空投或在 PancakeSwap 购买 EGIRL！',
    // Navigation
    'nav.home': '首页',
    'nav.token': '代币',
    'nav.team': '团队',
    'nav.roadmap': '路线图',
    'nav.contact': '联系',
    'nav.whitepaper': '白皮书',
    // Footer
    'footer.description': 'EasyGirl (EGIRL) - 一个反映现代关系的讽刺梗代币，通过区块链技术传达。不鼓励轻浮，而是讽刺不平衡。',
    'footer.quicklinks': '快速链接',
    'footer.connect': '联系我们',
    'footer.telegram': '电报社区：',
    'footer.english': '🇬🇧 English',
    'footer.chinese': '🇨🇳 中文',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

