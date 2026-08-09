import React from 'react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { ShieldCheck, FileCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
            <span>05 // LICENSE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-rajdhani text-white tracking-wide uppercase">
            CERTIFICATIONS & ENGINEERING BADGES
          </h2>
          <p className="font-mono text-xs text-[#38BDF8] tracking-wider mt-0.5">
            VERIFIED INDUSTRY SKILL LICENSES & CREDENTIAL PLATES
          </p>
        </div>

        {/* License Plate Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="hud-card relative p-5 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-[#38BDF8]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="hud-corner-tl-blue" />
              <div className="hud-corner-br-blue" />

              <div>
                {/* Header Badge Code */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 font-mono text-[9px]">
                  <span className="text-[#38BDF8] font-bold">{cert.badgeCode}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck size={10} /> VERIFIED
                  </span>
                </div>

                {/* Plate Visual */}
                <div className="w-full bg-[#181C24]/80 p-3 rounded-lg border border-white/5 flex items-center justify-between mb-3">
                  <FileCheck size={24} className="text-[#FFB020]" />
                  <div className="text-right font-mono text-[8px] text-zinc-400">
                    <span className="block text-[#FFB020] font-bold">STATE LICENSED</span>
                    <span>ECE SYSTEM NODE</span>
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold font-rajdhani text-white tracking-wide mb-1 group-hover:text-[#38BDF8] transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-[#38BDF8] mb-1">
                  {cert.issuer}
                </p>
                <p className="font-sans text-xs text-zinc-400">
                  {cert.type}
                </p>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-2.5 border-t border-white/10 text-[8px] font-mono text-zinc-500">
                {/* TODO: Replace placeholder certificate titles with exact certificate names once confirmed by Basavaraj. */}
                <span>STATUS: AUTHENTICATED CREDENTIAL</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
