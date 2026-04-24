import { motion } from 'framer-motion';

// ── Anime Girl Head — Beautiful redesign ─────────────────────────────────────
export function AnimeGirl({ width = 150, height = 178 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 238" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ag-iris" cx="38%" cy="32%" r="65%">
          <stop offset="0%"   stopColor="#D09AE8" />
          <stop offset="45%"  stopColor="#9260C8" />
          <stop offset="100%" stopColor="#3a1060" />
        </radialGradient>
        <radialGradient id="ag-skin" cx="50%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#FFE8CE" />
          <stop offset="100%" stopColor="#FFCBA4" />
        </radialGradient>
        <radialGradient id="ag-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFAAA0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFAAA0" stopOpacity="0"   />
        </radialGradient>
        <radialGradient id="ag-hair-hi" cx="38%" cy="20%" r="55%">
          <stop offset="0%"   stopColor="#5a2818" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2C1008" stopOpacity="0"    />
        </radialGradient>
      </defs>

      {/* ── Back hair ── */}
      <ellipse cx="100" cy="108" rx="74" ry="86" fill="#2C1008" />
      {/* hair sheen */}
      <ellipse cx="100" cy="78"  rx="56" ry="50" fill="url(#ag-hair-hi)" />

      {/* ── Neck ── */}
      <rect x="88" y="183" width="24" height="26" rx="7" fill="url(#ag-skin)" />

      {/* ── Clothing ── */}
      <path d="M56 207 Q74 196 100 200 Q126 196 144 207 Q132 230 100 234 Q68 230 56 207Z" fill="#839958" />
      <path d="M56 207 Q74 196 100 200 Q126 196 144 207 Q132 214 100 215 Q68 214 56 207Z" fill="#105666" />
      {/* V-collar */}
      <path d="M90 200 L100 218 L110 200 Q100 197 90 200Z" fill="#F7F4D5" opacity="0.35" />

      {/* ── Face ── */}
      <ellipse cx="100" cy="128" rx="65" ry="74" fill="url(#ag-skin)" />

      {/* ── Ears ── */}
      <ellipse cx="36"  cy="128" rx="10" ry="14" fill="#FFCBA4" />
      <ellipse cx="36"  cy="128" rx="5.5" ry="8.5" fill="#F0B090" />
      <ellipse cx="164" cy="128" rx="10" ry="14" fill="#FFCBA4" />
      <ellipse cx="164" cy="128" rx="5.5" ry="8.5" fill="#F0B090" />

      {/* Star earrings */}
      <g transform="translate(23,122)">
        <path d="M0,-6 L1.4,-1.4 L6,0 L1.4,1.4 L0,6 L-1.4,1.4 L-6,0 L-1.4,-1.4 Z" fill="#D3968C" />
        <circle cx="0" cy="0" r="2" fill="#F7F4D5" />
      </g>
      <g transform="translate(177,122)">
        <path d="M0,-6 L1.4,-1.4 L6,0 L1.4,1.4 L0,6 L-1.4,1.4 L-6,0 L-1.4,-1.4 Z" fill="#D3968C" />
        <circle cx="0" cy="0" r="2" fill="#F7F4D5" />
      </g>

      {/* ── Front bangs ── */}
      <path d="M27 102 Q37 36 100 28 Q163 36 173 102 Q148 62 100 68 Q52 62 27 102Z" fill="#2C1008" />
      {/* bang sheen */}
      <path d="M50 52 Q78 40 100 46 Q122 40 150 52 Q140 40 100 37 Q60 40 50 52Z" fill="#4a2015" opacity="0.38" />

      {/* ── Side locks ── */}
      <path d="M27 102 Q10 154 16 202 Q35 190 40 158 Q34 128 27 102Z" fill="#2C1008" />
      <path d="M173 102 Q190 154 184 202 Q165 190 160 158 Q166 128 173 102Z" fill="#2C1008" />

      {/* ────── LEFT EYE ────── */}
      {/* Sclera */}
      <ellipse cx="71"  cy="121" rx="21" ry="25" fill="white" />
      {/* Upper lid shadow */}
      <ellipse cx="71"  cy="114" rx="21" ry="15" fill="#ece4f8" opacity="0.45" />
      {/* Iris */}
      <ellipse cx="71"  cy="124" rx="17" ry="21" fill="url(#ag-iris)" />
      {/* Pupil */}
      <ellipse cx="71"  cy="126" rx="9.5" ry="13" fill="#12002a" />
      {/* Main highlight */}
      <ellipse cx="62"  cy="114" rx="6"   ry="7.5" fill="white" opacity="0.96" />
      {/* Secondary highlight */}
      <circle  cx="80"  cy="119" r="3.5"            fill="white" opacity="0.78" />
      {/* Glint */}
      <circle  cx="77"  cy="130" r="2"              fill="white" opacity="0.42" />
      {/* Upper lash mass */}
      <path d="M50 113 Q71 101 92 113 Q84 103 71 102 Q58 103 50 113Z" fill="#12002a" />
      {/* Individual lashes */}
      <line x1="54" y1="112" x2="50"  y2="104" stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="62" y1="107" x2="60"  y2="99"  stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="71" y1="105" x2="71"  y2="97"  stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="80" y1="107" x2="82"  y2="99"  stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="88" y1="112" x2="92"  y2="104" stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      {/* Lower lash line */}
      <path d="M52 136 Q71 142 90 136" stroke="#12002a" strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* ────── RIGHT EYE ────── */}
      <ellipse cx="129" cy="121" rx="21" ry="25" fill="white" />
      <ellipse cx="129" cy="114" rx="21" ry="15" fill="#ece4f8" opacity="0.45" />
      <ellipse cx="129" cy="124" rx="17" ry="21" fill="url(#ag-iris)" />
      <ellipse cx="129" cy="126" rx="9.5" ry="13" fill="#12002a" />
      <ellipse cx="120" cy="114" rx="6"   ry="7.5" fill="white" opacity="0.96" />
      <circle  cx="138" cy="119" r="3.5"            fill="white" opacity="0.78" />
      <circle  cx="135" cy="130" r="2"              fill="white" opacity="0.42" />
      <path d="M108 113 Q129 101 150 113 Q142 103 129 102 Q116 103 108 113Z" fill="#12002a" />
      <line x1="112" y1="112" x2="108" y2="104" stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="120" y1="107" x2="118" y2="99"  stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="129" y1="105" x2="129" y2="97"  stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="138" y1="107" x2="140" y2="99"  stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="146" y1="112" x2="150" y2="104" stroke="#12002a" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M110 136 Q129 142 148 136" stroke="#12002a" strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* ── Eyebrows (thin, arched) ── */}
      <path d="M54 102 Q70 91 90 98"  stroke="#2C1008" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M110 98 Q130 91 146 102" stroke="#2C1008" strokeWidth="3.2" fill="none" strokeLinecap="round" />

      {/* ── Nose ── */}
      <path d="M96 149 Q100 156 104 149" stroke="#E8A880" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="96"  cy="149" r="2.2" fill="#E8A880" opacity="0.5" />
      <circle cx="104" cy="149" r="2.2" fill="#E8A880" opacity="0.5" />

      {/* ── Mouth ── */}
      <path d="M82 164 Q91 158 100 160 Q109 158 118 164" stroke="#C85050" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M82 164 Q100 180 118 164" stroke="#C85050" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M84 165 Q100 176 116 165 Q108 162 100 163 Q92 162 84 165Z" fill="#E88080" opacity="0.5" />
      <ellipse cx="100" cy="173" rx="8" ry="3" fill="white" opacity="0.25" />

      {/* ── Blush ── */}
      <ellipse cx="46"  cy="140" rx="21" ry="12" fill="url(#ag-blush)" />
      <ellipse cx="154" cy="140" rx="21" ry="12" fill="url(#ag-blush)" />
      <circle cx="40"  cy="138" r="2.8" fill="#FFAAA0" opacity="0.38" />
      <circle cx="53"  cy="145" r="2"   fill="#FFAAA0" opacity="0.28" />
      <circle cx="160" cy="138" r="2.8" fill="#FFAAA0" opacity="0.38" />
      <circle cx="147" cy="145" r="2"   fill="#FFAAA0" opacity="0.28" />

      {/* ── Big cute bow ── */}
      <path d="M40 53 Q57 34 74 50 Q57 61 40 53Z"  fill="#D3968C" />
      <path d="M74 50 Q91 34 74 50 Q57 61 74 67Z"  fill="#C4806E" />
      {/* Bow sheen */}
      <ellipse cx="55" cy="46" rx="8" ry="4" fill="white" opacity="0.18" transform="rotate(-22 55 46)" />
      {/* Bow knot */}
      <circle cx="74" cy="54" r="9.5" fill="#839958" />
      <circle cx="74" cy="54" r="6"   fill="#F7F4D5" />
      <circle cx="74" cy="54" r="3.5" fill="#D3968C" />

      {/* ── Hair clip ── */}
      <rect x="118" y="60" width="20" height="10" rx="4" fill="#105666" />
      <rect x="120" y="62" width="16" height="6"  rx="2.5" fill="#839958" />
      <circle cx="128" cy="65" r="2" fill="#F7F4D5" opacity="0.6" />

      {/* ── Hair sparkles ── */}
      <g transform="translate(27,38) scale(0.72)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#D3968C" opacity="0.9" />
      </g>
      <g transform="translate(163,44) scale(0.58)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#839958" opacity="0.9" />
      </g>
      <g transform="translate(136,30) scale(0.45)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#F7C1B5" opacity="0.85" />
      </g>
      <g transform="translate(50,28) scale(0.38)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#C9B8FF" opacity="0.8" />
      </g>
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
