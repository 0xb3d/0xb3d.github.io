'use client';

import { useEffect, useRef } from 'react';

interface GridOverlayProps {
  pattern?: 'dots' | 'lines' | 'hybrid' | 'blueprint';
  dotSize?: number;
  gridSize?: number;
  cornerEmphasis?: boolean;
}

export default function GridOverlay({ 
  pattern = 'hybrid',
  dotSize = 1.5,
  gridSize = 80,
  cornerEmphasis = true 
}: GridOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      draw();
    };

    const getComputedColor = () => {
      // Check if we're in light or dark mode
      const isDark = document.documentElement.classList.contains('dark') || 
                     !document.documentElement.classList.contains('light');
      
      return isDark 
        ? { line: 'rgba(232, 228, 223, 0.06)', dot: 'rgba(232, 228, 223, 0.12)', accent: 'rgba(196, 30, 30, 0.15)' }
        : { line: 'rgba(0, 0, 0, 0.04)', dot: 'rgba(0, 0, 0, 0.08)', accent: 'rgba(196, 30, 30, 0.12)' };
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const colors = getComputedColor();

      ctx.clearRect(0, 0, w, h);

      // Calculate distance from corners for emphasis
      const getCornerFactor = (x: number, y: number): number => {
        if (!cornerEmphasis) return 1;
        
        // Distance from each corner (normalized 0-1)
        const corners = [
          Math.sqrt(x * x + y * y), // top-left
          Math.sqrt((w - x) * (w - x) + y * y), // top-right
          Math.sqrt(x * x + (h - y) * (h - y)), // bottom-left
          Math.sqrt((w - x) * (w - x) + (h - y) * (h - y)), // bottom-right
        ];
        
        const minDist = Math.min(...corners);
        const maxDist = Math.sqrt(w * w + h * h) / 2;
        
        // Closer to corner = larger factor (1.5 to 0.5)
        return 1.5 - (minDist / maxDist);
      };

      // Draw line grid
      if (pattern === 'lines' || pattern === 'hybrid' || pattern === 'blueprint') {
        ctx.strokeStyle = colors.line;
        ctx.lineWidth = 0.5;

        // Vertical lines
        for (let x = 0; x <= w; x += gridSize) {
          const isMajor = pattern === 'blueprint' && x % (gridSize * 4) === 0;
          ctx.strokeStyle = isMajor ? colors.dot : colors.line;
          ctx.lineWidth = isMajor ? 1 : 0.5;
          
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y <= h; y += gridSize) {
          const isMajor = pattern === 'blueprint' && y % (gridSize * 4) === 0;
          ctx.strokeStyle = isMajor ? colors.dot : colors.line;
          ctx.lineWidth = isMajor ? 1 : 0.5;
          
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }

      // Draw dots at intersections
      if (pattern === 'dots' || pattern === 'hybrid') {
        for (let x = 0; x <= w; x += gridSize) {
          for (let y = 0; y <= h; y += gridSize) {
            const factor = getCornerFactor(x, y);
            const size = dotSize * factor;
            
            // Determine if this is a "major" intersection (every 4th)
            const isMajor = (x % (gridSize * 4) === 0) && (y % (gridSize * 4) === 0);
            
            ctx.beginPath();
            ctx.arc(x, y, isMajor ? size * 1.5 : size, 0, Math.PI * 2);
            ctx.fillStyle = isMajor ? colors.accent : colors.dot;
            ctx.fill();
          }
        }
      }

      // Draw corner accent marks (blueprint style)
      if (pattern === 'blueprint') {
        const markLength = 20;
        const markOffset = 40;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;

        // Top-left corner
        ctx.beginPath();
        ctx.moveTo(markOffset, markOffset);
        ctx.lineTo(markOffset + markLength, markOffset);
        ctx.moveTo(markOffset, markOffset);
        ctx.lineTo(markOffset, markOffset + markLength);
        ctx.stroke();

        // Top-right corner
        ctx.beginPath();
        ctx.moveTo(w - markOffset, markOffset);
        ctx.lineTo(w - markOffset - markLength, markOffset);
        ctx.moveTo(w - markOffset, markOffset);
        ctx.lineTo(w - markOffset, markOffset + markLength);
        ctx.stroke();

        // Bottom-left corner
        ctx.beginPath();
        ctx.moveTo(markOffset, h - markOffset);
        ctx.lineTo(markOffset + markLength, h - markOffset);
        ctx.moveTo(markOffset, h - markOffset);
        ctx.lineTo(markOffset, h - markOffset - markLength);
        ctx.stroke();

        // Bottom-right corner
        ctx.beginPath();
        ctx.moveTo(w - markOffset, h - markOffset);
        ctx.lineTo(w - markOffset - markLength, h - markOffset);
        ctx.moveTo(w - markOffset, h - markOffset);
        ctx.lineTo(w - markOffset, h - markOffset - markLength);
        ctx.stroke();
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Re-draw when theme changes
    const observer = new MutationObserver(() => {
      draw();
    });
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, [pattern, dotSize, gridSize, cornerEmphasis]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}