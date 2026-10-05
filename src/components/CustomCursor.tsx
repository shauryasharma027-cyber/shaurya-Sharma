import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-hover')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing animation loop
    let animationFrameId: number;
    let currentTrailX = -100;
    let currentTrailY = -100;

    const followLoop = () => {
      currentTrailX += (position.x - currentTrailX) * 0.18;
      currentTrailY += (position.y - currentTrailY) * 0.18;
      setTrailingPos({ x: currentTrailX, y: currentTrailY });
      animationFrameId = requestAnimationFrame(followLoop);
    };

    animationFrameId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Outer trailing aura */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '56px' : '36px',
          height: isHovered ? '56px' : '36px',
          background: isHovered
            ? 'radial-gradient(circle, rgba(2,132,199,0.2) 0%, rgba(124,58,237,0.1) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(2,132,199,0.12) 0%, transparent 70%)',
          border: isHovered ? '1.5px solid rgba(2, 132, 199, 0.6)' : '1px solid rgba(0, 0, 0, 0.25)',
          boxShadow: isHovered ? '0 0 20px rgba(2, 132, 199, 0.25)' : 'none',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      />

      {/* Center sharp dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          backgroundColor: isHovered ? '#0284c7' : '#09090b',
          boxShadow: isHovered ? '0 0 10px rgba(2, 132, 199, 0.6)' : '0 0 4px rgba(0,0,0,0.3)',
        }}
      />
    </>
  );
}
