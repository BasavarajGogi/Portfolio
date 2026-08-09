import React from 'react';

interface AutomotiveCanvasProps {
  scrollProgress: number;
  activeSectionIndex: number;
  prefersReducedMotion: boolean;
  isEngineActive: boolean;
}

export const AutomotiveCanvas: React.FC<AutomotiveCanvasProps> = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0D0F12] overflow-hidden">
      {/* Circuit Grid Background Overlay */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-40" />

      {/* Subtle Glowing Radial Telemetry Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#FFB020]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Animated Subtle Scanline Effect */}
      <div className="scanline-effect opacity-30" />
    </div>
  );
};
