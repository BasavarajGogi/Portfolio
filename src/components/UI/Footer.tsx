import React from 'react';
import { Cpu, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#0D0F12] border-t border-white/10 py-8 px-6 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Telemetry Identity */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-[#181C24] border border-[#FFB020]/30 flex items-center justify-center text-[#FFB020]">
            <Cpu size={14} />
          </div>
          <div>
            <span className="font-rajdhani font-bold text-white tracking-wider text-sm">
              BASAVARAJ GOGI
            </span>
            <span className="block text-[10px] text-[#38BDF8]">
              ECE // EMBEDDED SYSTEMS // HARDWARE
            </span>
          </div>
        </div>

        {/* Center System Online Badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-[#13161C] rounded border border-white/5 text-[11px] text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYSTEM STATUS: ONLINE</span>
        </div>

        {/* Right Copyright & Tech Stack */}
        <div className="flex flex-col md:items-end text-center md:text-right text-[11px]">
          <span className="text-zinc-300">© 2026 Basavaraj Gogi. All rights reserved.</span>
          <span className="text-zinc-500 mt-0.5 flex items-center justify-center md:justify-end gap-1">
            <Terminal size={12} className="text-[#FFB020]" />
            BUILT WITH THREE.JS + REACT THREE FIBER + GSAP
          </span>
        </div>

      </div>
    </footer>
  );
};
