import { useEffect, useRef } from "react";
import apalumaLogo from "@/assets/apaluma-logo.png";

const CircuitLogo = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 610;
    const h = 180;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const t = [78, 205, 176]; // teal RGB
    const g = [218, 165, 50]; // gold/amber RGB

    // Data bus channels (parallel lines like a processor bus)
    const buses: { x: number; y: number; horizontal: boolean; length: number; lines: number }[] = [];
    // Horizontal buses
    for (let i = 0; i < 6; i++) {
      const y = 15 + (h - 30) * (i / 5) + (Math.random() - 0.5) * 8;
      buses.push({ x: 10, y, horizontal: true, length: w - 20, lines: 2 + Math.floor(Math.random() * 3) });
    }
    // Vertical buses
    for (let i = 0; i < 10; i++) {
      const x = 20 + (w - 40) * (i / 9) + (Math.random() - 0.5) * 15;
      buses.push({ x, y: 5, horizontal: false, length: h - 10, lines: 2 + Math.floor(Math.random() * 2) });
    }

    // Processor blocks (rectangular regions like functional units on a die)
    const blocks: { x: number; y: number; w: number; h: number; density: number }[] = [];
    for (let i = 0; i < 14; i++) {
      const bw = 25 + Math.random() * 50;
      const bh = 12 + Math.random() * 25;
      blocks.push({
        x: Math.random() * (w - bw),
        y: Math.random() * (h - bh),
        w: bw,
        h: bh,
        density: 0.3 + Math.random() * 0.5,
      });
    }

    // Pin-out pads along edges
    const edgePads: { x: number; y: number }[] = [];
    for (let x = 8; x < w; x += 12) {
      edgePads.push({ x, y: 3 });
      edgePads.push({ x, y: h - 3 });
    }
    for (let y = 8; y < h; y += 10) {
      edgePads.push({ x: 3, y });
      edgePads.push({ x: w - 3, y });
    }

    // Signal paths - teal layer
    interface SignalPath {
      points: { x: number; y: number }[];
      color: number[]; // RGB
    }
    const signals: SignalPath[] = [];
    const createSignal = (color: number[]) => {
      const fromBlock = blocks[Math.floor(Math.random() * blocks.length)];
      const toBlock = blocks[Math.floor(Math.random() * blocks.length)];
      const sx = fromBlock.x + fromBlock.w * Math.random();
      const sy = fromBlock.y + fromBlock.h * Math.random();
      const ex = toBlock.x + toBlock.w * Math.random();
      const ey = toBlock.y + toBlock.h * Math.random();
      const points = [{ x: sx, y: sy }];
      if (Math.random() > 0.5) {
        points.push({ x: ex, y: sy });
      } else {
        points.push({ x: sx, y: ey });
      }
      points.push({ x: ex, y: ey });
      signals.push({ points, color });
    };
    for (let i = 0; i < 25; i++) createSignal(t);
    for (let i = 0; i < 18; i++) createSignal(g);

    // Gold layer buses (offset from teal ones)
    const goldBuses: { x: number; y: number; horizontal: boolean; length: number; lines: number }[] = [];
    for (let i = 0; i < 4; i++) {
      const y = 25 + (h - 50) * (i / 3) + (Math.random() - 0.5) * 10;
      goldBuses.push({ x: 30, y, horizontal: true, length: w - 60, lines: 1 + Math.floor(Math.random() * 2) });
    }
    for (let i = 0; i < 6; i++) {
      const x = 40 + (w - 80) * (i / 5) + (Math.random() - 0.5) * 20;
      goldBuses.push({ x, y: 10, horizontal: false, length: h - 20, lines: 1 + Math.floor(Math.random() * 2) });
    }

    // ── Pulse animation state ──
    interface Pulse {
      signal: number;
      progress: number;
      speed: number;
      brightness: number;
      size: number;
    }
    const pulses: Pulse[] = [];

    const spawnPulse = () => {
      const idx = Math.floor(Math.random() * signals.length);
      pulses.push({
        signal: idx,
        progress: 0,
        speed: 0.006 + Math.random() * 0.008,
        brightness: 0.81 + Math.random() * 0.19,
        size: 3 + Math.random() * 4,
      });
    };

    const getSignalPoint = (sig: SignalPath, prog: number) => {
      const segs = sig.points.length - 1;
      const totalT = prog * segs;
      const segIdx = Math.min(Math.floor(totalT), segs - 1);
      const localT = totalT - segIdx;
      const p0 = sig.points[segIdx];
      const p1 = sig.points[segIdx + 1];
      return { x: p0.x + (p1.x - p0.x) * localT, y: p0.y + (p1.y - p0.y) * localT };
    };

    let animationId: number;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Base substrate
      ctx.fillStyle = `rgba(${t[0]}, ${t[1]}, ${t[2]}, 0.63)`;
      ctx.fillRect(0, 0, w, h);

      // Fine grid (silicon wafer pattern)
      ctx.strokeStyle = `rgba(${t[0]}, ${t[1]}, ${t[2]}, 0.14)`;
      ctx.lineWidth = 0.3;
      for (let x = 0; x <= w; x += 6) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y <= h; y += 6) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Data buses (parallel trace bundles)
      buses.forEach((bus) => {
        for (let l = 0; l < bus.lines; l++) {
          const offset = (l - (bus.lines - 1) / 2) * 2.5;
          ctx.beginPath();
          if (bus.horizontal) {
            ctx.moveTo(bus.x, bus.y + offset);
            ctx.lineTo(bus.x + bus.length, bus.y + offset);
          } else {
            ctx.moveTo(bus.x + offset, bus.y);
            ctx.lineTo(bus.x + offset, bus.y + bus.length);
          }
          ctx.strokeStyle = `rgba(${t[0]}, ${t[1]}, ${t[2]}, 0.40)`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Gold layer buses
      goldBuses.forEach((bus) => {
        for (let l = 0; l < bus.lines; l++) {
          const offset = (l - (bus.lines - 1) / 2) * 2.5;
          ctx.beginPath();
          if (bus.horizontal) {
            ctx.moveTo(bus.x, bus.y + offset);
            ctx.lineTo(bus.x + bus.length, bus.y + offset);
          } else {
            ctx.moveTo(bus.x + offset, bus.y);
            ctx.lineTo(bus.x + offset, bus.y + bus.length);
          }
          ctx.strokeStyle = `rgba(${g[0]}, ${g[1]}, ${g[2]}, 0.36)`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Processor blocks (functional units)
      blocks.forEach((block, idx) => {
        // Alternate block outlines between teal and gold
        const bc = idx % 3 === 0 ? g : t;
        ctx.strokeStyle = `rgba(${bc[0]}, ${bc[1]}, ${bc[2]}, 0.45)`;
        ctx.lineWidth = 0.6;
        ctx.strokeRect(block.x, block.y, block.w, block.h);

        // Internal pattern
        ctx.fillStyle = `rgba(${bc[0]}, ${bc[1]}, ${bc[2]}, 0.16)`;
        const cellW = 3;
        const cellH = 2.5;
        for (let cx = block.x + 1; cx < block.x + block.w - 1; cx += cellW) {
          for (let cy = block.y + 1; cy < block.y + block.h - 1; cy += cellH) {
            if (Math.random() < block.density) {
              ctx.fillRect(cx, cy, cellW - 0.5, cellH - 0.5);
            }
          }
        }
      });

      // Signal interconnects (colored per signal)
      signals.forEach((sig) => {
        const c = sig.color;
        ctx.beginPath();
        ctx.moveTo(sig.points[0].x, sig.points[0].y);
        for (let i = 1; i < sig.points.length; i++) {
          ctx.lineTo(sig.points[i].x, sig.points[i].y);
        }
        ctx.strokeStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.32)`;
        ctx.lineWidth = 0.6;
        ctx.lineCap = "square";
        ctx.stroke();
      });

      // Edge pin pads (alternating colors)
      edgePads.forEach((pad, idx) => {
        const pc = idx % 3 === 0 ? g : t;
        ctx.fillStyle = `rgba(${pc[0]}, ${pc[1]}, ${pc[2]}, 0.45)`;
        ctx.fillRect(pad.x - 1.5, pad.y - 1, 3, 2);
      });

      // Junction dots at signal bends
      signals.forEach((sig) => {
        const c = sig.color;
        sig.points.forEach((p, i) => {
          if (i > 0 && i < sig.points.length - 1) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.68)`;
            ctx.fill();
          }
        });
      });

      // ── Animated data pulses ──
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress > 1.15) {
          pulses.splice(i, 1);
          continue;
        }

        const sig = signals[pulse.signal];
        const tailSteps = 8;

        for (let s = 0; s < tailSteps; s++) {
          const pt = pulse.progress - s * 0.015;
          if (pt < 0 || pt > 1) continue;

          const pos = getSignalPoint(sig, pt);
          const fade = 1 - s / tailSteps;

          const c = sig.color;
          // Outer glow
          const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, pulse.size * fade);
          grad.addColorStop(0, `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${pulse.brightness * fade * 0.97})`);
          grad.addColorStop(0.5, `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${pulse.brightness * fade * 0.24})`);
          grad.addColorStop(1, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, pulse.size * fade, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          if (s === 0) {
            // White-hot leading edge
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 1.2, 0, Math.PI * 2);
            const ledge = c === g ? `rgba(255, 240, 200, ${pulse.brightness})` : `rgba(220, 255, 245, ${pulse.brightness})`;
            ctx.fillStyle = ledge;
            ctx.fill();
          }
        }
      }

      // Block activity shimmer + burst pulses
      blocks.forEach((block, idx) => {
        const activity = Math.sin(frame * 0.005 + idx * 3.7) * 0.5 + 0.5;
        const prevActivity = Math.sin((frame - 1) * 0.005 + idx * 3.7) * 0.5 + 0.5;

        if (activity > 0.6) {
          const bc = idx % 3 === 0 ? g : t;
          ctx.fillStyle = `rgba(${bc[0]}, ${bc[1]}, ${bc[2]}, ${(activity - 0.6) * 0.24})`;
          ctx.fillRect(block.x, block.y, block.w, block.h);

          // Burst: spawn pulses when block crosses activation threshold
          if (prevActivity <= 0.6 && activity > 0.6) {
            const cx = block.x + block.w / 2;
            const cy = block.y + block.h / 2;
            // Find signals that start near this block and fire them
            signals.forEach((sig, sIdx) => {
              const sp = sig.points[0];
              if (sp.x >= block.x && sp.x <= block.x + block.w &&
                  sp.y >= block.y && sp.y <= block.y + block.h) {
                pulses.push({
                  signal: sIdx,
                  progress: 0,
                  speed: 0.008 + Math.random() * 0.006,
                  brightness: 0.97 + Math.random() * 0.03,
                  size: 4 + Math.random() * 3,
                });
              }
            });

            // Radial burst ring effect
            const burstRadius = Math.max(block.w, block.h) * 0.8;
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, burstRadius);
            grad.addColorStop(0, `rgba(${bc[0]}, ${bc[1]}, ${bc[2]}, 0.64)`);
            grad.addColorStop(0.6, `rgba(${bc[0]}, ${bc[1]}, ${bc[2]}, 0.16)`);
            grad.addColorStop(1, `rgba(${bc[0]}, ${bc[1]}, ${bc[2]}, 0)`);
            ctx.beginPath();
            ctx.arc(cx, cy, burstRadius, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
          }
        }
      });

      if (Math.random() < 0.08) spawnPulse();
      frame++;
      animationId = requestAnimationFrame(draw);
    };

    for (let i = 0; i < 8; i++) spawnPulse();
    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        width: 439,
        height: 130,
        WebkitMaskImage: `url(${apalumaLogo})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: `url(${apalumaLogo})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CircuitLogo;
