import React from 'react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { Navigation, GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
            <span>02 // THE ROUTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-rajdhani text-white tracking-wide uppercase">
            EDUCATION ACADEMIC ROUTE
          </h2>
        </div>

        {/* Central Curved Road Timeline Track */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-dashed border-[#38BDF8]/40 space-y-8">
          
          {EDUCATION_DATA.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Checkpoint Node Marker on Road Line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0D0F12] border-2 border-[#FFB020] flex items-center justify-center text-[#FFB020] group-hover:scale-125 group-hover:bg-[#FFB020] group-hover:text-black transition-all shadow-amber-glow">
                <Navigation size={14} className="transform rotate-45" />
              </div>

              {/* Checkpoint HUD Card */}
              <div className="hud-card p-5 sm:p-6 rounded-xl transition-all duration-300 group-hover:border-[#FFB020]/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020]">
                    <Calendar size={14} />
                    <span className="font-bold tracking-wider">{item.years}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-[#38BDF8]">{item.checkpoint}</span>
                  </div>

                  {/* Instrument Cluster Metric Box */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181C24]/90 rounded border border-[#FFB020]/40 font-mono text-xs text-white">
                    <Award size={14} className="text-[#FFB020]" />
                    <span className="text-zinc-400">{item.scoreType}:</span>
                    <span className="font-bold text-[#FFB020] text-sm tracking-tight font-rajdhani">
                      {item.score}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#181C24]/90 text-[#38BDF8] border border-white/5 flex-shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-rajdhani text-white tracking-wide">
                      {item.degree}
                    </h3>
                    <p className="font-mono text-xs text-[#38BDF8] mt-0.5">
                      {item.field}
                    </p>
                    <p className="font-sans text-xs text-zinc-400 mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
