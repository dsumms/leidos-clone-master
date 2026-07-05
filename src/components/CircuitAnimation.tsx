import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  connections: number[];
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  opacity: number;
}

const CircuitAnimation = ({ width = 168, height = 120 }: { width?: number; height?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Generate circuit nodes in a grid-like pattern with some randomness
    const nodes: Node[] = [];
    const cols = 7;
    const rows = 5;
    const spacingX = width / (cols + 1);
    const spacingY = height / (rows + 1);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          x: spacingX * (c + 1) + (Math.random() - 0.5) * spacingX * 0.4,
          y: spacingY * (r + 1) + (Math.random() - 0.5) * spacingY * 0.3,
          connections: [],
        });
      }
    }

    // Create connections (circuit traces) - horizontal and vertical neighbors + some diagonals
    for (let i = 0; i < nodes.length; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;

      // Right neighbor
      if (col < cols - 1 && Math.random() > 0.3) {
        nodes[i].connections.push(i + 1);
      }
      // Down neighbor
      if (row < rows - 1 && Math.random() > 0.3) {
        nodes[i].connections.push(i + cols);
      }
      // Diagonal down-right
      if (col < cols - 1 && row < rows - 1 && Math.random() > 0.7) {
        nodes[i].connections.push(i + cols + 1);
      }
    }

    // Active pulses traveling along traces
    const pulses: Pulse[] = [];
    const tealColor = { r: 78, g: 205, b: 176 }; // matches primary teal

    const spawnPulse = () => {
      // Pick a random node that has connections
      const candidates = nodes
        .map((n, i) => ({ node: n, index: i }))
        .filter((n) => n.node.connections.length > 0);

      if (candidates.length === 0) return;

      const from = candidates[Math.floor(Math.random() * candidates.length)];
      const toIndex = from.node.connections[Math.floor(Math.random() * from.node.connections.length)];

      pulses.push({
        fromNode: from.index,
        toNode: toIndex,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01,
        opacity: 0.6 + Math.random() * 0.4,
      });
    };

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw traces (lines)
      for (const node of nodes) {
        const idx = nodes.indexOf(node);
        for (const connIdx of node.connections) {
          const target = nodes[connIdx];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);

          // Draw right-angle traces for that circuit board feel
          if (Math.abs(target.x - node.x) > 2 && Math.abs(target.y - node.y) > 2) {
            // L-shaped path
            if (Math.random() > 0.5 || true) {
              ctx.lineTo(target.x, node.y);
              ctx.lineTo(target.x, target.y);
            }
          } else {
            ctx.lineTo(target.x, target.y);
          }

          ctx.strokeStyle = `rgba(${tealColor.r}, ${tealColor.g}, ${tealColor.b}, 0.08)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw nodes (small dots at junctions)
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${tealColor.r}, ${tealColor.g}, ${tealColor.b}, 0.15)`;
        ctx.fill();
      }

      // Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          // Chain: pulse continues to next connection
          const nextNode = nodes[pulse.toNode];
          if (nextNode.connections.length > 0 && Math.random() > 0.4) {
            const nextTarget = nextNode.connections[Math.floor(Math.random() * nextNode.connections.length)];
            pulse.fromNode = pulse.toNode;
            pulse.toNode = nextTarget;
            pulse.progress = 0;
            pulse.opacity *= 0.85;
          } else {
            pulses.splice(i, 1);
            continue;
          }
        }

        const from = nodes[pulse.fromNode];
        const to = nodes[pulse.toNode];

        // Calculate position along the L-shaped path
        let px: number, py: number;
        if (Math.abs(to.x - from.x) > 2 && Math.abs(to.y - from.y) > 2) {
          const midProgress = 0.5;
          if (pulse.progress < midProgress) {
            const t = pulse.progress / midProgress;
            px = from.x + (to.x - from.x) * t;
            py = from.y;
          } else {
            const t = (pulse.progress - midProgress) / (1 - midProgress);
            px = to.x;
            py = from.y + (to.y - from.y) * t;
          }
        } else {
          px = from.x + (to.x - from.x) * pulse.progress;
          py = from.y + (to.y - from.y) * pulse.progress;
        }

        // Glow effect
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 8);
        gradient.addColorStop(0, `rgba(${tealColor.r}, ${tealColor.g}, ${tealColor.b}, ${pulse.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(${tealColor.r}, ${tealColor.g}, ${tealColor.b}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${tealColor.r}, ${tealColor.g}, ${tealColor.b}, ${pulse.opacity})`;
        ctx.fill();
      }

      // Spawn new pulses periodically
      if (Math.random() < 0.03) {
        spawnPulse();
      }

      animationId = requestAnimationFrame(draw);
    };

    // Initial pulses
    for (let i = 0; i < 4; i++) spawnPulse();

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width, height, opacity: 0.7 }}
    />
  );
};

export default CircuitAnimation;
