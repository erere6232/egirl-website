import { motion } from 'framer-motion';
import { Mail, Twitter, MessageCircle, ExternalLink, Copy, CheckCircle, Globe, Users, Heart } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const email = 'easygirltoken@gmail.com';

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Get in touch with our team',
      value: email,
      link: `mailto:${email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Follow us for updates',
      value: '@EGIRL_BSC',
      link: 'https://x.com/EGIRL_BSC',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      description: 'Join our community',
      value: 'EGIRL Official',
      link: 'https://t.me/+N7FUuuYJIdQyMjFl',
      color: 'from-blue-500 to-blue-700'
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
      name: 'Telegram',
      href: 'https://t.me/+N7FUuuYJIdQyMjFl',
      icon: MessageCircle,
      description: 'Join our community discussion'
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

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  
                  <div className="bg-egirl-dark/50 rounded-lg p-4 mb-6">
                    <p className="text-egirl-pink font-mono text-sm break-all">{method.value}</p>
                  </div>
                  
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Connect
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="card max-w-4xl mx-auto mb-16"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Direct Email Contact</h2>
                
                <div className="bg-egirl-dark/50 rounded-2xl p-6 mb-6">
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
                </div>
                
                <p className="text-gray-300 mb-6">
                  For business inquiries, partnerships, or general questions about the EGIRL project, 
                  please don't hesitate to reach out to us directly.
                </p>
                
                <a
                  href={`mailto:${email}`}
                  className="btn-primary inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Follow Our <span className="gradient-text">Journey</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + index * 0.2, duration: 0.8 }}
                    className="card text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center mx-auto mb-6">
                      <social.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">{social.name}</h3>
                    <p className="text-gray-300 mb-6">{social.description}</p>
                    
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Visit {social.name}
                    </a>
                  </motion.div>
                ))}
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
