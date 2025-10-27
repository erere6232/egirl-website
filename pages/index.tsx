import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Coins, Users, TrendingUp, Zap, Heart, Brain, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TokenCard from '../components/TokenCard';
import SEO from '../components/SEO';

const HomePage = () => {
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
      value: '3+ Members',
      icon: Users,
      description: 'Growing fast'
    },
    {
      title: 'Price',
      value: '$0.00',
      icon: TrendingUp,
      description: 'Launch price'
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
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
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
                When memes become mirrors,
              </p>
              <p className="text-2xl md:text-3xl text-egirl-pink font-semibold mb-8">
                awakening becomes consensus
              </p>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                EasyGirl (EGIRL) is a satirical meme token that reflects on modern relationships 
                through blockchain technology. Not encouraging frivolity, but satirizing imbalance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/token" className="btn-primary inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/roadmap" className="btn-secondary">
                  View Roadmap
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
                Our <span className="gradient-text">Philosophy</span>
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
              className="card max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The <span className="gradient-text">"Labor Investment Theory"</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                In the imbalanced relationships of desire and responsibility, there are always those 
                who invest everything, and those who benefit easily. EGIRL uses blockchain language 
                to satirize this asymmetrical absurdity.
              </p>
              
              <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-2xl p-6">
                <p className="text-xl text-white font-semibold mb-4">
                  "Awakening is not anger, but clarity; not escaping responsibility, 
                  but redefining value."
                </p>
                <p className="text-gray-300">
                  Male de-responsibilization awakening is not about abandoning responsibility, 
                  but refusing to be held hostage by emotions and money, reclaiming the freedom 
                  of independent thinking and choice.
                </p>
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
