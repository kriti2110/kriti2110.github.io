import { motion } from 'framer-motion';

const PALETTE = [
  { wings: '#D3968C', body: '#0A3323', dot: '#F7C1B5' },
  { wings: '#839958', body: '#0A3323', dot: '#C8DFA0' },
  { wings: '#105666', body: '#0A3323', dot: '#7EC8D8' },
  { wings: '#C4806E', body: '#2C1008', dot: '#F7F4D5' },
];

function ButterflyShape({ col, size = 1 }) {
  const w = col.wings;
  const b = col.body;
  const d = col.dot;
  const s = size;

  return (
    <svg
      width={44 * s} height={38 * s}
      viewBox="-22 -19 44 38"
      style={{ overflow: 'visible' }}
    >
      {/* Left upper wing */}
      <motion.ellipse
        cx="-13" cy="-7" rx="12" ry="9"
        fill={w} opacity="0.88"
        animate={{ ry: [9, 2.5, 9] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Left lower wing */}
      <motion.ellipse
        cx="-11" cy="5.5" rx="8.5" ry="6"
        fill={w} opacity="0.72"
        animate={{ ry: [6, 1.5, 6] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut', delay: 0.04 }}
      />
      {/* Wing spots left */}
      <motion.circle cx="-13" cy="-7" r="2.5" fill={d} opacity="0.5"
        animate={{ ry: [2.5, 0.7, 2.5] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Right upper wing */}
      <motion.ellipse
        cx="13" cy="-7" rx="12" ry="9"
        fill={w} opacity="0.88"
        animate={{ ry: [9, 2.5, 9] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Right lower wing */}
      <motion.ellipse
        cx="11" cy="5.5" rx="8.5" ry="6"
        fill={w} opacity="0.72"
        animate={{ ry: [6, 1.5, 6] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut', delay: 0.04 }}
      />
      <motion.circle cx="13" cy="-7" r="2.5" fill={d} opacity="0.5"
        animate={{ ry: [2.5, 0.7, 2.5] }}
        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Body */}
      <ellipse cx="0" cy="0" rx="2.2" ry="9" fill={b} />
      {/* Head */}
      <circle cx="0" cy="-10" r="3" fill={b} />
      {/* Antennae */}
      <line x1="-1.5" y1="-12" x2="-7"  y2="-19" stroke={b} strokeWidth="1" />
      <circle cx="-7"  cy="-19" r="1.8" fill={w} stroke={b} strokeWidth="0.5" />
      <line x1="1.5"  y1="-12" x2="7"   y2="-19" stroke={b} strokeWidth="1" />
      <circle cx="7"   cy="-19" r="1.8" fill={w} stroke={b} strokeWidth="0.5" />
    </svg>
  );
}

// Simple bird silhouette
function BirdShape({ col }) {
  return (
    <svg width={32} height={18} viewBox="0 0 32 18" style={{ overflow: 'visible' }}>
      {/* Two wing arcs = seagull M shape */}
      <motion.path
        d="M0 10 Q8 0 16 6 Q24 0 32 10"
        stroke={col.body} strokeWidth="2.2" fill="none" strokeLinecap="round"
        animate={{ d: ['M0 10 Q8 0 16 6 Q24 0 32 10', 'M0 6 Q8 14 16 10 Q24 14 32 6', 'M0 10 Q8 0 16 6 Q24 0 32 10'] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Body dot */}
      <circle cx="16" cy="8" r="2" fill={col.body} />
    </svg>
  );
}

const CREATURES = [
  { type: 'butterfly', side: 'left',  yPct: 12, delay: 0,    dur: 20, ci: 0, size: 1    },
  { type: 'bird',      side: 'right', yPct: 22, delay: 4,    dur: 15, ci: 2             },
  { type: 'butterfly', side: 'left',  yPct: 52, delay: 8,    dur: 18, ci: 1, size: 0.78 },
  { type: 'bird',      side: 'left',  yPct: 38, delay: 2,    dur: 22, ci: 3             },
  { type: 'butterfly', side: 'right', yPct: 70, delay: 12,   dur: 16, ci: 2, size: 1.1  },
  { type: 'butterfly', side: 'right', yPct: 85, delay: 5,    dur: 24, ci: 3, size: 0.7  },
  { type: 'bird',      side: 'right', yPct: 62, delay: 9,    dur: 17, ci: 0             },
];

export function FlyingCreatures() {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1440;

  return (
    <>
      {CREATURES.map((c, i) => {
        const fromX = c.side === 'left' ? -120 : vw + 80;
        const toX   = c.side === 'left' ? vw + 80 : -120;
        const col   = PALETTE[c.ci % PALETTE.length];

        return (
          <motion.div
            key={i}
            style={{
              position: 'fixed',
              top:  `${c.yPct}%`,
              left: 0,
              pointerEvents: 'none',
              zIndex: 200,
              rotateY: c.side === 'right' ? 180 : 0,
            }}
            animate={{
              x: [fromX, toX],
              y: [0, -18, 6, -12, 0, -8, 3, 0],
            }}
            transition={{
              x: { duration: c.dur, repeat: Infinity, ease: 'linear', delay: c.delay },
              y: { duration: c.dur * 0.28, repeat: Infinity, ease: 'easeInOut', delay: c.delay * 0.5 },
            }}
          >
            {c.type === 'butterfly'
              ? <ButterflyShape col={col} size={c.size ?? 1} />
              : <BirdShape col={col} />}
          </motion.div>
        );
      })}
    </>
  );
}
