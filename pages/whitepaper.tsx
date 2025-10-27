import { motion } from 'framer-motion';
import { Download, FileText, TrendingUp, Users, Target, Shield, Zap, Globe, Coins } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WhitepaperPage = () => {
  return (
    <>
      <SEO 
        title="Whitepaper - EasyGirl (EGIRL)"
        description="Complete technical documentation for EGIRL token, including tokenomics, roadmap, and project vision."
        url="/whitepaper"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-egirl-dark via-purple-900 to-egirl-dark">
        <Header />
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-egirl-pink to-egirl-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="gradient-text">EGIRL Whitepaper</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete technical documentation for EasyGirl (EGIRL) token
              </p>
              <button className="btn-primary inline-flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
            </motion.div>

            {/* Document Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="card prose prose-invert max-w-none"
            >
              {/* Section 1: Introduction */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">1. Introduction</h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    <strong className="text-white">EasyGirl (EGIRL)</strong> is a satirical meme token built on the Binance Smart Chain (BSC), 
                    designed to reflect on modern relationships through blockchain technology. Unlike traditional meme tokens, 
                    EGIRL serves as a medium for social commentary and community-driven reflection.
                  </p>
                  <p className="leading-relaxed">
                    The project was created to satirize imbalanced relationships of desire and responsibility, using blockchain 
                    as a mirror for modern social dynamics. We believe that awakening through humor can lead to meaningful 
                    community consensus.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-egirl-pink">Vision:</strong> To become the leading satirical meme token that bridges 
                    technology and social commentary, building a sustainable ecosystem for community engagement.
                  </p>
                </div>
              </div>

              {/* Section 2: Philosophy */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">2. The "Labor Investment Theory"</h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    In imbalanced relationships of desire and responsibility, there are always those who invest everything, 
                    and those who benefit easily. EGIRL uses blockchain language to satirize this asymmetrical absurdity.
                  </p>
                  <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-2xl p-6 border border-egirl-pink/30">
                    <p className="text-xl text-white font-semibold italic mb-3">
                      "Awakening is not anger, but clarity; not escaping responsibility, but redefining value."
                    </p>
                    <p className="leading-relaxed">
                      Male de-responsibilization awakening is not about abandoning responsibility, but refusing to be held 
                      hostage by emotions and money, reclaiming the freedom of independent thinking and choice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Tokenomics */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">3. Tokenomics</h2>
                <div className="space-y-6">
                  <div className="bg-egirl-dark/50 rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <Coins className="w-6 h-6 mr-2 text-egirl-pink" />
                      Token Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                      <div><strong className="text-white">Name:</strong> EasyGirl</div>
                      <div><strong className="text-white">Symbol:</strong> EGIRL</div>
                      <div><strong className="text-white">Total Supply:</strong> 1,000,000,000 EGIRL</div>
                      <div><strong className="text-white">Decimals:</strong> 18</div>
                      <div><strong className="text-white">Network:</strong> Binance Smart Chain (BSC)</div>
                      <div><strong className="text-white">Type:</strong> BEP20</div>
                      <div className="md:col-span-2"><strong className="text-white">Contract:</strong> 
                        <code className="text-egirl-pink ml-2">0x2814cdae605eeb2e7755ee7aad38da9facfafb11</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Token Allocation</h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-semibold text-lg">Liquidity Pool</span>
                          <span className="text-egirl-pink font-bold text-xl">40%</span>
                        </div>
                        <p className="text-gray-300 text-sm">Ensuring sufficient liquidity for trading on DEX platforms</p>
                      </div>
                      <div className="bg-gradient-to-r from-egirl-cyan/20 to-blue-500/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-semibold text-lg">Community Rewards</span>
                          <span className="text-egirl-cyan font-bold text-xl">30%</span>
                        </div>
                        <p className="text-gray-300 text-sm">Airdrops, staking rewards, and community incentives</p>
                      </div>
                      <div className="bg-gradient-to-r from-egirl-gold/20 to-yellow-500/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-semibold text-lg">Team Reserve</span>
                          <span className="text-egirl-gold font-bold text-xl">20%</span>
                        </div>
                        <p className="text-gray-300 text-sm">Locked for 12 months, vested over 4 years</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-semibold text-lg">Marketing</span>
                          <span className="text-green-400 font-bold text-xl">10%</span>
                        </div>
                        <p className="text-gray-300 text-sm">Partnerships, promotions, and community growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Technology */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">4. Technology & Architecture</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-egirl-dark/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Shield className="w-6 h-6 mr-2 text-egirl-pink" />
                      Smart Contract
                    </h3>
                    <ul className="space-y-2 list-disc list-inside ml-4">
                      <li>Standard BEP20 token on Binance Smart Chain</li>
                      <li>No minting function - Fixed supply of 1B tokens</li>
                      <li>Contract verified on BSCScan</li>
                      <li>Secure, audited smart contract</li>
                    </ul>
                  </div>
                  <div className="bg-egirl-dark/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Globe className="w-6 h-6 mr-2 text-egirl-pink" />
                      Website & Infrastructure
                    </h3>
                    <ul className="space-y-2 list-disc list-inside ml-4">
                      <li>Modern Next.js 14 framework with TypeScript</li>
                      <li>Responsive design for all devices</li>
                      <li>Fast and secure deployment on Vercel</li>
                      <li>Optimized for mobile and desktop experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5: Roadmap */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">5. Development Roadmap</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-egirl-pink/10 to-egirl-purple/10 border-l-4 border-egirl-pink rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Target className="w-6 h-6 text-egirl-pink mr-3" />
                      <h3 className="text-xl font-semibold text-white">Phase 1: Foundation (Q4 2025)</h3>
                    </div>
                    <ul className="text-gray-300 space-y-2 ml-9">
                      <li>✅ Smart contract audit and verification</li>
                      <li>✅ Official website launch</li>
                      <li>✅ Community establishment on Telegram and Twitter</li>
                      <li>✅ Initial token distribution and liquidity provision</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-egirl-cyan/10 to-blue-500/10 border-l-4 border-egirl-cyan rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-6 h-6 text-egirl-cyan mr-3" />
                      <h3 className="text-xl font-semibold text-white">Phase 2: Community Growth (Q1 2026)</h3>
                    </div>
                    <ul className="text-gray-300 space-y-2 ml-9">
                      <li>🎁 1% token airdrop to early supporters</li>
                      <li>📱 Launch meme campaigns and social media presence</li>
                      <li>🤝 Strategic partnerships with other meme tokens</li>
                      <li>📊 Expand to 5,000+ active community members</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-egirl-gold/10 to-yellow-500/10 border-l-4 border-egirl-gold rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Zap className="w-6 h-6 text-egirl-gold mr-3" />
                      <h3 className="text-xl font-semibold text-white">Phase 3: Market Expansion (Q2 2026)</h3>
                    </div>
                    <ul className="text-gray-300 space-y-2 ml-9">
                      <li>💱 Exchange listings on major DEX platforms</li>
                      <li>📈 Increase liquidity pools</li>
                      <li>🌟 Collaboration with influencers and KOLs</li>
                      <li>📱 Mobile app and wallet integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6: Community */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">6. Community & Governance</h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    The EGIRL community is the driving force behind the project. We believe in building consensus through 
                    humor, technology, and shared understanding of modern social dynamics.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-egirl-dark/50 rounded-xl p-6">
                      <Users className="w-10 h-10 text-egirl-pink mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">Community Driven</h3>
                      <p className="text-gray-300">30% of tokens allocated for community rewards and airdrops</p>
                    </div>
                    <div className="bg-egirl-dark/50 rounded-xl p-6">
                      <Zap className="w-10 h-10 text-egirl-purple mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">Transparent & Open</h3>
                      <p className="text-gray-300">All decisions discussed with community members</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: How to Participate */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">7. How to Get Started</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-gradient-to-r from-egirl-pink/20 to-egirl-purple/20 rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">🎁 Claim Free Airdrop</h3>
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                      <li>Join our Telegram group:</li>
                      <li className="ml-4">🇬🇧 <a href="https://t.me/+VdZHL9gqOF5lNTI1" target="_blank" rel="noopener noreferrer" className="text-egirl-pink hover:underline">English Community</a></li>
                      <li className="ml-4">🇨🇳 <a href="https://t.me/+N7FUuuYJIdQyMjFl" target="_blank" rel="noopener noreferrer" className="text-egirl-pink hover:underline">中文社区</a></li>
                      <li>Submit your BSC wallet address</li>
                      <li>Receive 500-1,000 EGIRL tokens for FREE</li>
                      <li>Share with friends to help grow the community</li>
                    </ol>
                  </div>
                  <div className="bg-gradient-to-r from-egirl-cyan/20 to-blue-500/20 rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">💰 Buy EGIRL Tokens</h3>
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                      <li>Connect your wallet (MetaMask, Trust Wallet, etc.)</li>
                      <li>Visit PancakeSwap: <a href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11" target="_blank" rel="noopener noreferrer" className="text-egirl-pink hover:underline">Swap on PancakeSwap</a></li>
                      <li>Swap BNB for EGIRL tokens</li>
                      <li>Hold or trade as you wish</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Section 8: Risk Disclaimer */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">8. Risk Disclaimer</h2>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-gray-300">
                  <p className="leading-relaxed mb-4">
                    <strong className="text-yellow-300">Important:</strong> EGIRL is a satirical meme token for entertainment 
                    and discussion purposes only. This is not financial advice.
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Cryptocurrency investments carry substantial risk</li>
                    <li>Token prices can be highly volatile</li>
                    <li>Never invest more than you can afford to lose</li>
                    <li>Always do your own research (DYOR)</li>
                    <li>Consult with financial advisors before making decisions</li>
                  </ul>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-16 bg-gradient-to-r from-egirl-pink/30 to-egirl-purple/30 rounded-3xl p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Join the <span className="gradient-text">EGIRL Community</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Ready to be part of this satirical movement?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="space-y-3">
                    <a
                      href="https://t.me/+VdZHL9gqOF5lNTI1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center w-full"
                    >
                      🇬🇧 English Community
                    </a>
                    <a
                      href="https://t.me/+N7FUuuYJIdQyMjFl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center w-full"
                    >
                      🇨🇳 中文社区
                    </a>
                  </div>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x2814cdae605eeb2e7755ee7aad38da9facfafb11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    Buy on PancakeSwap
                  </a>
                </div>
              </div>

              {/* Print Footer */}
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-gray-500 text-xs">
                  Version 1.0 | Published 2025-01-27 | EasyGirl (EGIRL)
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

export default WhitepaperPage;

