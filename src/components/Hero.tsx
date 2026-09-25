import { Sparkles, Wallet, Trophy, Shield, ArrowRight, Zap } from 'lucide-react';
import { useWallet } from '@/context/WalletContext';

export function Hero() {
  const { connected, openModal } = useWallet();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Aurora background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary-500/20 blur-[120px] animate-aurora-1" />
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full bg-secondary-500/20 blur-[140px] animate-aurora-2" />
        <div className="absolute bottom-[10%] left-[30%] w-[450px] h-[450px] rounded-full bg-accent-500/10 blur-[100px] animate-aurora-3" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-400/30"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent-400" />
          <span className="text-sm font-medium text-neutral-200">Season 1 Airdrop is Live</span>
          <span className="px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold">NEW</span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          The Genesis Airdrop
          <br />
          <span className="text-gradient-aurora">is Now Live</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Connect your wallet, complete quests across 20+ blockchains, and climb the global leaderboard. Earn AUR tokens with tier-based reward multipliers up to 10x.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {!connected ? (
            <button
              onClick={openModal}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-bold text-lg shadow-2xl shadow-primary-500/30 transition-all hover:scale-105"
            >
              <Wallet className="w-6 h-6" />
              Connect Wallet to Start
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={() => document.getElementById('tasks')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-bold text-lg shadow-2xl shadow-primary-500/30 transition-all hover:scale-105"
            >
              <Zap className="w-6 h-6" fill="white" />
              Start Earning Rewards
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-500 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary-500" />
            <span>Non-custodial</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-secondary-400" />
            <span>Up to 10x multiplier</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent-400" />
            <span>Instant rewards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
