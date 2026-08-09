import React from 'react';
import { SKILLS_GAUGES, SOFT_SKILLS, LANGUAGES } from '../../data/portfolioData';
import { Cpu, Languages as LangIcon, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
            <span>04 // THE DASHBOARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-rajdhani text-white tracking-wide uppercase">
            TECHNICAL SKILLS
          </h2>
          <p className="font-mono text-xs text-[#38BDF8] tracking-wider mt-0.5">
            CORE HARDWARE MODULES & TECHNICAL PROFICIENCY TIER
          </p>
        </div>

        {/* Technical Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {SKILLS_GAUGES.map((skill) => (
            <div
              key={skill.name}
              className="hud-card p-5 rounded-xl flex flex-col justify-between group hover:border-[#FFB020]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Header Code & Category Badge */}
              <div className="flex items-center justify-between font-mono text-[9px] mb-3">
                <span className="text-zinc-500 font-bold">{skill.code}</span>
                <span className={`px-2 py-0.5 rounded font-bold ${
                  skill.category === 'CORE' 
                    ? 'bg-[#FFB020]/10 text-[#FFB020] border border-[#FFB020]/30' 
                    : skill.category === 'PROGRAMMING' 
                    ? 'bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30' 
                    : 'bg-zinc-800 text-zinc-300 border border-white/10'
                }`}>
                  {skill.category}
                </span>
              </div>

              {/* Skill Title */}
              <div className="my-2">
                <h3 className="font-rajdhani font-bold text-base text-white tracking-wide uppercase group-hover:text-[#FFB020] transition-colors leading-tight">
                  {skill.name}
                </h3>
              </div>

              {/* Bottom Status Bar */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[9px] text-zinc-400">MODULE STATUS</span>
                <span className="flex items-center gap-1 font-mono text-[9px] text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lower Grid: Soft Skills & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Soft Skills */}
          <div className="md:col-span-7">
            <div className="hud-card p-5 rounded-xl">
              <h3 className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-3">
                <Wrench size={15} /> SOFT SKILLS
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                {SOFT_SKILLS.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#181C24]/80 p-2.5 rounded border border-white/5">
                    <span className="text-zinc-200 font-semibold">{skill}</span>
                    <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="md:col-span-5">
            <div className="hud-card p-5 rounded-xl">
              <h3 className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase mb-3">
                <LangIcon size={15} /> LANGUAGES
              </h3>

              <div className="space-y-2.5 font-mono text-xs">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#181C24]/80 p-2.5 rounded border border-white/5">
                    <span className="text-white font-bold">{lang.name}</span>
                    <span className="px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] text-[10px]">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
