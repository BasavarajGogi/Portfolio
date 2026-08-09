import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../../data/portfolioData';
import { ProjectModal } from '../UI/ProjectModal';
import { ChevronRight, ShieldAlert, Droplets, Sliders } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderDiagramWidget = (type: string) => {
    switch (type) {
      case 'barrier':
        return (
          <div className="w-full h-24 bg-[#181C24]/80 rounded-lg border border-[#FFB020]/30 p-3 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#FFB020] transition-colors">
            <Sliders size={28} className="text-[#FFB020] mb-1 animate-bounce" />
            <div className="w-full bg-[#13161C] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#FFB020] h-full w-2/3 animate-pulse" />
            </div>
            <span className="font-mono text-[8px] text-zinc-400 mt-1">SERVO BARRIER ACTUATOR SIGNAL</span>
          </div>
        );
      case 'water':
        return (
          <div className="w-full h-24 bg-[#181C24]/80 rounded-lg border border-[#38BDF8]/30 p-3 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#38BDF8] transition-colors">
            <Droplets size={28} className="text-[#38BDF8] mb-1 animate-pulse" />
            <div className="flex items-center gap-2 font-mono text-[9px] text-[#38BDF8]">
              <span>TDS: 142 PPM</span>
              <span>•</span>
              <span>EC: 0.28 mS/cm</span>
            </div>
            <span className="font-mono text-[8px] text-zinc-400 mt-0.5">ANALOG CONDUCTIVITY GAUGE</span>
          </div>
        );
      case 'smoke':
        return (
          <div className="w-full h-24 bg-[#181C24]/80 rounded-lg border border-red-500/30 p-3 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-red-500 transition-colors">
            <ShieldAlert size={28} className="text-red-400 mb-1 animate-pulse" />
            <div className="w-full flex justify-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="font-mono text-[9px] text-red-400">MQ-2 SAFETY ALERT ACTIVE</span>
            </div>
            <span className="font-mono text-[8px] text-zinc-400 mt-0.5">GAS THRESHOLD DETECTOR</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
            <span>03 // THE GARAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-rajdhani text-white tracking-wide uppercase">
            ENGINEERED. BUILT. TESTED.
          </h2>
          <p className="font-mono text-xs text-[#38BDF8] tracking-wider mt-0.5">
            HARDWARE PROTOTYPE VEHICLES & EMBEDDED SYSTEM MODULES
          </p>
        </div>

        {/* Prototype Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="hud-card relative rounded-xl p-5 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FFB020]/60 hover:shadow-xl"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                {/* Header Code & MCU */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <span className="font-mono text-xs font-bold text-[#FFB020] tracking-widest">
                    {project.code}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#181C24]/90 font-mono text-[9px] text-[#38BDF8] border border-[#38BDF8]/30">
                    MCU: {project.mcu}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-rajdhani text-white tracking-wide mb-2 group-hover:text-[#FFB020] transition-colors">
                  {project.title}
                </h3>

                {/* Animated Widget Diagram */}
                <div className="mb-3">
                  {renderDiagramWidget(project.diagramType)}
                </div>

                {/* Telemetry Metadata */}
                <div className="grid grid-cols-2 gap-2 mb-3 font-mono text-[9px]">
                  <div className="bg-[#181C24]/80 p-1.5 rounded border border-white/5">
                    <span className="text-zinc-500 block text-[7px]">LANGUAGE</span>
                    <span className="text-white font-bold">{project.language}</span>
                  </div>
                  <div className="bg-[#181C24]/80 p-1.5 rounded border border-white/5">
                    <span className="text-zinc-500 block text-[7px]">SYSTEM TYPE</span>
                    <span className="text-[#38BDF8] font-bold">{project.system}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-300 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-[#181C24]/80 font-mono text-[9px] text-zinc-400 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between font-rajdhani font-bold text-xs text-[#FFB020] tracking-widest uppercase group-hover:text-white">
                <span>INSPECT SCHEMATIC</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Expanded Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
