import React, { useEffect } from 'react';
import { Project } from '../../data/portfolioData';
import { X, Cpu, Wrench, Activity, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="hud-card relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border border-[#38BDF8]/40 bg-[#0D0F12] text-white p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HUD Corners */}
        <div className="hud-corner-tl-blue" />
        <div className="hud-corner-br-blue" />

        {/* Modal Header Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="font-mono text-xs text-[#FFB020] tracking-widest uppercase">
              {project.code}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-rajdhani text-white tracking-wide mt-1">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-0.5 rounded bg-[#181C24] font-mono text-[10px] text-[#38BDF8] border border-[#38BDF8]/30">
                MCU: {project.mcu}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#181C24] font-mono text-[10px] text-[#FFB020] border border-[#FFB020]/30">
                SYSTEM: {project.system}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#181C24] font-mono text-[10px] text-emerald-400 border border-emerald-400/30">
                STATUS: {project.status}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#181C24] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Close Project Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          {/* OVERVIEW */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono text-[#38BDF8] tracking-widest uppercase mb-2">
              <Cpu size={16} /> OVERVIEW
            </h3>
            <p className="text-sm font-sans text-zinc-300 leading-relaxed bg-[#13161C] p-4 rounded border border-white/5">
              {project.fullDetails.overview}
            </p>
          </div>

          {/* HARDWARE & TECHNOLOGY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* HARDWARE STACK */}
            <div className="bg-[#13161C] p-4 rounded border border-white/5">
              <h4 className="flex items-center gap-2 text-xs font-mono text-[#FFB020] tracking-wider uppercase mb-3">
                <Wrench size={14} /> HARDWARE COMPONENTS
              </h4>
              <ul className="space-y-2 text-xs font-mono text-zinc-300">
                {project.fullDetails.hardware.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FFB020]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TECHNOLOGY & FIRMWARE */}
            <div className="bg-[#13161C] p-4 rounded border border-white/5">
              <h4 className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] tracking-wider uppercase mb-3">
                <Activity size={14} /> TECHNOLOGY & FIRMWARE
              </h4>
              <ul className="space-y-2 text-xs font-mono text-zinc-300">
                {project.fullDetails.technology.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#38BDF8]">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* WORKFLOW */}
          <div>
            <h3 className="text-sm font-mono text-[#38BDF8] tracking-widest uppercase mb-2">
              SYSTEM WORKFLOW & SIGNAL FLOW
            </h3>
            <div className="space-y-2">
              {project.fullDetails.workflow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#13161C] p-3 rounded border border-white/5 text-xs font-sans text-zinc-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#181C24] text-[#FFB020] border border-[#FFB020]/40 flex items-center justify-center font-mono text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TEST RESULT */}
          <div className="bg-[#181C24] p-4 rounded border border-emerald-500/30 flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-1">
                VERIFIED HARDWARE RESULT
              </h4>
              <p className="text-xs font-sans text-zinc-200">
                {project.fullDetails.result}
              </p>
            </div>
          </div>

          {/* FUTURE IMPROVEMENTS */}
          <div>
            <h3 className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-2">
              FUTURE ROADMAP & EXPANSION
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.fullDetails.futureWork.map((item, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded bg-[#13161C] text-xs font-mono text-zinc-400 border border-white/10 flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-[#38BDF8]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* GITHUB LINK PLACEHOLDER NOTICE */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-500">
              {/* TODO: Add GitHub repository links here once project repositories are available. */}
              <span>REPOSITORY STATUS: CODE PRIVATELY HOSTED</span>
            </div>
            <button
              disabled
              className="w-full sm:w-auto px-4 py-2 bg-[#181C24] text-zinc-500 rounded font-mono text-xs flex items-center justify-center gap-2 border border-white/5 cursor-not-allowed"
            >
              <ExternalLink size={14} />
              <span>GITHUB REPO (COMING SOON)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
