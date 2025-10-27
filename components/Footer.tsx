import Link from 'next/link';
import { Mail, Twitter, MessageCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/EGIRL_BSC',
      icon: Twitter,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/3sKCjftfe2',
      icon: MessageSquare,
    },
    {
      name: 'Email',
      href: 'mailto:easygirltoken@gmail.com',
      icon: Mail,
    },
  ];

  const telegramLinks = [
    {
      name: '🇬🇧 English',
      href: 'https://t.me/+VdZHL9gqOF5lNTI1',
    },
    {
      name: '🇨🇳 中文',
      href: 'https://t.me/+N7FUuuYJIdQyMjFl',
    },
  ];

  return (
    <footer className="bg-egirl-dark/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
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
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">{t('footer.quicklinks')}</h3>
            <div className="space-y-2">
              <Link href="/token" className="block text-gray-300 hover:text-egirl-pink transition-colors">
                Token Info
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-egirl-pink transition-colors">
                Team
              </Link>
              <Link href="/roadmap" className="block text-gray-300 hover:text-egirl-pink transition-colors">
                Roadmap
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-egirl-pink transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">{t('footer.connect')}</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-egirl-pink rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-white font-semibold text-sm mb-2">{t('footer.telegram')}</p>
              {telegramLinks.map((telegram) => (
                <a
                  key={telegram.name}
                  href={telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-egirl-pink transition-colors text-sm"
                >
                  {telegram.name}
                </a>
              ))}
            </div>
            <div className="text-gray-300 text-sm">
              <p>Email: easygirltoken@gmail.com</p>
              <p>Contract: 0x2814...fb11</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EasyGirl (EGIRL). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-egirl-pink text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-egirl-pink text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xs opacity-30">
              Not financial advice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
