import React from 'react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { Trophy, Cpu, Radio, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu size={24} className="text-[#FFB020]" />;
      case 'Radio': return <Radio size={24} className="text-[#38BDF8]" />;
      default: return <Award size={24} className="text-[#FFB020]" />;
    }
  };

  return (
    <section id="achievements" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
            <span>06 // TROPHY CASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-rajdhani text-white tracking-wide uppercase">
            ACHIEVEMENTS
          </h2>
          <p className="font-mono text-xs text-[#38BDF8] tracking-wider mt-0.5">
            HONORS, HACKATHONS & CLUB MILESTONES
          </p>
        </div>

        {/* Illuminated Trophy Displays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              className="hud-card relative p-6 rounded-xl border border-[#FFB020]/30 flex flex-col justify-between group hover:border-[#FFB020] hover:shadow-amber-glow transition-all duration-300"
            >
              {/* Top Spotlight Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#FFB020] rounded-b-full shadow-amber-glow" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#181C24]/80 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(ach.iconName)}
                </div>

                <span className="font-mono text-[9px] text-[#38BDF8] tracking-widest uppercase block mb-1">
                  {ach.category}
                </span>

                <h3 className="text-xl font-bold font-rajdhani text-white tracking-wide mb-2 group-hover:text-[#FFB020] transition-colors">
                  {ach.title}
                </h3>

                <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-2 font-mono text-[9px] text-[#FFB020]">
                <Trophy size={13} />
                <span>OFFICIAL MILESTONE RECORDED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
