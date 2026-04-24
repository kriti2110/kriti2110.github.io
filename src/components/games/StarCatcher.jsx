import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOAL     = 10;
const TIME_MAX = 45;
const COLORS   = ['#D3968C', '#839958', '#105666', '#C9B8FF', '#F7C88C'];

let uidCounter = 0;
const uid = () => ++uidCounter;

export function StarCatcher() {
  const [phase,  setPhase]  = useState('idle');   // idle | playing | won | lost
  const [score,  setScore]  = useState(0);
  const [time,   setTime]   = useState(TIME_MAX);
  const [stars,  setStars]  = useState([]);
  const [bursts, setBursts] = useState([]);        // catch-burst particles
  const areaRef = useRef(null);

  // Spawn stars
  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => {
      setStars(prev => [
        ...prev.slice(-10),
        {
          id:    uid(),
          x:     Math.random() * 82 + 9,   // % of container
          y:     -4,
          speed: Math.random() * 0.4 + 0.25,
          size:  Math.random() * 14 + 16,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          wobble: (Math.random() - 0.5) * 0.06,
        },
      ]);
    }, 1400);
    return () => clearInterval(id);
  }, [phase]);

  // Move stars
  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => {
      setStars(prev =>
        prev
          .map(s => ({ ...s, y: s.y + s.speed, x: s.x + s.wobble }))
          .filter(s => s.y < 106),
      );
    }, 40);
    return () => clearInterval(id);
  }, [phase]);

  // Countdown
  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => {
      setTime(t => {
        if (t <= 1) { setPhase('lost'); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  const catchStar = (id, x, y) => {
    setStars(prev => prev.filter(s => s.id !== id));
    setBursts(prev => [...prev, { id: uid(), x, y }]);
    setScore(n => {
      const next = n + 1;
      if (next >= GOAL) { setPhase('won'); }
      return next;
    });
  };

  const removeBurst = (id) => setBursts(prev => prev.filter(b => b.id !== id));

  const start = () => {
    setScore(0); setTime(TIME_MAX); setStars([]); setBursts([]);
    setPhase('playing');
  };

  const progressPct = (score / GOAL) * 100;

  return (
    <div
      ref={areaRef}
      style={{
        width: '100%', height: '100%',
        background: 'linear-gradient(180deg, #0e2818 0%, #1a3d28 60%, #0A3323 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Subtle dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(131,153,88,0.15) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }} />

      {/* ── HUD ── */}
      {phase === 'playing' && (
        <div style={{
          position: 'absolute', top: 8, left: 12, right: 12,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          zIndex: 10,
        }}>
          {/* Score */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="font-pixel" style={{ fontSize: 8, color: '#F7F4D5' }}>
              ★ {score}/{GOAL}
            </span>
          </div>
          {/* Progress bar */}
          <div style={{ flex: 1, margin: '0 12px', height: 7, background: 'rgba(247,244,213,0.15)', borderRadius: 3, overflow: 'hidden', border: '1px solid rgba(247,244,213,0.2)' }}>
            <motion.div
              style={{ height: '100%', background: 'linear-gradient(90deg, #839958, #D3968C)', borderRadius: 3 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {/* Timer */}
          <motion.span
            className="font-pixel"
            style={{ fontSize: 8, color: time <= 10 ? '#D3968C' : '#839958' }}
            animate={time <= 10 ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            ⏱ {time}s
          </motion.span>
        </div>
      )}

      {/* ── Falling stars ── */}
      {phase === 'playing' && stars.map(star => (
        <motion.div
          key={star.id}
          onClick={() => catchStar(star.id, star.x, star.y)}
          data-interactive
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.3 }}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top:  `${star.y}%`,
            transform: 'translate(-50%, -50%)',
            cursor: 'none',
            zIndex: 5,
            filter: `drop-shadow(0 0 5px ${star.color})`,
          }}
        >
          <motion.svg
            width={star.size} height={star.size}
            viewBox="-12 -12 24 24"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <path
              d="M0,-10 L2.2,-2.2 L10,0 L2.2,2.2 L0,10 L-2.2,2.2 L-10,0 L-2.2,-2.2 Z"
              fill={star.color}
            />
          </motion.svg>
        </motion.div>
      ))}

      {/* ── Catch bursts ── */}
      <AnimatePresence>
        {bursts.map(b => (
          <motion.div
            key={b.id}
            style={{ position: 'absolute', left: `${b.x}%`, top: `${b.y}%`, transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 20 }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            onAnimationComplete={() => removeBurst(b.id)}
          >
            <svg width={32} height={32} viewBox="-16 -16 32 32">
              {[0,60,120,180,240,300].map(deg => (
                <motion.line key={deg}
                  x1="0" y1="0"
                  x2={Math.cos(deg * Math.PI / 180) * 12}
                  y2={Math.sin(deg * Math.PI / 180) * 12}
                  stroke="#D3968C" strokeWidth="2" strokeLinecap="round"
                />
              ))}
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── Idle screen ── */}
      {phase === 'idle' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width={48} height={48} viewBox="-12 -12 24 24">
              <path d="M0,-10 L2.2,-2.2 L10,0 L2.2,2.2 L0,10 L-2.2,2.2 L-10,0 L-2.2,-2.2 Z" fill="#D3968C" />
            </svg>
          </motion.div>
          <span className="font-pixel" style={{ fontSize: 9, color: '#F7F4D5', textAlign: 'center' }}>
            STAR CATCHER
          </span>
          <span className="font-retro" style={{ fontSize: 20, color: '#839958', textAlign: 'center' }}>
            Catch {GOAL} stars before time runs out!
          </span>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '5px 5px 0 #F7F4D5' }}
            whileTap={{ scale: 0.94 }}
            onClick={start}
            data-interactive
            className="font-pixel"
            style={{
              fontSize: 9, padding: '11px 22px',
              background: '#839958', color: '#F7F4D5',
              border: '3px solid #F7F4D5', boxShadow: '4px 4px 0 #F7F4D5',
              borderRadius: 3, cursor: 'none', marginTop: 6,
            }}
          >
            START →
          </motion.button>
        </div>
      )}

      {/* ── Win / Lose screens ── */}
      {(phase === 'won' || phase === 'lost') && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <motion.div
            initial={{ scale: 0.3, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 12, stiffness: 220 }}
          >
            <span className="font-pixel" style={{ fontSize: phase === 'won' ? 22 : 16, color: phase === 'won' ? '#D3968C' : '#839958', display: 'block', textAlign: 'center' }}>
              {phase === 'won' ? '🎉 YOU WIN!' : '⏰ TIME UP!'}
            </span>
          </motion.div>
          <span className="font-retro" style={{ fontSize: 24, color: '#F7F4D5', textAlign: 'center' }}>
            {phase === 'won' ? `Caught all ${GOAL} stars!` : `Caught ${score}/${GOAL} — try again!`}
          </span>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            onClick={start}
            data-interactive
            className="font-pixel"
            style={{
              fontSize: 9, padding: '11px 22px',
              background: phase === 'won' ? '#D3968C' : '#105666',
              color: '#F7F4D5',
              border: '3px solid #F7F4D5', boxShadow: '4px 4px 0 #F7F4D5',
              borderRadius: 3, cursor: 'none', marginTop: 4,
            }}
          >
            PLAY AGAIN →
          </motion.button>
        </div>
      )}
    </div>
  );
}
