import React, { useState, useEffect } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile / touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth trailing dot interpolation
  useEffect(() => {
    if (isTouchDevice) return;
    const animation = requestAnimationFrame(() => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
    });
    return () => cancelAnimationFrame(animation);
  }, [position, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Tech Reticle Cursor */}
      <div
        className={`fixed top-0 left-0 w-4 h-4 -ml-2 -mt-2 rounded-full border border-[#FFB020] transition-transform duration-100 ease-out flex items-center justify-center ${
          isHovered ? 'scale-150 bg-[#FFB020]/20 border-[#38BDF8]' : 'scale-100'
        }`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        <div className="w-1 h-1 bg-[#FFB020] rounded-full" />
      </div>

      {/* Trailing HUD Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[#38BDF8]/40 transition-transform duration-300 ease-out ${
          isHovered ? 'scale-125 border-[#FFB020]' : 'scale-75'
        }`}
        style={{ transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)` }}
      />
    </div>
  );
};
