import { motion } from 'framer-motion';

// ── Anime Girl Head — Cute & friendly redesign ───────────────────────────────
export function AnimeGirl({ width = 150, height = 178 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Bright sky-blue iris — friendly, not spooky */}
        <radialGradient id="ag2-iris" cx="35%" cy="28%" r="70%">
          <stop offset="0%"   stopColor="#B8ECFF" />
          <stop offset="40%"  stopColor="#50BFEE" />
          <stop offset="100%" stopColor="#1878B4" />
        </radialGradient>
        <radialGradient id="ag2-skin" cx="48%" cy="32%" r="58%">
          <stop offset="0%"   stopColor="#FFF0DC" />
          <stop offset="100%" stopColor="#FFD5A8" />
        </radialGradient>
        <radialGradient id="ag2-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFB8B0" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFB8B0" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="ag2-hair" cx="40%" cy="18%" r="55%">
          <stop offset="0%"   stopColor="#7a3820" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3a1408" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* ── Back hair ── */}
      <ellipse cx="100" cy="106" rx="76" ry="88" fill="#3a1408" />
      <ellipse cx="100" cy="76"  rx="58" ry="52" fill="url(#ag2-hair)" />

      {/* ── Neck ── */}
      <rect x="88" y="182" width="24" height="24" rx="7" fill="url(#ag2-skin)" />

      {/* ── Cute outfit ── */}
      <path d="M55 205 Q73 194 100 198 Q127 194 145 205 Q133 228 100 232 Q67 228 55 205Z" fill="#D3968C" />
      <path d="M55 205 Q73 194 100 198 Q127 194 145 205 Q133 212 100 214 Q67 212 55 205Z" fill="#C4806E" />
      {/* Collar */}
      <path d="M91 198 L100 214 L109 198 Q100 196 91 198Z" fill="#F7F4D5" opacity="0.4" />
      {/* Bow on outfit */}
      <path d="M89 200 Q100 195 111 200 Q105 204 100 205 Q95 204 89 200Z" fill="#839958" />

      {/* ── Face — round & soft ── */}
      <ellipse cx="100" cy="126" rx="66" ry="72" fill="url(#ag2-skin)" />

      {/* ── Ears ── */}
      <ellipse cx="35"  cy="126" rx="10" ry="13" fill="#FFD5A8" />
      <ellipse cx="35"  cy="126" rx="5.5" ry="8" fill="#F2C090" />
      <ellipse cx="165" cy="126" rx="10" ry="13" fill="#FFD5A8" />
      <ellipse cx="165" cy="126" rx="5.5" ry="8" fill="#F2C090" />

      {/* Tiny star earrings */}
      <g transform="translate(22,120)">
        <path d="M0,-5.5 L1.2,-1.2 L5.5,0 L1.2,1.2 L0,5.5 L-1.2,1.2 L-5.5,0 L-1.2,-1.2 Z" fill="#D3968C" />
      </g>
      <g transform="translate(178,120)">
        <path d="M0,-5.5 L1.2,-1.2 L5.5,0 L1.2,1.2 L0,5.5 L-1.2,1.2 L-5.5,0 L-1.2,-1.2 Z" fill="#D3968C" />
      </g>

      {/* ── Front bangs — softer shape ── */}
      <path d="M28 100 Q38 34 100 26 Q162 34 172 100 Q150 60 100 66 Q50 60 28 100Z" fill="#3a1408" />
      <path d="M52 50 Q76 38 100 44 Q124 38 148 50 Q138 38 100 35 Q62 38 52 50Z" fill="#6a2e12" opacity="0.4" />
      {/* Little wispy ends on bangs for softness */}
      <path d="M28 100 Q22 84 26 72 Q30 80 28 100Z" fill="#3a1408" />
      <path d="M172 100 Q178 84 174 72 Q170 80 172 100Z" fill="#3a1408" />

      {/* Side locks */}
      <path d="M28 100 Q12 150 18 198 Q36 186 42 155 Q36 126 28 100Z" fill="#3a1408" />
      <path d="M172 100 Q188 150 182 198 Q164 186 158 155 Q164 126 172 100Z" fill="#3a1408" />

      {/* ══════ LEFT EYE — large, bright, sparkly ══════ */}
      {/* Sclera — big white area, very visible */}
      <ellipse cx="70" cy="118" rx="22" ry="26" fill="white" />
      {/* Soft upper-lid tint */}
      <ellipse cx="70" cy="110" rx="22" ry="14" fill="#d8f4ff" opacity="0.35" />
      {/* Iris — bright blue */}
      <ellipse cx="70" cy="121" rx="17" ry="20" fill="url(#ag2-iris)" />
      {/* Pupil — SMALL so iris stays bright */}
      <ellipse cx="70" cy="122" rx="6"  ry="8"  fill="#0a1a30" />
      {/* Big main star highlight top-left */}
      <ellipse cx="61" cy="111" rx="6"  ry="7.5" fill="white" opacity="0.98" />
      {/* Secondary highlight */}
      <circle  cx="79" cy="115" r="3.8"           fill="white" opacity="0.82" />
      {/* Tiny sparkle dot */}
      <circle  cx="74" cy="127" r="2"             fill="white" opacity="0.55" />
      {/* Star sparkle in iris */}
      <g transform="translate(63,118) scale(0.9)">
        <path d="M0,-3.5 L0.8,-0.8 L3.5,0 L0.8,0.8 L0,3.5 L-0.8,0.8 L-3.5,0 L-0.8,-0.8 Z"
          fill="white" opacity="0.55" />
      </g>
      {/* Upper lash — delicate, not heavy */}
      <path d="M49 111 Q70 100 91 111 Q83 102 70 101 Q57 102 49 111Z" fill="#2a1008" />
      {/* Fine lashes */}
      <line x1="53" y1="110" x2="50"  y2="102" stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="61" y1="105" x2="60"  y2="97"  stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="70" y1="103" x2="70"  y2="95"  stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="79" y1="105" x2="81"  y2="97"  stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="87" y1="110" x2="90"  y2="102" stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      {/* Lower lash — very subtle */}
      <path d="M51 133 Q70 138 89 133" stroke="#2a1008" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* ══════ RIGHT EYE ══════ */}
      <ellipse cx="130" cy="118" rx="22" ry="26" fill="white" />
      <ellipse cx="130" cy="110" rx="22" ry="14" fill="#d8f4ff" opacity="0.35" />
      <ellipse cx="130" cy="121" rx="17" ry="20" fill="url(#ag2-iris)" />
      <ellipse cx="130" cy="122" rx="6"  ry="8"  fill="#0a1a30" />
      <ellipse cx="121" cy="111" rx="6"  ry="7.5" fill="white" opacity="0.98" />
      <circle  cx="139" cy="115" r="3.8"           fill="white" opacity="0.82" />
      <circle  cx="134" cy="127" r="2"             fill="white" opacity="0.55" />
      <g transform="translate(123,118) scale(0.9)">
        <path d="M0,-3.5 L0.8,-0.8 L3.5,0 L0.8,0.8 L0,3.5 L-0.8,0.8 L-3.5,0 L-0.8,-0.8 Z"
          fill="white" opacity="0.55" />
      </g>
      <path d="M109 111 Q130 100 151 111 Q143 102 130 101 Q117 102 109 111Z" fill="#2a1008" />
      <line x1="113" y1="110" x2="110" y2="102" stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="121" y1="105" x2="120" y2="97"  stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="130" y1="103" x2="130" y2="95"  stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="139" y1="105" x2="141" y2="97"  stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="147" y1="110" x2="150" y2="102" stroke="#2a1008" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M111 133 Q130 138 149 133" stroke="#2a1008" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* ── Eyebrows — soft & friendly arch ── */}
      <path d="M52 100 Q68 89 88 96"  stroke="#3a1408" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M112 96 Q132 89 148 100" stroke="#3a1408" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* ── Nose — tiny & cute ── */}
      <path d="M96 144 Q100 150 104 144" stroke="#E8A070" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ── Mouth — wide happy smile ── */}
      {/* Main smile arc */}
      <path d="M80 160 Q100 178 120 160" stroke="#D05060" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      {/* Lip fill with happy curve */}
      <path d="M82 161 Q100 175 118 161 Q110 165 100 166 Q90 165 82 161Z" fill="#E87878" opacity="0.55" />
      {/* Tiny teeth peek */}
      <path d="M86 161 Q100 164 114 161 Q110 162 100 163 Q90 162 86 161Z" fill="white" opacity="0.7" />
      {/* Lip highlight */}
      <ellipse cx="100" cy="170" rx="9" ry="2.8" fill="white" opacity="0.22" />
      {/* Happy cheek lift lines */}
      <path d="M75 158 Q79 155 82 158" stroke="#E8A070" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M118 158 Q121 155 125 158" stroke="#E8A070" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* ── Blush — big, soft, rosy ── */}
      <ellipse cx="44"  cy="138" rx="24" ry="13" fill="url(#ag2-blush)" />
      <ellipse cx="156" cy="138" rx="24" ry="13" fill="url(#ag2-blush)" />
      {/* Extra blush texture dots */}
      <circle cx="36"  cy="136" r="3"   fill="#FFB8B0" opacity="0.35" />
      <circle cx="50"  cy="143" r="2.2" fill="#FFB8B0" opacity="0.28" />
      <circle cx="164" cy="136" r="3"   fill="#FFB8B0" opacity="0.35" />
      <circle cx="150" cy="143" r="2.2" fill="#FFB8B0" opacity="0.28" />

      {/* ── Big fluffy bow ── */}
      <path d="M36 52 Q55 32 72 49 Q55 60 36 52Z"  fill="#D3968C" />
      <path d="M72 49 Q89 32 72 49 Q55 60 72 66Z"  fill="#C07868" />
      {/* Bow shine */}
      <ellipse cx="52" cy="44" rx="9" ry="4.5" fill="white" opacity="0.2" transform="rotate(-20 52 44)" />
      {/* Bow center */}
      <circle cx="72" cy="53" r="10"  fill="#839958" />
      <circle cx="72" cy="53" r="6.5" fill="#F7F4D5" />
      <circle cx="72" cy="53" r="3.8" fill="#D3968C" />
      <circle cx="71" cy="51" r="1.2" fill="white" opacity="0.6" />

      {/* ── Hair clip ── */}
      <rect x="118" y="58" width="20" height="10" rx="4"   fill="#105666" />
      <rect x="120" y="60" width="16" height="6"  rx="2.5" fill="#839958" />
      <circle cx="128" cy="63" r="2" fill="#F7F4D5" opacity="0.65" />

      {/* ── Little sparkles in hair ── */}
      <g transform="translate(26,36) scale(0.7)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#D3968C" opacity="0.88" />
      </g>
      <g transform="translate(162,42) scale(0.55)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#839958" opacity="0.88" />
      </g>
      <g transform="translate(136,28) scale(0.44)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#B8ECFF" opacity="0.82" />
      </g>
      <g transform="translate(52,26) scale(0.36)">
        <path d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z" fill="#FFD5A8" opacity="0.75" />
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
