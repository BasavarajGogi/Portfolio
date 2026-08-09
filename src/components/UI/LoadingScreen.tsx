import React, { useState, useEffect } from 'react';
import { Power, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('INITIALIZING ENGINEERING SYSTEMS...');
  const [isReady, setIsReady] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const messages = [
    'LOADING 3D ENVIRONMENT',
    'CALIBRATING CAMERA RIG',
    'INITIALIZING TELEMETRY UNITS',
    'CONNECTING SENSOR HARDWARE',
    'STARTING AUTOMOTIVE EXPERIENCE'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          setStatusMessage('SYSTEM READY');
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const msgIndex = Math.min(Math.floor((next / 100) * messages.length), messages.length - 1);
        setStatusMessage(messages[msgIndex]);
        return Math.min(next, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const handleStart = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onLoadingComplete();
    }, 600);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#0D0F12] flex flex-col items-center justify-center transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Circuit Grid Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Speedometer Gauge Loader Ring */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Gauge Track */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#181C24"
              strokeWidth="6"
            />
            {/* Animated Gauge Fill Arc */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#FFB020"
              strokeWidth="6"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
            {/* Inner Circuit Ring */}
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          </svg>

          {/* Center Digital Percentage */}
          <div className="absolute flex flex-col items-center text-center">
            <span className="text-4xl font-bold font-rajdhani text-white tracking-tighter">
              {progress}%
            </span>
            <span className="text-[10px] font-mono text-[#38BDF8] tracking-widest mt-1">
              {isReady ? 'ONLINE' : 'BOOT'}
            </span>
          </div>
        </div>

        {/* Status Text HUD */}
        <div className="text-center mb-8 h-12 flex flex-col items-center justify-center">
          <p className="text-xs font-mono text-[#FFB020] tracking-widest uppercase mb-1">
            {statusMessage}
          </p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
            <span className="text-[11px] font-mono text-zinc-400">
              ESP32 HARDWARE DIAGNOSTICS
            </span>
          </div>
        </div>

        {/* PRESS START Button when Ready */}
        {isReady ? (
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#FFB020] hover:bg-[#FFB020]/90 text-black font-rajdhani font-bold text-base tracking-widest uppercase rounded shadow-amber-glow transition-all transform hover:scale-105 active:scale-95"
          >
            <Power size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            <span>PRESS START</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <ShieldCheck size={14} className="text-[#38BDF8]" />
            <span>CALIBRATING SENSORS...</span>
          </div>
        )}
      </div>
    </div>
  );
};
