import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleLanguage, language } = useLanguage();

  const navItems = [
    { href: '/', label: language === 'zh' ? '首页' : 'Home' },
    { href: '/token', label: language === 'zh' ? '代币' : 'Token' },
    { href: '/team', label: language === 'zh' ? '团队' : 'Team' },
    { href: '/roadmap', label: language === 'zh' ? '路线图' : 'Roadmap' },
    { href: '/contact', label: language === 'zh' ? '联系' : 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/android-chrome-192x192.png" 
              alt="EGIRL Logo" 
              width={40} 
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-white">EGIRL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-egirl-pink transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title={language === 'en' ? '切换到中文' : 'Switch to English'}
            >
              <Globe className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{language === 'en' ? 'EN' : '中文'}</span>
            </button>
          </div>

          {/* Desktop Language Toggle */}
          <button
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            onClick={toggleLanguage}
          >
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{language === 'en' ? 'EN' : '中文'}</span>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-egirl-pink transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Language Toggle Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{language === 'en' ? 'EN' : '中文'}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
