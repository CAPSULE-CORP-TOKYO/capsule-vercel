'use client';

import { useRef, useEffect } from 'react';

const orbs = [
  { x: 0.2,  y: 0.25, r: 0.5,  color: [210, 218, 235], speed: 0.08 },
  { x: 0.75, y: 0.6,  r: 0.55, color: [225, 210, 240], speed: 0.06 },
  { x: 0.5,  y: 0.8,  r: 0.5,  color: [200, 228, 225], speed: 0.07 },
  { x: 0.8,  y: 0.15, r: 0.4,  color: [235, 222, 215], speed: 0.05 },
  { x: 0.35, y: 0.55, r: 0.35, color: [218, 225, 240], speed: 0.09 },
];

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let animationId = null;
    let time = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    function drawOrb(orb, t) {
      const drift = t * orb.speed * 0.001;
      const cx = (orb.x + Math.sin(drift + orb.x * 6.28) * 0.06) * width;
      const cy = (orb.y + Math.cos(drift * 0.7 + orb.y * 6.28) * 0.05) * height;
      const r = orb.r * Math.min(width, height);

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      const [cr, cg, cb] = orb.color;
      gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, 0.5)`);
      gradient.addColorStop(0.4, `rgba(${cr}, ${cg}, ${cb}, 0.2)`);
      gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function animate() {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(248, 248, 247, 1)';
      ctx.fillRect(0, 0, width, height);

      orbs.forEach(orb => drawOrb(orb, time));
      animationId = requestAnimationFrame(animate);
    }

    // Pause when hero not visible
    const heroSection = canvas.closest('.hero');
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!animationId) animate();
        } else {
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
        }
      },
      { threshold: 0 }
    );

    window.addEventListener('resize', resize);
    resize();
    if (heroSection) heroObserver.observe(heroSection);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      heroObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}
