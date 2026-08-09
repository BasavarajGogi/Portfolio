import React, { useState } from 'react';
import { Menu, X, Cpu, Gauge } from 'lucide-react';

interface NavbarProps {
  activeSectionIndex: number;
  onNavigate: (index: number) => void;
}

export const NAV_ITEMS = [
  { label: 'ABOUT', sectionId: 'about', num: '01' },
  { label: 'ROUTE', sectionId: 'education', num: '02' },
  { label: 'GARAGE', sectionId: 'projects', num: '03' },
  { label: 'SKILLS', sectionId: 'skills', num: '04' },
  { label: 'LICENSE', sectionId: 'certifications', num: '05' },
  { label: 'TROPHY', sectionId: 'achievements', num: '06' },
  { label: 'PIT STOP', sectionId: 'contact', num: '07' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSectionIndex, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (index: number) => {
    onNavigate(index);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 bg-[#0D0F12]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Dashboard Brand Identifier */}
        <button
          onClick={() => handleNavClick(-1)} // Hero
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-[#181C24] border border-[#FFB020]/40 flex items-center justify-center text-[#FFB020] group-hover:border-[#FFB020] transition-colors">
            <Cpu size={16} />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-rajdhani font-bold text-lg text-white tracking-widest leading-none">
              BG <span className="text-[#FFB020]">//</span> 01
            </span>
            <span className="font-mono text-[9px] text-[#38BDF8] tracking-wider leading-none mt-0.5">
              ECE AUTOMOTIVE HUD
            </span>
          </div>
        </button>

        {/* Desktop Navbar Controls */}
        <nav className="hidden md:flex items-center gap-1 bg-[#13161C]/90 p-1.5 rounded-lg border border-white/10">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSectionIndex === idx + 1; // 1-indexed for sections
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(idx + 1)}
                className={`relative px-3.5 py-1.5 rounded font-rajdhani font-semibold text-xs tracking-wider transition-all duration-200 ${
                  isActive 
                    ? 'text-[#FFB020] bg-[#181C24] shadow-sm' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="opacity-40 text-[10px] mr-1">{item.num}</span>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#FFB020] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Status Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#181C24] rounded border border-[#38BDF8]/20 font-mono text-[10px] text-[#38BDF8]">
          <Gauge size={12} className="text-[#FFB020]" />
          <span>SYS STATUS: ONLINE</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded bg-[#181C24] text-white border border-white/10 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0F12] border-b border-white/10 p-4 shadow-2xl flex flex-col gap-2">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSectionIndex === idx + 1;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(idx + 1)}
                className={`flex items-center justify-between px-4 py-3 rounded font-rajdhani font-semibold text-sm tracking-wider text-left transition-colors ${
                  isActive
                    ? 'bg-[#181C24] text-[#FFB020] border-l-2 border-[#FFB020]'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#38BDF8]">{item.num}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
