import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory contact fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 px-4 sm:px-8 z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
            <span>07 // PIT STOP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-rajdhani text-white tracking-wide uppercase leading-none">
            LET'S BUILD <br />
            <span className="text-[#FFB020]">SOMETHING USEFUL.</span>
          </h2>
          <p className="font-sans text-sm text-zinc-300 max-w-xl mt-2">
            Have a core electronics role, embedded engineering opportunity, or technical challenge? Let's connect at the pit lane.
          </p>
        </div>

        {/* Two-Column Layout: Direct Contact Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Telemetry Cards */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* EMAIL */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hud-card p-4 rounded-xl flex items-center gap-3.5 group hover:border-[#FFB020] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#181C24]/80 border border-[#FFB020]/40 flex items-center justify-center text-[#FFB020] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="font-mono text-[9px] text-zinc-500 uppercase block">EMAIL DIRECT LINE</span>
                <span className="font-mono text-xs sm:text-sm text-white font-bold truncate block group-hover:text-[#FFB020] transition-colors">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* PHONE */}
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="hud-card p-4 rounded-xl flex items-center gap-3.5 group hover:border-[#38BDF8] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#181C24]/80 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <span className="font-mono text-[9px] text-zinc-500 uppercase block">MOBILE TELEMETRY</span>
                <span className="font-mono text-xs sm:text-sm text-white font-bold group-hover:text-[#38BDF8] transition-colors">
                  +91 {PERSONAL_INFO.phone}
                </span>
              </div>
            </a>

            {/* LOCATION */}
            <div className="hud-card p-4 rounded-xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#181C24]/80 border border-white/20 flex items-center justify-center text-zinc-300 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <span className="font-mono text-[9px] text-zinc-500 uppercase block">WORKSTATION LOCATION</span>
                <span className="font-sans text-xs sm:text-sm text-white font-bold">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* LINKEDIN */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-card p-4 rounded-xl flex items-center gap-3.5 group hover:border-[#38BDF8] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#181C24]/80 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div>
                <span className="font-mono text-[9px] text-zinc-500 uppercase block">PROFESSIONAL NETWORK</span>
                <span className="font-mono text-xs sm:text-sm text-[#38BDF8] font-bold group-hover:underline">
                  linkedin.com/in/basavaraj-gogi
                </span>
              </div>
            </a>

          </div>

          {/* Right Column: Interactive Pit Lane Contact Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="hud-card relative p-5 sm:p-6 rounded-xl space-y-4"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <h3 className="font-rajdhani font-bold text-lg text-white tracking-wider uppercase border-b border-white/10 pb-2.5">
                TRANSMIT MESSAGE TO DRIVER
              </h3>

              {status === 'error' && (
                <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded text-red-400 font-mono text-xs flex items-center gap-2">
                  <AlertCircle size={15} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400 font-mono text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>MESSAGE TRANSMITTED SUCCESSFULLY! BASAVARAJ WILL RESPOND SHORTLY.</span>
                </div>
              )}

              {/* NAME */}
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-1">
                  NAME *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Engineering Recruiter / Lead"
                  className="w-full px-3.5 py-2.5 bg-[#181C24]/80 border border-white/10 rounded font-sans text-sm text-white focus:outline-none focus:border-[#FFB020] transition-colors"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. recruiter@company.com"
                  className="w-full px-3.5 py-2.5 bg-[#181C24]/80 border border-white/10 rounded font-sans text-sm text-white focus:outline-none focus:border-[#FFB020] transition-colors"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-1">
                  MESSAGE *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe project opportunity, core role details, or technical query..."
                  className="w-full px-3.5 py-2.5 bg-[#181C24]/80 border border-white/10 rounded font-sans text-sm text-white focus:outline-none focus:border-[#FFB020] transition-colors resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-[#FFB020] hover:bg-[#FFB020]/90 text-black font-rajdhani font-bold text-sm tracking-widest uppercase rounded shadow-amber-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={16} />
                <span>{status === 'submitting' ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
              </button>

              <div className="font-mono text-[8px] text-zinc-500 text-center pt-1">
                FOR PRODUCTION DEPLOYMENT, CONNECT THIS FORM TO FORMSPREE, EMAILJS, OR WEB3FORMS.
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
