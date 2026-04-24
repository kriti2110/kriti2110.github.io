import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SYMBOLS = [
  { id: 'py',  label: 'PY',   color: '#3776AB', bg: '#1a3a5c' },
  { id: 'torch', label: 'PT', color: '#EE4C2C', bg: '#4a1a0e' },
  { id: 'git', label: 'GIT',  color: '#6e5494', bg: '#2d2244' },
  { id: 'sk',  label: 'SK',   color: '#F7931E', bg: '#4a2e06' },
  { id: 'fl',  label: 'FL',   color: '#105666', bg: '#062030' },
  { id: 'gcp', label: 'GCP',  color: '#4285F4', bg: '#0c2a5c' },
];

function buildDeck() {
  const pairs = [...SYMBOLS, ...SYMBOLS].map((s, i) => ({ ...s, uid: i }));
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs;
}

export function MemoryMatch() {
  const [deck,      setDeck]      = useState(buildDeck);
  const [flipped,   setFlipped]   = useState([]);   // uids
  const [matched,   setMatched]   = useState([]);   // symbol ids
  const [lockBoard, setLockBoard] = useState(false);
  const [moves,     setMoves]     = useState(0);
  const [won,       setWon]       = useState(false);

  useEffect(() => {
    if (matched.length === SYMBOLS.length) setWon(true);
  }, [matched]);

  const flip = (card) => {
    if (lockBoard) return;
    if (flipped.includes(card.uid)) return;
    if (matched.includes(card.id)) return;

    const next = [...flipped, card.uid];
    setFlipped(next);

    if (next.length === 2) {
      setMoves(m => m + 1);
      setLockBoard(true);
      const [aUid, bUid] = next;
      const a = deck.find(c => c.uid === aUid);
      const b = deck.find(c => c.uid === bUid);

      if (a.id === b.id) {
        setMatched(prev => [...prev, a.id]);
        setFlipped([]);
        setLockBoard(false);
      } else {
        setTimeout(() => { setFlipped([]); setLockBoard(false); }, 900);
      }
    }
  };

  const restart = () => {
    setDeck(buildDeck());
    setFlipped([]);
    setMatched([]);
    setLockBoard(false);
    setMoves(0);
    setWon(false);
  };

  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(180deg, #0e2818 0%, #1a3d28 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 12, padding: 16, position: 'relative', overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(131,153,88,0.12) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', zIndex: 1 }}>
        <span className="font-pixel" style={{ fontSize: 8, color: '#F7F4D5' }}>MEMORY MATCH</span>
        <span className="font-pixel" style={{ fontSize: 8, color: '#839958' }}>MOVES: {moves}</span>
        <motion.button
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
          onClick={restart} data-interactive
          className="font-pixel"
          style={{ fontSize: 7, padding: '5px 10px', background: '#105666', color: '#F7F4D5', border: '2px solid #F7F4D5', borderRadius: 2, cursor: 'none' }}
        >
          RESET
        </motion.button>
      </div>

      {/* Grid — 4 columns × 3 rows */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 8, width: '100%', zIndex: 1,
      }}>
        {deck.map(card => {
          const isFlipped  = flipped.includes(card.uid);
          const isMatched  = matched.includes(card.id);
          const showFace   = isFlipped || isMatched;

          return (
            <motion.div
              key={card.uid}
              onClick={() => flip(card)}
              data-interactive
              style={{
                aspectRatio: '1',
                borderRadius: 4,
                cursor: 'none',
                perspective: 600,
                position: 'relative',
              }}
              whileHover={!showFace ? { scale: 1.06, y: -2 } : {}}
              whileTap={!showFace ? { scale: 0.94 } : {}}
            >
              {/* Card back */}
              <motion.div
                style={{
                  position: 'absolute', inset: 0,
                  background: isMatched ? `${card.bg}` : '#1a3228',
                  border: `2px solid ${isMatched ? card.color : '#839958'}`,
                  borderRadius: 4,
                  boxShadow: isMatched ? `0 0 8px ${card.color}55` : '2px 2px 0 #0A3323',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backfaceVisibility: 'hidden',
                }}
                animate={{ rotateY: showFace ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Retro pattern */}
                <svg width="24" height="24" viewBox="0 0 24 24" opacity="0.3">
                  <path d="M12,2 L14,8 L20,8 L15,13 L17,19 L12,15 L7,19 L9,13 L4,8 L10,8 Z" fill="#839958" />
                </svg>
              </motion.div>

              {/* Card face */}
              <motion.div
                style={{
                  position: 'absolute', inset: 0,
                  background: card.bg,
                  border: `2.5px solid ${card.color}`,
                  borderRadius: 4,
                  boxShadow: `3px 3px 0 #0A3323, 0 0 10px ${card.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backfaceVisibility: 'hidden',
                }}
                animate={{ rotateY: showFace ? 0 : -180 }}
                transition={{ duration: 0.3 }}
                initial={{ rotateY: -180 }}
              >
                <span className="font-pixel" style={{ fontSize: 9, color: card.color, letterSpacing: 0.5 }}>
                  {card.label}
                </span>
                {isMatched && (
                  <motion.div
                    style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, background: `${card.color}22` }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  >
                    <span style={{ fontSize: 14 }}>✓</span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Win overlay */}
      <AnimatePresence>
        {won && (
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(10,51,35,0.88)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14,
              zIndex: 20,
            }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            <motion.span
              className="font-pixel"
              style={{ fontSize: 18, color: '#D3968C', textAlign: 'center' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              🎉 YOU WIN!
            </motion.span>
            <span className="font-retro" style={{ fontSize: 22, color: '#F7F4D5' }}>
              Matched all pairs in {moves} moves!
            </span>
            <motion.button
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
              onClick={restart} data-interactive className="font-pixel"
              style={{ fontSize: 9, padding: '11px 22px', background: '#839958', color: '#F7F4D5', border: '3px solid #F7F4D5', boxShadow: '4px 4px 0 #F7F4D5', borderRadius: 3, cursor: 'none', marginTop: 6 }}
            >
              PLAY AGAIN →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
