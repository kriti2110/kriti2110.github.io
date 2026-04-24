import { motion } from 'framer-motion';

const bob = (delay = 0) => ({
  animate: { y: [0, -5, 0], rotate: [-1, 1, -1] },
  transition: { duration: 3 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay },
});

export function PixelComputer({ size = 1 }) {
  const s = size;
  return (
    <motion.div {...bob(0)} style={{ display: 'inline-block' }}>
      <svg width={52 * s} height={48 * s} viewBox="0 0 52 48">
        {/* Monitor body */}
        <rect x="2"  y="2"  width="48" height="34" rx="4" fill="#105666" />
        <rect x="4"  y="4"  width="44" height="30" rx="3" fill="#0A3323" />
        {/* Screen bezel */}
        <rect x="6"  y="6"  width="40" height="24" rx="2" fill="#0d2e1e" />
        {/* Screen content */}
        <rect x="8"  y="8"  width="24" height="2.5" rx="1" fill="#839958" opacity="0.9" />
        <rect x="8"  y="12" width="18" height="2"   rx="1" fill="#D3968C" opacity="0.8" />
        <rect x="8"  y="16" width="10" height="2"   rx="1" fill="#839958" opacity="0.6" />
        <rect x="8"  y="20" width="14" height="2"   rx="1" fill="#105666" opacity="0.8" />
        {/* Blinking cursor */}
        <motion.rect x="22" y="20" width="3.5" height="2.5" rx="0.5" fill="#F7F4D5"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        {/* Monitor stand */}
        <rect x="22" y="36" width="8"  height="6"  rx="2" fill="#105666" />
        <rect x="16" y="42" width="20" height="4"  rx="2" fill="#0A3323" />
        {/* Power LED */}
        <motion.circle cx="44" cy="30" r="2" fill="#839958"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}

export function FloppyDisk({ size = 1, color = '#D3968C' }) {
  const s = size;
  return (
    <motion.div {...bob(0.6)} style={{ display: 'inline-block' }}>
      <svg width={40 * s} height={40 * s} viewBox="0 0 40 40">
        <rect x="1"  y="1"  width="38" height="38" rx="3" fill={color} />
        {/* Metal shutter */}
        <rect x="12" y="1"  width="16" height="14" rx="1" fill="#0A3323" />
        <rect x="15" y="2"  width="5"  height="12" rx="1" fill="#839958" opacity="0.35" />
        {/* Label */}
        <rect x="5"  y="18" width="30" height="17" rx="2" fill="#F7F4D5" />
        <rect x="7"  y="21" width="20" height="2.5" rx="1" fill="#0A3323" opacity="0.35" />
        <rect x="7"  y="26" width="15" height="2"   rx="1" fill="#0A3323" opacity="0.25" />
        <rect x="7"  y="30" width="10" height="2"   rx="1" fill={color} opacity="0.5" />
        {/* Write-protect */}
        <rect x="32" y="3"  width="5"  height="5"  rx="1" fill="#0A3323" />
      </svg>
    </motion.div>
  );
}

export function CodeBracket({ size = 1 }) {
  const s = size;
  return (
    <motion.div {...bob(1.2)} style={{ display: 'inline-block' }}>
      <svg width={52 * s} height={34 * s} viewBox="0 0 52 34">
        <rect width="52" height="34" rx="5" fill="#0A3323" />
        {/* Border glow */}
        <rect x="1"  y="1"  width="50" height="32" rx="4.5" fill="none" stroke="#839958" strokeWidth="1" opacity="0.4" />
        {/* < */}
        <path d="M8 10 L4 17 L8 24" stroke="#D3968C" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* / */}
        <line x1="24" y1="8" x2="18" y2="26" stroke="#F7F4D5" strokeWidth="2.2" strokeLinecap="round" />
        {/* > */}
        <path d="M28 10 L32 17 L28 24" stroke="#839958" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Stars decoration */}
        <circle cx="40" cy="10" r="1.5" fill="#D3968C" opacity="0.7" />
        <circle cx="44" cy="17" r="1.5" fill="#839958" opacity="0.7" />
        <circle cx="40" cy="24" r="1.5" fill="#D3968C" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

export function PixelHeart({ size = 1, color = '#D3968C' }) {
  const s = size;
  return (
    <motion.div {...bob(1.8)} style={{ display: 'inline-block' }}>
      <svg width={36 * s} height={34 * s} viewBox="0 0 36 34">
        <path
          d="M18 31 L4 17 Q1 12 4 7 Q7 2 12 3 Q16 4 18 8 Q20 4 24 3 Q29 2 32 7 Q35 12 32 17 Z"
          fill={color}
          stroke="#0A3323" strokeWidth="1.5"
        />
        {/* Highlight */}
        <ellipse cx="13" cy="10" rx="3.5" ry="3" fill="white" opacity="0.28" transform="rotate(-20 13 10)" />
        {/* Code symbol inside */}
        <path d="M12 18 L10 21 L12 24" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M20 18 L22 21 L20 24" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <line x1="16" y1="17" x2="14" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

export function WiFiGlobe({ size = 1 }) {
  const s = size;
  return (
    <motion.div {...bob(2.4)} style={{ display: 'inline-block' }}>
      <svg width={38 * s} height={38 * s} viewBox="0 0 38 38">
        <circle cx="19" cy="19" r="17" fill="#105666" stroke="#0A3323" strokeWidth="1.5" />
        {/* Globe grid lines */}
        <ellipse cx="19" cy="19" rx="10" ry="17" fill="none" stroke="#F7F4D5" strokeWidth="1" opacity="0.3" />
        <ellipse cx="19" cy="19" rx="17" ry="8"  fill="none" stroke="#F7F4D5" strokeWidth="1" opacity="0.3" />
        <line x1="2" y1="19" x2="36" y2="19" stroke="#F7F4D5" strokeWidth="1" opacity="0.3" />
        <line x1="19" y1="2" x2="19" y2="36" stroke="#F7F4D5" strokeWidth="1" opacity="0.3" />
        {/* WiFi arcs */}
        <path d="M12 22 Q19 14 26 22" stroke="#D3968C" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M15 26 Q19 22 23 26" stroke="#839958" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="19" cy="28" r="2.5" fill="#F7F4D5" />
      </svg>
    </motion.div>
  );
}
