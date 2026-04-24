import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function generateNetwork() {
  const layers = [3, 5, 6, 5, 3, 2];
  const nodes = [];
  const connections = [];
  let id = 0;

  const width = 500;
  const height = 360;
  const layerSpacing = width / (layers.length + 1);

  layers.forEach((count, layerIdx) => {
    const x = layerSpacing * (layerIdx + 1);
    const nodeSpacing = height / (count + 1);
    for (let i = 0; i < count; i++) {
      nodes.push({
        id: id++,
        cx: x,
        cy: nodeSpacing * (i + 1),
        r: layerIdx === 0 || layerIdx === layers.length - 1 ? 6 : 5,
        layer: layerIdx,
      });
    }
  });

  // Connect adjacent layers
  for (let l = 0; l < layers.length - 1; l++) {
    const fromNodes = nodes.filter((n) => n.layer === l);
    const toNodes = nodes.filter((n) => n.layer === l + 1);
    fromNodes.forEach((from) => {
      toNodes.forEach((to) => {
        connections.push({ from, to });
      });
    });
  }

  return { nodes, connections };
}

export default function HeroNeuralNet() {
  const [network] = useState(() => generateNetwork());
  const [activeConnections, setActiveConnections] = useState(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const newActive = new Set();
      const count = Math.floor(Math.random() * 8) + 4;
      for (let i = 0; i < count; i++) {
        newActive.add(Math.floor(Math.random() * network.connections.length));
      }
      setActiveConnections(newActive);
    }, 1500);
    return () => clearInterval(interval);
  }, [network.connections.length]);

  return (
    <motion.div
      className="hero-visual-neural"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="neural-window">
        <div className="code-window-header">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
          <span className="code-filename">neural_network.py</span>
        </div>
        <svg viewBox="0 0 500 360" className="neural-svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Connections */}
          {network.connections.map((conn, i) => (
            <motion.line
              key={`conn-${i}`}
              x1={conn.from.cx}
              y1={conn.from.cy}
              x2={conn.to.cx}
              y2={conn.to.cy}
              stroke={activeConnections.has(i) ? '#8B5CF6' : '#ffffff10'}
              strokeWidth={activeConnections.has(i) ? 1.5 : 0.5}
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                opacity: activeConnections.has(i) ? 0.8 : 0.15,
              }}
              transition={{
                pathLength: { delay: 0.8 + i * 0.005, duration: 0.8 },
                opacity: { duration: 0.8 },
              }}
            />
          ))}

          {/* Nodes */}
          {network.nodes.map((node) => (
            <motion.g key={node.id}>
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + node.id * 0.04, type: 'spring' }}
              />
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r * 0.5}
                fill="#8B5CF6"
                initial={{ scale: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{
                  delay: 1 + node.id * 0.04,
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.g>
          ))}

          {/* Layer labels */}
          {['Input', 'Hidden', '', '', 'Hidden', 'Output'].map((label, i) => {
            if (!label) return null;
            const x = (500 / 7) * (i + 1);
            return (
              <motion.text
                key={`label-${i}`}
                x={x}
                y={350}
                fill="#ffffff50"
                fontSize="10"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2 }}
              >
                {label}
              </motion.text>
            );
          })}
        </svg>
      </div>
    </motion.div>
  );
}
