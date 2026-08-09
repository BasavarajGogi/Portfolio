import React from 'react';
import { SKILLS_GAUGES, SOFT_SKILLS, LANGUAGES } from '../../data/portfolioData';
import { Gauge, Cpu, Languages as LangIcon } from 'lucide-react';

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
            INSTRUMENT CLUSTER TELEMETRY
          </h2>
          <p className="font-mono text-xs text-[#38BDF8] tracking-wider mt-0.5">
            CORE HARDWARE MODULES & TECHNICAL PROFICIENCY TIER
          </p>
        </div>

        {/* Technical Skill Gauges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {SKILLS_GAUGES.map((skill) => (
            <div
              key={skill.name}
              className="hud-card p-4 rounded-xl text-center flex flex-col items-center justify-between group hover:border-[#FFB020]/50 transition-all duration-300"
            >
              {/* Module Code Header */}
              <div className="w-full flex items-center justify-between font-mono text-[8px] text-zinc-500 mb-2">
                <span>{skill.code}</span>
                <span className={`font-bold ${
                  skill.category === 'CORE' ? 'text-[#FFB020]' : skill.category === 'PROGRAMMING' ? 'text-[#38BDF8]' : 'text-zinc-300'
                }`}>
                  {skill.category}
                </span>
              </div>

              {/* Circular Gauge Visualization */}
              <div className="relative w-20 h-20 flex items-center justify-center my-1">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#181C24"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={skill.category === 'CORE' ? '#FFB020' : '#38BDF8'}
                    strokeWidth="8"
                    strokeDasharray="251"
                    strokeDashoffset={251 - (251 * skill.levelPercent) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <Gauge size={16} className={skill.category === 'CORE' ? 'text-[#FFB020]' : 'text-[#38BDF8]'} />
                  <span className="font-mono text-[9px] text-zinc-300 font-bold mt-0.5">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="font-rajdhani font-bold text-xs text-white tracking-wider uppercase mt-1 group-hover:text-[#FFB020] transition-colors leading-tight">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Lower Grid: Soft Skills Telemetry & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Soft Skills Telemetry Status Indicators */}
          <div className="md:col-span-7">
            <div className="hud-card p-5 rounded-xl">
              <h3 className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-3">
                <Cpu size={15} /> PROFESSIONAL SOFT SKILLS TELEMETRY
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

          {/* Languages Dashboard Module */}
          <div className="md:col-span-5">
            <div className="hud-card p-5 rounded-xl">
              <h3 className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase mb-3">
                <LangIcon size={15} /> LANGUAGE TELEMETRY
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
