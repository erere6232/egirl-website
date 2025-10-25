import { motion } from 'framer-motion';
import Head from 'next/head';
import { Calendar, Users, Gift, TrendingUp, Globe, Rocket, CheckCircle, Clock, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoadmapItem from '../components/RoadmapItem';

const RoadmapPage = () => {
  const roadmapData = [
    {
      phase: 'Phase 1',
      time: '2025-10',
      title: 'Contract Audit & Community Setup',
      description: 'Smart contract audit completion, official community establishment, and website launch.',
      status: 'upcoming' as const,
      icon: CheckCircle
    },
    {
      phase: 'Phase 2',
      time: '2025-11',
      title: 'First Airdrop & Community Activities',
      description: 'Launch 1% token airdrop and initiate community interaction activities to build engagement.',
      status: 'upcoming' as const,
      icon: Gift
    },
    {
      phase: 'Phase 3',
      time: '2025-12',
      title: 'Community Growth',
      description: 'Expand community to 5,000+ active members through targeted marketing and engagement campaigns.',
      status: 'upcoming' as const,
      icon: Users
    },
    {
      phase: 'Phase 4',
      time: '2026-01',
      title: 'Meme Campaigns & Promotion',
      description: 'Launch meme campaigns and token promotion activities to increase awareness and adoption.',
      status: 'upcoming' as const,
      icon: TrendingUp
    },
    {
      phase: 'Phase 5',
      time: '2026-02',
      title: 'Exchange Listings & Liquidity',
      description: 'List on major exchanges or DEX platforms and increase liquidity for better trading experience.',
      status: 'upcoming' as const,
      icon: Globe
    }
  ];

  const milestones = [
    {
      icon: Rocket,
      title: 'Project Launch',
      description: 'Official launch of EasyGirl (EGIRL) token with initial community building',
      status: 'completed' as const
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Establishing core community and social media presence',
      status: 'current' as const
    },
    {
      icon: TrendingUp,
      title: 'Market Expansion',
      description: 'Growing market presence and increasing token adoption',
      status: 'upcoming' as const
    }
  ];

  return (
    <>
      <Head>
        <title>Roadmap - EasyGirl (EGIRL)</title>
        <meta name="description" content="EasyGirl (EGIRL) development roadmap and project milestones." />
      </Head>
      
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
                Project <span className="gradient-text">Roadmap</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our journey to build a community-driven satirical token that reflects on 
                modern relationships through blockchain technology.
              </p>
            </motion.div>

            {/* Development Phases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Development <span className="gradient-text">Phases</span>
              </h2>
              
              <div className="space-y-8">
                {roadmapData.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  >
                    <RoadmapItem
                      phase={phase.phase}
                      time={phase.time}
                      title={phase.title}
                      description={phase.description}
                      status={phase.status}
                      icon={phase.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Key <span className="gradient-text">Milestones</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                    className={`card text-center ${
                      milestone.status === 'completed' ? 'border-green-400 bg-green-400/10' :
                      milestone.status === 'current' ? 'border-egirl-pink bg-egirl-pink/10' :
                      'border-gray-400 bg-gray-400/10'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      milestone.status === 'completed' ? 'bg-green-400' :
                      milestone.status === 'current' ? 'bg-egirl-pink' :
                      'bg-gray-400'
                    }`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{milestone.description}</p>
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                      milestone.status === 'completed' ? 'bg-green-400/20 text-green-300' :
                      milestone.status === 'current' ? 'bg-egirl-pink/20 text-egirl-pink' :
                      'bg-gray-400/20 text-gray-300'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Completed
                        </>
                      ) : milestone.status === 'current' ? (
                        <>
                          <Clock className="w-4 h-4 mr-2" />
                          In Progress
                        </>
                      ) : (
                        <>
                          <Target className="w-4 h-4 mr-2" />
                          Upcoming
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="card max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  EasyGirl (EGIRL) aims to become the leading satirical meme token that bridges 
                  technology and social commentary. We envision a future where blockchain technology 
                  serves as a medium for meaningful social reflection and community building.
                </p>
                
                <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-2xl p-6">
                  <p className="text-xl text-white font-semibold mb-4">
                    "Building Consensus Through Humor"
                  </p>
                  <p className="text-gray-300">
                    Our roadmap is designed to create a sustainable ecosystem where community 
                    members can engage with modern social dynamics through the lens of blockchain 
                    technology, fostering understanding and shared experiences.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-egirl-pink mb-2">5,000+</div>
                    <div className="text-gray-300">Target Community Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-egirl-pink mb-2">1%</div>
                    <div className="text-gray-300">Initial Airdrop</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-egirl-pink mb-2">2026</div>
                    <div className="text-gray-300">Exchange Listings</div>
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

export default RoadmapPage;
