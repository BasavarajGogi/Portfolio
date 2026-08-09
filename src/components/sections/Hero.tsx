import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowRight, Download, Activity, Cpu, MapPin, Radio, Shield } from 'lucide-react';

interface HeroProps {
  onNavigateToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToProjects }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-10 px-4 sm:px-8 z-10"
    >
      {/* Main HUD Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Top Status Telemetry Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#13161C]/90 border border-[#38BDF8]/40 mb-5 backdrop-blur shadow-blue-glow">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
          <span className="font-mono text-[11px] text-[#38BDF8] tracking-widest uppercase">
            AUTONOMOUS HARDWARE WORKSTATION
          </span>
        </div>

        {/* Main Candidate Name */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold font-rajdhani text-white tracking-wider uppercase mb-2 leading-none drop-shadow-2xl">
          {PERSONAL_INFO.name}
        </h1>

        {/* Major Degree Subtitle */}
        <h2 className="text-base sm:text-2xl font-bold font-rajdhani text-[#FFB020] tracking-widest uppercase mb-3 text-amber-glow">
          {PERSONAL_INFO.title}
        </h2>

        {/* Engineering Tagline */}
        <p className="max-w-xl text-sm sm:text-base font-sans text-zinc-200 font-medium leading-relaxed mb-2 drop-shadow">
          "{PERSONAL_INFO.tagline}"
        </p>

        <p className="font-mono text-xs sm:text-sm text-[#38BDF8] tracking-wider mb-6">
          {PERSONAL_INFO.subTagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 w-full sm:w-auto">
          <button
            onClick={onNavigateToProjects}
            className="w-full sm:w-auto px-7 py-3 bg-[#FFB020] hover:bg-[#FFB020]/90 text-black font-rajdhani font-bold text-sm tracking-widest uppercase rounded shadow-amber-glow transition-all flex items-center justify-center gap-2 group"
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Basavaraj-Gogi-Resume.pdf"
            className="w-full sm:w-auto px-7 py-3 bg-[#181C24]/90 hover:bg-[#1F242D] text-white font-rajdhani font-bold text-sm tracking-widest uppercase rounded border border-white/20 transition-all flex items-center justify-center gap-2 group backdrop-blur"
          >
            <Download size={16} className="text-[#38BDF8] group-hover:translate-y-0.5 transition-transform" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* HUD Telemetry Grid Cards Overlay Around Vehicle */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full max-w-4xl font-mono text-[10px] text-zinc-400">
          <div className="hud-card p-2.5 rounded border border-white/10 text-left">
            <div className="flex items-center gap-1.5 text-zinc-500 mb-0.5">
              <Activity size={12} className="text-emerald-400" />
              <span>SYSTEM STATUS</span>
            </div>
            <span className="text-emerald-400 font-bold tracking-wider">ONLINE</span>
          </div>

          <div className="hud-card p-2.5 rounded border border-white/10 text-left">
            <div className="flex items-center gap-1.5 text-zinc-500 mb-0.5">
              <Cpu size={12} className="text-[#FFB020]" />
              <span>CONTROL UNIT</span>
            </div>
            <span className="text-[#FFB020] font-bold tracking-wider">ESP32 DevKit</span>
          </div>

          <div className="hud-card p-2.5 rounded border border-white/10 text-left">
            <div className="flex items-center gap-1.5 text-zinc-500 mb-0.5">
              <Radio size={12} className="text-[#38BDF8]" />
              <span>SIGNAL</span>
            </div>
            <span className="text-[#38BDF8] font-bold tracking-wider">STABLE (99.8%)</span>
          </div>

          <div className="hud-card p-2.5 rounded border border-white/10 text-left">
            <div className="flex items-center gap-1.5 text-zinc-500 mb-0.5">
              <Shield size={12} className="text-[#FFB020]" />
              <span>MODE</span>
            </div>
            <span className="text-white font-bold tracking-wider">ACTIVE ECE</span>
          </div>

          <div className="hud-card p-2.5 rounded border border-white/10 text-left col-span-2 sm:col-span-1">
            <div className="flex items-center gap-1.5 text-zinc-500 mb-0.5">
              <MapPin size={12} className="text-[#38BDF8]" />
              <span>LOCATION</span>
            </div>
            <span className="text-zinc-200 font-bold tracking-wider">BENGALURU, IN</span>
          </div>
        </div>

      </div>
    </section>
  );
};
