// All tool/software icons as inline SVGs — no external images

export function PythonIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="py1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#5A9FD4" />
          <stop offset="100%" stopColor="#3776AB" />
        </linearGradient>
        <linearGradient id="py2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#FFD43B" />
          <stop offset="100%" stopColor="#FFE873" />
        </linearGradient>
      </defs>
      <path d="M24 4C15 4 16 8 16 8V16H24V18H10S4 17 4 26 9 34 9 34H14V29S13.5 24 19 24H29S34 24.2 34 20V9S35 4 24 4Z" fill="url(#py1)" />
      <circle cx="19" cy="10" r="2.2" fill="white" opacity="0.85" />
      <path d="M24 44C33 44 32 40 32 40V32H24V30H38S44 31 44 22 39 14 39 14H34V19S34.5 24 29 24H19S14 23.8 14 28V39S13 44 24 44Z" fill="url(#py2)" />
      <circle cx="29" cy="38" r="2.2" fill="#3776AB" opacity="0.85" />
    </svg>
  );
}

export function FigmaIcon({ size = 36 }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
      {/* Top-left red */}
      <path d="M19 0H9.5A9.5 9.5 0 0 0 9.5 19H19Z" fill="#FF7262" />
      {/* Top-right purple */}
      <path d="M19 0H28.5A9.5 9.5 0 0 1 28.5 19H19Z" fill="#A259FF" />
      {/* Middle-left purple */}
      <path d="M9.5 19H19V28.5A9.5 9.5 0 0 1 0 28.5 9.5 9.5 0 0 1 9.5 19Z" fill="#A259FF" />
      {/* Middle-right blue */}
      <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE" />
      {/* Bottom-left green */}
      <path d="M9.5 38H19V47.5A9.5 9.5 0 0 1 0 47.5 9.5 9.5 0 0 1 9.5 38Z" fill="#0ACF83" />
    </svg>
  );
}

export function ExcelIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="5" fill="#217346" />
      {/* X mark */}
      <text x="5" y="32" fontFamily="Arial Black, Arial" fontSize="26" fontWeight="900" fill="white">X</text>
      {/* Spreadsheet lines */}
      {[10, 17, 24, 30].map((y, i) => (
        <rect key={i} x="23" y={y} width="16" height="2.5" rx="1" fill="rgba(255,255,255,0.55)" />
      ))}
      <rect x="23" y="8" width="7" height="26" fill="rgba(255,255,255,0.1)" rx="1" />
    </svg>
  );
}

export function GitHubIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="22" fill="#24292e" />
      <path
        d="M22 8C14.3 8 8 14.3 8 22c0 6.2 4 11.4 9.6 13.2.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.3-.9.1-.9.1-.9 1.4.1 2.1 1.4 2.1 1.4 1.3 2.1 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.8-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.1-.4 3.7 1.4 1.1-.3 2.2-.4 3.3-.4s2.2.1 3.3.4c2.5-1.7 3.7-1.4 3.7-1.4.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4.9 1.3.9 2.6v3.8c0 .4.3.8 1 .7C32 33.4 36 28.2 36 22c0-7.7-6.3-14-14-14Z"
        fill="white"
      />
    </svg>
  );
}

export function FlaskIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="5" fill="#105666" />
      {/* Flask shape */}
      <rect x="18" y="8" width="8" height="12" rx="2" fill="white" opacity="0.9" />
      <path d="M14 20 L14 28 Q14 36 22 36 Q30 36 30 28 L30 20 Z" fill="white" opacity="0.85" />
      <path d="M14 26 Q18 30 22 28 Q26 26 30 28 L30 20 H14Z" fill="#0a3240" opacity="0.3" />
      {/* Bubbles */}
      <circle cx="19" cy="30" r="2"   fill="#4CAF50" opacity="0.8" />
      <circle cx="25" cy="33" r="1.5" fill="#81C784" opacity="0.7" />
    </svg>
  );
}

export function GCPIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="5" fill="#F7F4D5" />
      {/* G-cloud shape simplified */}
      <path d="M22 10C16 10 11 14.5 11 20.5V22C8 22 6 24 6 27S8 32 11 32H33C36 32 38 30 38 27S36 22 33 22V20.5C33 14.5 28 10 22 10Z" fill="#4285F4" />
      <path d="M16 32V38H28V32Z" fill="#4285F4" opacity="0.6" />
      {/* Cloud highlight */}
      <path d="M22 13C17.5 13 14 16.2 14 20.5V22H30V20.5C30 16.2 26.5 13 22 13Z" fill="white" opacity="0.25" />
      {/* GCP letters */}
      <text x="14" y="28" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="white">GCP</text>
    </svg>
  );
}
