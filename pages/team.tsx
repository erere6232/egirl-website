import { motion } from 'framer-motion';
import Head from 'next/head';
import { Users, Code, Lightbulb, Target, Heart, Brain } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Jack Ma',
      role: 'Founder & Lead Developer',
      description: 'Jack Ma is the visionary behind EasyGirl (EGIRL) and leads the development of the project\'s smart contracts and tokenomics. Passionate about memes, blockchain, and the absurdities of modern relationships, he combines humor with technology to create a community-driven satirical token. When not coding or strategizing the next meme campaign, Jack enjoys analyzing internet culture and sharing insights with the EGIRL community.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      socialLinks: {
        twitter: 'https://twitter.com/EGIRL_BSC',
        linkedin: '#'
      }
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in building a community that reflects on modern relationships through humor and technology.'
    },
    {
      icon: Brain,
      title: 'Social Commentary',
      description: 'Using blockchain as a medium to express observations about contemporary social dynamics.'
    },
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Building robust smart contracts and tokenomics that support our satirical mission.'
    },
    {
      icon: Target,
      title: 'Clear Vision',
      description: 'Not encouraging frivolity, but satirizing imbalance in modern relationships.'
    }
  ];

  return (
    <>
      <Head>
        <title>Team - EasyGirl (EGIRL)</title>
        <meta name="description" content="Meet the team behind EasyGirl (EGIRL) - the satirical meme token." />
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
                Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries behind EasyGirl (EGIRL) - a team passionate about 
                using blockchain technology to reflect on modern relationships.
              </p>
            </motion.div>

            {/* Team Members */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16"
            >
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  avatar={member.avatar}
                  socialLinks={member.socialLinks}
                />
              ))}
            </motion.div>

            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Our <span className="gradient-text">Values</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                    className="card text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="card max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  EasyGirl (EGIRL) represents a unique intersection of technology, social commentary, 
                  and community building. We're not just creating another meme token - we're using 
                  blockchain technology to reflect on the complexities of modern relationships.
                </p>
                
                <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-2xl p-6">
                  <p className="text-xl text-white font-semibold mb-4">
                    "The Labor Investment Theory"
                  </p>
                  <p className="text-gray-300">
                    In imbalanced relationships of desire and responsibility, there are always those 
                    who invest everything, and those who benefit easily. EGIRL uses blockchain language 
                    to satirize this asymmetrical absurdity.
                  </p>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe that awakening is not anger, but clarity; not escaping responsibility, 
                  but redefining value. Our mission is to create a space where humor meets technology, 
                  and where community consensus emerges through shared understanding of modern social dynamics.
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

export default TeamPage;
