import { useEffect, useRef } from "react";

const CircuitCardBg = ({ active, width = 400, height = 200 }: { active: boolean; width?: number; height?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(active);
  const opacityRef = useRef(0);

  activeRef.current = active;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const t = [78, 205, 176];
    const g = [218, 165, 50];

    // Generate static circuit structure once
    interface Trace { points: { x: number; y: number }[]; color: number[] }
    const traces: Trace[] = [];

    const addTrace = (sx: number, sy: number, segs: number, color: number[]) => {
      const points = [{ x: sx, y: sy }];
      let x = sx, y = sy, horiz = Math.random() > 0.4;
      for (let i = 0; i < segs; i++) {
        if (horiz) {
          x += (Math.random() - 0.3) * 80 + 15;
          x = Math.max(5, Math.min(width - 5, x));
        } else {
          y += (Math.random() - 0.3) * 50 + 10;
          y = Math.max(5, Math.min(height - 5, y));
        }
        points.push({ x, y });
        horiz = !horiz;
      }
      traces.push({ points, color });
    };

    for (let i = 0; i < 12; i++) addTrace(Math.random() * width, Math.random() * height, 3, t);
    for (let i = 0; i < 8; i++) addTrace(Math.random() * width, Math.random() * height, 3, g);

    // Nodes at intersections
    const nodes: { x: number; y: number; color: number[] }[] = [];
    traces.forEach((tr) => {
      tr.points.forEach((p, i) => {
        if (i > 0 && Math.random() > 0.4) nodes.push({ x: p.x, y: p.y, color: tr.color });
      });
    });

    // Pulses
    interface Pulse { trace: number; progress: number; speed: number; brightness: number }
    const pulses: Pulse[] = [];

    const spawnPulse = () => {
      const idx = Math.floor(Math.random() * traces.length);
      pulses.push({ trace: idx, progress: 0, speed: 0.006 + Math.random() * 0.008, brightness: 0.5 + Math.random() * 0.5 });
    };

    let animId: number;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Fade opacity in/out
      const target = activeRef.current ? 1 : 0;
      opacityRef.current += (target - opacityRef.current) * 0.06;
      const opacity = opacityRef.current;

      if (opacity < 0.01) {
        animId = requestAnimationFrame(draw);
        return;
      }

      ctx.globalAlpha = opacity;

      // Grid
      ctx.strokeStyle = `rgba(${t[0]}, ${t[1]}, ${t[2]}, 0.04)`;
      ctx.lineWidth = 0.3;
      for (let x = 0; x <= width; x += 10) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y <= height; y += 10) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // Traces
      traces.forEach((tr) => {
        const c = tr.color;
        ctx.beginPath();
        ctx.moveTo(tr.points[0].x, tr.points[0].y);
        for (let i = 1; i < tr.points.length; i++) ctx.lineTo(tr.points[i].x, tr.points[i].y);
        ctx.strokeStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.12)`;
        ctx.lineWidth = 0.6;
        ctx.lineCap = "square";
        ctx.stroke();
      });

      // Nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color[0]}, ${n.color[1]}, ${n.color[2]}, 0.25)`;
        ctx.fill();
        // Ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${n.color[0]}, ${n.color[1]}, ${n.color[2]}, 0.12)`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      });

      // Pulses
      if (activeRef.current && Math.random() < 0.06) spawnPulse();

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;
        if (pulse.progress > 1.1) { pulses.splice(i, 1); continue; }

        const tr = traces[pulse.trace];
        const segs = tr.points.length - 1;
        const totalT = Math.min(pulse.progress, 1) * segs;
        const segIdx = Math.min(Math.floor(totalT), segs - 1);
        const localT = totalT - segIdx;
        const p0 = tr.points[segIdx];
        const p1 = tr.points[segIdx + 1];
        const px = p0.x + (p1.x - p0.x) * localT;
        const py = p0.y + (p1.y - p0.y) * localT;

        const c = tr.color;
        // Glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
        grad.addColorStop(0, `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${pulse.brightness * 0.5})`);
        grad.addColorStop(1, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulse.brightness * 0.7})`;
        ctx.fill();
      }

      // Node shimmer
      nodes.forEach((n, idx) => {
        const shimmer = Math.sin(frame * 0.02 + idx * 2.1) * 0.5 + 0.5;
        if (shimmer > 0.7) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${n.color[0]}, ${n.color[1]}, ${n.color[2]}, ${(shimmer - 0.7) * 0.5})`;
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default CircuitCardBg;
