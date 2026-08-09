import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { User, Cpu, ShieldCheck, MapPin, Award, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
            <span>01 // THE DRIVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-rajdhani text-white tracking-wide uppercase">
            ABOUT ME
          </h2>
        </div>

        {/* Two-Column Grid: ID Card + Engineering Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Automotive Engineering Driver's License Card */}
          <div className="lg:col-span-5">
            <div className="hud-card relative p-5 rounded-xl border border-[#38BDF8]/40 shadow-2xl overflow-hidden group">
              <div className="hud-corner-tl-blue" />
              <div className="hud-corner-br-blue" />

              {/* Top Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Cpu size={18} className="text-[#38BDF8]" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest">
                    ECE DRIVER LICENSE // ID-2027
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] font-mono text-[10px]">
                  VERIFIED
                </span>
              </div>

              {/* Driver Photo & Basic Info */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-lg bg-[#181C24] border-2 border-[#FFB020] flex items-center justify-center text-[#FFB020] shadow-amber-glow flex-shrink-0">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-lg text-white tracking-wider">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-mono text-xs text-[#38BDF8] mt-0.5">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="font-sans text-xs text-zinc-400 mt-1 flex items-center gap-1">
                    <MapPin size={12} className="text-[#FFB020]" />
                    {PERSONAL_INFO.institution}
                  </p>
                </div>
              </div>

              {/* Technical License Metadata Fields */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10 font-mono text-[10px]">
                <div className="bg-[#181C24]/80 p-2 rounded border border-white/5">
                  <span className="block text-zinc-500 text-[8px] uppercase">FIELD</span>
                  <span className="text-white font-semibold">{PERSONAL_INFO.metadata.field}</span>
                </div>

                <div className="bg-[#181C24]/80 p-2 rounded border border-white/5">
                  <span className="block text-zinc-500 text-[8px] uppercase">SPECIALIZATION</span>
                  <span className="text-[#FFB020] font-semibold">{PERSONAL_INFO.metadata.specialization}</span>
                </div>

                <div className="bg-[#181C24]/80 p-2 rounded border border-white/5">
                  <span className="block text-zinc-500 text-[8px] uppercase">STATUS</span>
                  <span className="text-[#38BDF8] font-semibold">{PERSONAL_INFO.metadata.status}</span>
                </div>

                <div className="bg-[#181C24]/80 p-2 rounded border border-white/5">
                  <span className="block text-zinc-500 text-[8px] uppercase">INTEREST</span>
                  <span className="text-zinc-200 font-semibold">{PERSONAL_INFO.metadata.interest}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Engineering Capabilities */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="hud-card p-5 sm:p-6 rounded-xl">
              <h3 className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-3">
                <Terminal size={14} /> DRIVER PROFILE & HARDWARE FOCUS
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed mb-5">
                {PERSONAL_INFO.bio}
              </p>

              {/* Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10 font-mono text-xs">
                <div className="flex items-start gap-2.5 bg-[#181C24]/80 p-3 rounded border border-white/5">
                  <ShieldCheck size={16} className="text-[#FFB020] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white text-xs mb-0.5">Microcontroller Prototyping</span>
                    <span className="text-zinc-400 text-[10px]">ESP32, ESP8266, sensor interfacing & C firmware</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#181C24]/80 p-3 rounded border border-white/5">
                  <Award size={16} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white text-xs mb-0.5">Core ECE Fundamentals</span>
                    <span className="text-zinc-400 text-[10px]">Analog/digital logic, signal routing & control systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
