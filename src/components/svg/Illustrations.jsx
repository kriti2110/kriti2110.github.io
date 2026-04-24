import { motion } from 'framer-motion';

// ── Realistic Portrait Girl ───────────────────────────────────────────────────
export function AnimeGirl({ width = 150, height = 178 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rp-skin" cx="45%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#FDDBB4" />
          <stop offset="60%"  stopColor="#F5C896" />
          <stop offset="100%" stopColor="#E8A96E" />
        </radialGradient>
        <radialGradient id="rp-skin-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#E8A96E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E8A96E" stopOpacity="0"   />
        </radialGradient>
        <radialGradient id="rp-hair" cx="35%" cy="15%" r="70%">
          <stop offset="0%"   stopColor="#4a2808" />
          <stop offset="100%" stopColor="#1a0800" />
        </radialGradient>
        <radialGradient id="rp-iris" cx="38%" cy="32%" r="65%">
          <stop offset="0%"   stopColor="#8B6B3A" />
          <stop offset="55%"  stopColor="#5C3D18" />
          <stop offset="100%" stopColor="#2a1a08" />
        </radialGradient>
        <linearGradient id="rp-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2d1654" />
          <stop offset="100%" stopColor="#1a0e32" />
        </linearGradient>
        <filter id="rp-soft">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      {/* ── Shoulders / top ── */}
      <path d="M0 240 L0 200 Q30 188 60 192 Q80 196 100 198 Q120 196 140 192 Q170 188 200 200 L200 240 Z"
            fill="url(#rp-top)" />
      {/* Neckline */}
      <path d="M78 196 Q100 188 122 196 Q112 192 100 190 Q88 192 78 196Z" fill="#3d2070" opacity="0.6" />

      {/* ── Neck ── */}
      <path d="M88 180 Q88 200 100 202 Q112 200 112 180 Q106 188 100 189 Q94 188 88 180Z"
            fill="url(#rp-skin)" />

      {/* ── Back hair volume ── */}
      <ellipse cx="100" cy="95" rx="72" ry="82" fill="#1a0800" />
      {/* Hair flow down sides */}
      <path d="M28 90 Q10 140 16 200 Q30 185 38 150 Q40 120 32 90Z" fill="#1a0800" />
      <path d="M172 90 Q190 140 184 200 Q170 185 162 150 Q160 120 168 90Z" fill="#1a0800" />
      {/* Hair highlight streaks */}
      <path d="M72 22 Q66 50 64 80 Q68 55 74 28Z" fill="#6b3c14" opacity="0.5" />
      <path d="M100 18 Q96 48 96 75 Q100 48 104 22Z" fill="#6b3c14" opacity="0.4" />
      <path d="M128 22 Q134 50 136 80 Q132 55 126 28Z" fill="#6b3c14" opacity="0.4" />

      {/* ── Face ── */}
      <ellipse cx="100" cy="118" rx="60" ry="70" fill="url(#rp-skin)" />

      {/* ── Ears ── */}
      <ellipse cx="40"  cy="118" rx="9" ry="12" fill="#F5C896" />
      <ellipse cx="40"  cy="118" rx="5" ry="7"  fill="#E8A96E" />
      <ellipse cx="160" cy="118" rx="9" ry="12" fill="#F5C896" />
      <ellipse cx="160" cy="118" rx="5" ry="7"  fill="#E8A96E" />

      {/* Small stud earrings */}
      <circle cx="34"  cy="116" r="3.5" fill="#c8a96a" />
      <circle cx="34"  cy="116" r="2"   fill="#f0d090" />
      <circle cx="166" cy="116" r="3.5" fill="#c8a96a" />
      <circle cx="166" cy="116" r="2"   fill="#f0d090" />

      {/* ── Front hair — natural part & fringe ── */}
      <path d="M40 82 Q46 28 100 20 Q154 28 160 82 Q140 50 100 54 Q60 50 40 82Z"
            fill="url(#rp-hair)" />
      {/* Subtle hair part highlight */}
      <path d="M98 20 Q100 36 102 56 Q100 38 98 24Z" fill="#7a4820" opacity="0.35" />
      {/* Wispy side strands */}
      <path d="M40 82 Q34 68 36 56 Q38 66 40 78Z" fill="#1a0800" />
      <path d="M160 82 Q166 68 164 56 Q162 66 160 78Z" fill="#1a0800" />

      {/* ── Face shadow / contour ── */}
      <ellipse cx="72"  cy="148" rx="18" ry="10" fill="url(#rp-skin-shadow)" opacity="0.3" />
      <ellipse cx="128" cy="148" rx="18" ry="10" fill="url(#rp-skin-shadow)" opacity="0.3" />
      {/* Subtle jaw shadow */}
      <path d="M55 148 Q100 170 145 148 Q130 162 100 165 Q70 162 55 148Z"
            fill="#D4924A" opacity="0.12" />

      {/* ══════ LEFT EYE — almond, realistic ══════ */}
      {/* Eye socket subtle shadow */}
      <ellipse cx="74" cy="108" rx="18" ry="10" fill="#C8885A" opacity="0.18" filter="url(#rp-soft)" />
      {/* Sclera */}
      <path d="M56 107 Q74 98 92 107 Q84 116 74 117 Q64 116 56 107Z" fill="#F8F5F0" />
      {/* Iris */}
      <ellipse cx="74" cy="108" rx="10" ry="11" fill="url(#rp-iris)" />
      {/* Pupil */}
      <ellipse cx="74" cy="108" rx="5"  ry="6"  fill="#120800" />
      {/* Catchlight */}
      <ellipse cx="69" cy="103" rx="3"  ry="3.5" fill="white" opacity="0.92" />
      <circle  cx="79" cy="106" r="1.5"           fill="white" opacity="0.5"  />
      {/* Upper eyelid crease */}
      <path d="M58 104 Q74 96 90 104" stroke="#c87844" strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Upper lash line */}
      <path d="M57 107 Q74 98 91 107 Q84 101 74 100 Q64 101 57 107Z" fill="#1a0800" />
      {/* Lashes */}
      <line x1="60"  y1="106" x2="57"  y2="99"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="67"  y1="102" x2="66"  y2="95"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="74"  y1="100" x2="74"  y2="94"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="81"  y1="102" x2="83"  y2="95"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="88"  y1="106" x2="91"  y2="100" stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      {/* Lower lash line subtle */}
      <path d="M58 108 Q74 116 90 108" stroke="#1a0800" strokeWidth="0.8" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* ══════ RIGHT EYE ══════ */}
      <ellipse cx="126" cy="108" rx="18" ry="10" fill="#C8885A" opacity="0.18" filter="url(#rp-soft)" />
      <path d="M108 107 Q126 98 144 107 Q136 116 126 117 Q116 116 108 107Z" fill="#F8F5F0" />
      <ellipse cx="126" cy="108" rx="10" ry="11" fill="url(#rp-iris)" />
      <ellipse cx="126" cy="108" rx="5"  ry="6"  fill="#120800" />
      <ellipse cx="121" cy="103" rx="3"  ry="3.5" fill="white" opacity="0.92" />
      <circle  cx="131" cy="106" r="1.5"           fill="white" opacity="0.5"  />
      <path d="M110 104 Q126 96 142 104" stroke="#c87844" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M109 107 Q126 98 143 107 Q136 101 126 100 Q116 101 109 107Z" fill="#1a0800" />
      <line x1="112" y1="106" x2="109" y2="99"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="119" y1="102" x2="118" y2="95"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="126" y1="100" x2="126" y2="94"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="133" y1="102" x2="135" y2="95"  stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="140" y1="106" x2="143" y2="100" stroke="#1a0800" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M110 108 Q126 116 142 108" stroke="#1a0800" strokeWidth="0.8" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* ── Eyebrows — natural, defined arch ── */}
      <path d="M56 94 Q68 86 90 90"  stroke="#2a1408" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M56 94 Q68 87 90 91"  stroke="#2a1408" strokeWidth="1"   fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M110 90 Q132 86 144 94" stroke="#2a1408" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M110 91 Q132 87 144 94" stroke="#2a1408" strokeWidth="1"   fill="none" strokeLinecap="round" opacity="0.4" />

      {/* ── Nose — elegant, understated ── */}
      {/* Bridge shadow */}
      <path d="M96 112 Q94 128 92 138" stroke="#D4924A" strokeWidth="1" fill="none" opacity="0.25" strokeLinecap="round" />
      <path d="M104 112 Q106 128 108 138" stroke="#D4924A" strokeWidth="1" fill="none" opacity="0.25" strokeLinecap="round" />
      {/* Nostril hints */}
      <path d="M90 140 Q94 145 100 144 Q106 145 110 140" stroke="#C8825A" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Nose tip highlight */}
      <ellipse cx="100" cy="140" rx="5" ry="3" fill="white" opacity="0.14" />

      {/* ── Lips — full, natural shape ── */}
      {/* Upper lip */}
      <path d="M80 158 Q90 153 100 156 Q110 153 120 158 Q112 155 100 155 Q88 155 80 158Z"
            fill="#C4706A" />
      {/* Cupid's bow */}
      <path d="M80 158 Q90 154 95 157 Q100 154 105 157 Q110 154 120 158 Q110 161 100 162 Q90 161 80 158Z"
            fill="#D4807A" />
      {/* Lower lip */}
      <path d="M80 158 Q100 172 120 158 Q110 167 100 169 Q90 167 80 158Z"
            fill="#D4807A" />
      {/* Lower lip highlight */}
      <ellipse cx="100" cy="165" rx="10" ry="3.5" fill="white" opacity="0.22" />
      {/* Lip line */}
      <path d="M80 158 Q100 160 120 158" stroke="#B85850" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* ── Subtle smile lines ── */}
      <path d="M76 162 Q78 166 80 168" stroke="#D4924A" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" />
      <path d="M124 162 Q122 166 120 168" stroke="#D4924A" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" />

      {/* ── Subtle cheek warmth ── */}
      <ellipse cx="52"  cy="132" rx="20" ry="10" fill="#E8806A" opacity="0.10" filter="url(#rp-soft)" />
      <ellipse cx="148" cy="132" rx="20" ry="10" fill="#E8806A" opacity="0.10" filter="url(#rp-soft)" />
    </svg>
  );
}

// ── Potted Plant ──────────────────────────────────────────────────────────────
export function PottedPlant({ width = 90, height = 120 }) {
  return (
    <motion.svg
      width={width} height={height} viewBox="0 0 110 148"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pot body */}
      <path d="M28 104 L36 144 L74 144 L82 104 Z" fill="#D3968C" />
      <rect x="20" y="96" width="70" height="12" rx="5" fill="#C4806E" />
      {/* Soil */}
      <ellipse cx="55" cy="104" rx="32" ry="8" fill="#3a2416" />
      {/* Main stem */}
      <line x1="55" y1="104" x2="55" y2="48" stroke="#839958" strokeWidth="3.5" />
      {/* Large left leaf */}
      <path d="M55 78 Q20 56 10 28 Q36 44 55 70Z" fill="#839958" />
      {/* Large right leaf */}
      <path d="M55 78 Q90 56 100 28 Q74 44 55 70Z" fill="#0A3323" />
      {/* Mid left leaf */}
      <path d="M55 60 Q28 42 22 18 Q44 34 55 56Z" fill="#839958" opacity="0.85" />
      {/* Mid right leaf */}
      <path d="M55 60 Q82 42 88 18 Q66 34 55 56Z" fill="#105666" />
      {/* Top leaf */}
      <path d="M55 48 Q50 26 53 10 Q57 26 55 44Z" fill="#839958" />
      {/* Flower / berry */}
      <circle cx="55" cy="9"  r="7"   fill="#D3968C" />
      <circle cx="55" cy="9"  r="4"   fill="#FFCBA4" />
      <circle cx="52" cy="6"  r="1.2" fill="white" opacity="0.7" />
    </motion.svg>
  );
}

// ── Floating 4-pointed Star ───────────────────────────────────────────────────
export function FloatingStar({ size = 22, color = '#D3968C', delay = 0, className = '' }) {
  return (
    <motion.svg
      className={className}
      width={size} height={size} viewBox="-12 -12 24 24"
      animate={{ rotate: [0, 360], scale: [1, 1.15, 1], y: [0, -5, 0] }}
      transition={{
        rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
        scale:  { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay },
        y:      { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    >
      <path d="M0,-10 L2.2,-2.2 L10,0 L2.2,2.2 L0,10 L-2.2,2.2 L-10,0 L-2.2,-2.2 Z" fill={color} />
    </motion.svg>
  );
}

// ── Cute Cloud ────────────────────────────────────────────────────────────────
export function Cloud({ width = 110, height = 62, opacity = 0.88, delay = 0 }) {
  return (
    <motion.svg
      width={width} height={height} viewBox="0 0 130 72"
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <circle cx="30" cy="46" r="22" fill="white" opacity={opacity} />
      <circle cx="55" cy="34" r="28" fill="white" opacity={opacity} />
      <circle cx="82" cy="40" r="22" fill="white" opacity={opacity} />
      <circle cx="100" cy="50" r="16" fill="white" opacity={opacity} />
      <circle cx="14"  cy="52" r="14" fill="white" opacity={opacity} />
      <rect x="14" y="50" width="96" height="22" fill="white" opacity={opacity} rx="2" />
      {/* subtle shadow underline */}
      <rect x="18" y="70" width="90" height="3" rx="2" fill="rgba(131,153,88,0.18)" />
    </motion.svg>
  );
}

// ── Desktop decorative stars cluster ─────────────────────────────────────────
export function StarCluster() {
  const stars = [
    { x: 0,   y: 0,   s: 18, c: '#D3968C', d: 0 },
    { x: 28,  y: 12,  s: 12, c: '#839958', d: 0.4 },
    { x: -18, y: 22,  s: 14, c: '#105666', d: 0.8 },
    { x: 10,  y: -20, s: 10, c: '#D3968C', d: 1.2 },
  ];
  return (
    <div className="relative" style={{ width: 60, height: 60 }}>
      {stars.map((st, i) => (
        <div key={i} className="absolute" style={{ left: st.x + 20, top: st.y + 20 }}>
          <FloatingStar size={st.s} color={st.c} delay={st.d} />
        </div>
      ))}
    </div>
  );
}
