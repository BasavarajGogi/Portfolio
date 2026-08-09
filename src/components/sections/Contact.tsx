import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Cpu } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-2 px-3 py-1 rounded-full bg-[#13161C] border border-[#FFB020]/30">
            <span className="w-2 h-2 rounded-full bg-[#FFB020] animate-pulse" />
            <span>07 // PIT STOP</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold font-rajdhani text-white tracking-wide uppercase leading-none mb-3">
            LET'S BUILD <span className="text-[#FFB020]">SOMETHING USEFUL.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-xl">
            Have a core electronics role, embedded engineering opportunity, or technical challenge? Let's connect at the pit lane.
          </p>
        </div>

        {/* Centered Contact Telemetry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
          
          {/* EMAIL */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hud-card p-6 rounded-xl border border-white/10 flex items-center justify-between group hover:border-[#FFB020] transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181C24] border border-[#FFB020]/40 flex items-center justify-center text-[#FFB020] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div className="overflow-hidden">
                <span className="font-mono text-[10px] text-zinc-500 uppercase block">EMAIL DIRECT LINE</span>
                <span className="font-mono text-sm text-white font-bold truncate block group-hover:text-[#FFB020] transition-colors">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-[#FFB020] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* PHONE */}
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="hud-card p-6 rounded-xl border border-white/10 flex items-center justify-between group hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181C24] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase block">MOBILE TELEMETRY</span>
                <span className="font-mono text-sm text-white font-bold group-hover:text-[#38BDF8] transition-colors">
                  +91 {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* LOCATION */}
          <div className="hud-card p-6 rounded-xl border border-white/10 flex items-center gap-4 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#181C24] border border-white/20 flex items-center justify-center text-zinc-300 flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase block">WORKSTATION LOCATION</span>
              <span className="font-sans text-sm text-white font-bold">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* LINKEDIN */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hud-card p-6 rounded-xl border border-white/10 flex items-center justify-between group hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181C24] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin size={22} />
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase block">PROFESSIONAL NETWORK</span>
                <span className="font-mono text-sm text-[#38BDF8] font-bold group-hover:underline">
                  linkedin.com/in/basavaraj-gogi
                </span>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

        </div>

        {/* Direct Action Call to Action Button */}
        <div className="flex justify-center">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-8 py-4 bg-[#FFB020] hover:bg-[#FFB020]/90 text-black font-rajdhani font-bold text-base tracking-widest uppercase rounded shadow-amber-glow transition-all flex items-center gap-3 group"
          >
            <Cpu size={18} className="group-hover:rotate-45 transition-transform" />
            <span>START A CONVERSATION →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
