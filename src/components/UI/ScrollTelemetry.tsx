import React from 'react';

interface ScrollTelemetryProps {
  scrollProgress: number; // 0.0 to 1.0
  activeSectionIndex: number;
}

export const ScrollTelemetry: React.FC<ScrollTelemetryProps> = ({ scrollProgress, activeSectionIndex }) => {
  // Simulated mileage calculation (0.0 to 42.8 KM)
  const mileage = (scrollProgress * 42.8).toFixed(1);

  const sections = ['01', '02', '03', '04', '05', '06', '07'];

  return (
    <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-6 pointer-events-none">
      {/* Dynamic Mileage Display HUD */}
      <div className="hud-card p-2 rounded border border-[#FFB020]/30 text-center font-mono text-[10px] bg-[#0D0F12]/90 backdrop-blur">
        <span className="block text-zinc-500 text-[8px] uppercase tracking-wider">ODOMETER</span>
        <span className="text-[#FFB020] font-bold text-xs">KM {mileage.padStart(5, '0')}</span>
      </div>

      {/* Vertical Telemetry Track */}
      <div className="relative flex flex-col items-center gap-3">
        {/* Track Line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-zinc-800 z-0" />
        
        {/* Active Progress Fill Line */}
        <div 
          className="absolute top-0 w-[2px] bg-[#38BDF8] z-0 transition-all duration-300 shadow-blue-glow"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {/* Section Indicators */}
        {sections.map((num, idx) => {
          const isActive = activeSectionIndex === idx + 1;
          const isPassed = activeSectionIndex > idx + 1;

          return (
            <div 
              key={num}
              className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full font-mono text-[9px] transition-all duration-300 ${
                isActive
                  ? 'bg-[#FFB020] text-black font-bold scale-110 shadow-amber-glow'
                  : isPassed
                  ? 'bg-[#38BDF8] text-black font-semibold'
                  : 'bg-[#181C24] text-zinc-500 border border-white/10'
              }`}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};
