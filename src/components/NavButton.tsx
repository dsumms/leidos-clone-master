import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  to: string;
  icon: string;
  label: string;
  isActive: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

const NavButton = ({ to, icon, label, isActive }: NavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(icon);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [traceProgress, setTraceProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrambleRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Text scramble effect
  const scrambleTo = useCallback((target: string, onComplete?: () => void) => {
    if (scrambleRef.current) cancelAnimationFrame(scrambleRef.current);
    let iteration = 0;
    const revealStepsPerLetter = 2;
    const maxIterations = target.length * revealStepsPerLetter;
    let lastTime = 0;
    const interval = 18; // ms between updates

    const step = (time: number) => {
      if (time - lastTime < interval) {
        scrambleRef.current = requestAnimationFrame(step);
        return;
      }
      lastTime = time;

      setDisplayText(
        target
          .split("")
          .map((char, i) => {
            if (i < iteration / revealStepsPerLetter) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration <= maxIterations) {
        scrambleRef.current = requestAnimationFrame(step);
      } else {
        setDisplayText(target);
        onComplete?.();
      }
    };
    scrambleRef.current = requestAnimationFrame(step);
  }, []);

  // Handle hover in/out with scramble - always end on original icon text
  useEffect(() => {
    if (isHovered) {
      scrambleTo(icon); // scramble through random chars but land back on icon
    } else {
      scrambleTo(icon);
    }
    return () => {
      if (scrambleRef.current) cancelAnimationFrame(scrambleRef.current);
    };
  }, [isHovered, icon, scrambleTo]);

  // Glow animation on hover
  useEffect(() => {
    let animId: number;
    const animate = () => {
      setGlowIntensity((prev) => {
        const target = isHovered || isActive ? 1 : 0;
        return prev + (target - prev) * 0.08;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, isActive]);

  // Circuit trace canvas animation
  useEffect(() => {
    let animId: number;
    const animate = () => {
      setTraceProgress((prev) => {
        if (isHovered) return prev < 1 ? prev + 0.03 : 1;
        return prev > 0 ? prev - 0.05 : 0;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  // Draw circuit traces on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = 120;
    const ch = 50;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = cw * dpr;
    canvas.height = ch * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cw, ch);

    if (traceProgress <= 0) return;

    const teal = [78, 205, 176];
    const gold = [218, 165, 50];

    // Circuit traces that reveal on hover
    const traces = [
      // Horizontal traces
      [{ x: 0, y: 12 }, { x: cw * traceProgress, y: 12 }],
      [{ x: cw, y: 38 }, { x: cw - cw * traceProgress, y: 38 }],
      // Vertical connectors
      [{ x: 20, y: 0 }, { x: 20, y: ch * traceProgress }],
      [{ x: cw - 20, y: ch }, { x: cw - 20, y: ch - ch * traceProgress }],
      // Diagonal accents
      [{ x: 0, y: 25 }, { x: 15 * traceProgress, y: 12 }],
      [{ x: cw, y: 25 }, { x: cw - 15 * traceProgress, y: 38 }],
    ];

    traces.forEach((trace, idx) => {
      const c = idx % 3 === 0 ? gold : teal;
      ctx.beginPath();
      ctx.moveTo(trace[0].x, trace[0].y);
      ctx.lineTo(trace[1].x, trace[1].y);
      ctx.strokeStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${0.3 * traceProgress})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Pulse dot at trace end
      if (traceProgress > 0.3) {
        const endPoint = trace[1];
        const grad = ctx.createRadialGradient(endPoint.x, endPoint.y, 0, endPoint.x, endPoint.y, 4);
        grad.addColorStop(0, `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${0.6 * traceProgress})`);
        grad.addColorStop(1, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
        ctx.beginPath();
        ctx.arc(endPoint.x, endPoint.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    });

    // Junction nodes
    const nodes = [
      { x: 20, y: 12 }, { x: cw - 20, y: 38 },
      { x: 60, y: 12 }, { x: 60, y: 38 },
    ];
    nodes.forEach((n) => {
      if (traceProgress > 0.5) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${teal[0]}, ${teal[1]}, ${teal[2]}, ${0.4 * traceProgress})`;
        ctx.fill();
      }
    });
  }, [traceProgress]);

  const borderColor = isActive
    ? `rgba(78, 205, 176, ${0.4 + glowIntensity * 0.3})`
    : `rgba(78, 205, 176, ${glowIntensity * 0.3})`;

  const boxShadow = glowIntensity > 0.05
    ? `0 0 ${8 * glowIntensity}px rgba(78, 205, 176, ${0.15 * glowIntensity}), inset 0 0 ${12 * glowIntensity}px rgba(78, 205, 176, ${0.05 * glowIntensity})`
    : "none";

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={to}
        className="relative block px-6 py-3 overflow-hidden"
        style={{
          border: `1px solid ${borderColor}`,
          boxShadow,
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Circuit trace canvas behind text */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ width: "100%", height: "100%", opacity: 0.7 }}
        />

        {/* Scramble text */}
        <span
          className={`relative z-10 font-display text-[30px] tracking-widest transition-colors duration-200 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`}
          style={{
            filter: glowIntensity > 0.3
              ? `drop-shadow(0 0 ${4 * glowIntensity}px rgba(78, 205, 176, ${0.5 * glowIntensity}))`
              : "none",
          }}
        >
          {displayText}
        </span>

        {/* Animated underline */}
        <div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{
            width: `${traceProgress * 100}%`,
            background: `linear-gradient(90deg, rgba(78, 205, 176, 0.8), rgba(218, 165, 50, 0.6))`,
            boxShadow: traceProgress > 0
              ? `0 0 6px rgba(78, 205, 176, ${0.4 * traceProgress})`
              : "none",
            transition: "width 0.1s linear",
          }}
        />
      </Link>
    </div>
  );
};

export default NavButton;
