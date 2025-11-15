import { motion } from 'framer-motion';
import { Mail, Twitter, MessageCircle, ExternalLink, Copy, CheckCircle, Globe, Users, Heart, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [copiedEmail2, setCopiedEmail2] = useState(false);
  const email = 'easygirltoken@gmail.com';
  const email2 = 'contact@egirl-token.vercel.app';

  const contactMethods = [
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Follow us for updates',
      value: '@EGIRL_BSC',
      link: 'https://x.com/EGIRL_BSC',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      description: 'Join our Discord server',
      value: 'EGIRL Community',
      link: 'https://discord.gg/3sKCjftfe2',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MessageCircle,
      title: 'Telegram (English)',
      description: 'Join our English community',
      value: 'EGIRL Official',
      link: 'https://t.me/+VdZHL9gqOF5lNTI1',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const telegramLinks = [
    {
      name: '🇬🇧 English Community',
      description: 'Join our English Telegram',
      href: 'https://t.me/+VdZHL9gqOF5lNTI1',
      icon: Send,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: '🇨🇳 中文社区',
      description: '加入我们的中文电报群',
      href: 'https://t.me/+N7FUuuYJIdQyMjFl',
      icon: Send,
      color: 'from-green-500 to-green-600'
    }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/EGIRL_BSC',
      icon: Twitter,
      description: 'Follow us for project updates'
    },
    {
      name: 'Email',
      href: 'mailto:easygirltoken@gmail.com',
      icon: Mail,
      description: 'Contact us directly'
    }
  ];

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmail2 = async () => {
    await navigator.clipboard.writeText(email2);
    setCopiedEmail2(true);
    setTimeout(() => setCopiedEmail2(false), 2000);
  };

  return (
    <>
      <SEO 
        title="Contact"
        description="Contact the EasyGirl (EGIRL) team via email, Twitter, Telegram, or join our growing community."
        url="/contact"
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
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with the EasyGirl (EGIRL) community and team. We'd love to hear from you 
                and answer any questions about our satirical meme token project.
              </p>
            </motion.div>

            {/* Contact Methods - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
            >
              {/* Twitter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">Twitter</h3>
                <a
                  href="https://x.com/EGIRL_BSC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Follow
                </a>
              </motion.div>

              {/* Discord */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">Discord</h3>
                <a
                  href="https://discord.gg/3sKCjftfe2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join
                </a>
              </motion.div>

              {/* Telegram English */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">🇬🇧 English</h3>
                <a
                  href="https://t.me/+VdZHL9gqOF5lNTI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join
                </a>
              </motion.div>

              {/* Telegram Chinese */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">🇨🇳 中文</h3>
                <a
                  href="https://t.me/+N7FUuuYJIdQyMjFl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join
                </a>
              </motion.div>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="card max-w-4xl mx-auto mb-16"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Direct Email Contact</h2>
                
                <div className="space-y-4 mb-6">
                  {/* First Email - contact@egirl-token.vercel.app */}
                  <div className="bg-egirl-dark/50 rounded-2xl p-6">
                    <div className="flex items-center justify-center space-x-4">
                      <Mail className="w-6 h-6 text-egirl-pink" />
                      <code className="text-egirl-pink text-lg font-mono">{email2}</code>
                      <button
                        onClick={handleCopyEmail2}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        title="Copy email address"
                      >
                        {copiedEmail2 ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 hover:text-egirl-pink" />
                        )}
                      </button>
                    </div>
                    <a
                      href={`mailto:${email2}`}
                      className="btn-primary inline-flex items-center mt-4"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </div>

                  {/* Second Email - easygirltoken@gmail.com */}
                  <div className="bg-egirl-dark/50 rounded-2xl p-6">
                    <div className="flex items-center justify-center space-x-4">
                      <Mail className="w-6 h-6 text-egirl-pink" />
                      <code className="text-egirl-pink text-lg font-mono">{email}</code>
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        title="Copy email address"
                      >
                        {copied ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 hover:text-egirl-pink" />
                        )}
                      </button>
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="btn-primary inline-flex items-center mt-4"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300">
                  For business inquiries, partnerships, or general questions about the EGIRL project.
                </p>
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="card max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Community Statistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-egirl-pink mb-2">3+</div>
                  <div className="text-gray-300">Telegram Members</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-egirl-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-egirl-pink mb-2">1B</div>
                  <div className="text-gray-300">Total Supply</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-egirl-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-egirl-pink mb-2">2025</div>
                  <div className="text-gray-300">Launch Year</div>
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

export default ContactPage;
