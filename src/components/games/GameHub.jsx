import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarCatcher } from './StarCatcher';
import { MemoryMatch } from './MemoryMatch';

const GAMES = [
  { id: 'star',   label: '★ STAR CATCHER',   sub: 'Catch 10 stars · 45s',   color: '#D3968C' },
  { id: 'memory', label: '⊞ MEMORY MATCH',   sub: 'Match all ML tool pairs', color: '#839958' },
];

export function GameHub({ onClose }) {
  const [active, setActive] = useState(null);

  return (
    <motion.div
      style={{
        position: 'fixed', inset: 0, zIndex: 8500,
        background: 'rgba(10,51,35,0.82)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        style={{
          width: 540, height: 460,
          background: '#F7F4D5',
          border: '3px solid #0A3323',
          boxShadow: '10px 10px 0 #0A3323',
          borderRadius: 4,
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
        initial={{ scale: 0.8, rotateY: -20, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 18, stiffness: 200 }}
      >
        {/* Title bar */}
        <div
          className="win-titlebar flex items-center justify-between px-4"
          style={{ height: 36, flexShrink: 0 }}
        >
          <div className="flex items-center gap-2">
            {['#D3968C','#839958','#105666'].map(c => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, border: '1.5px solid #0A3323' }} />
            ))}
            <span className="font-pixel" style={{ fontSize: 7, color: '#F7F4D5', marginLeft: 8 }}>
              C:\KRITI\games.exe
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.85 }}
            onClick={onClose} data-interactive
            className="font-pixel"
            style={{ fontSize: 9, color: '#F7F4D5', background: 'none', border: 'none', cursor: 'none' }}
          >
            ✕
          </motion.button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {/* Game selector tabs */}
          <div style={{
            display: 'flex', gap: 0,
            borderBottom: '2px solid #0A3323',
            background: '#E8E3C0', flexShrink: 0,
          }}>
            <motion.button
              onClick={() => setActive(null)}
              data-interactive
              className="font-pixel"
              style={{
                fontSize: 6, padding: '8px 14px',
                background: active === null ? '#F7F4D5' : 'transparent',
                color: '#0A3323',
                border: 'none',
                borderRight: '2px solid #0A3323',
                cursor: 'none',
              }}
            >
              🏠 HOME
            </motion.button>
            {GAMES.map(g => (
              <motion.button
                key={g.id}
                onClick={() => setActive(g.id)}
                data-interactive
                className="font-pixel"
                style={{
                  fontSize: 6, padding: '8px 14px',
                  background: active === g.id ? '#F7F4D5' : 'transparent',
                  color: active === g.id ? g.color : '#0A3323',
                  border: 'none',
                  borderRight: '2px solid #0A3323',
                  cursor: 'none',
                }}
              >
                {g.label}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              {active === null && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  style={{ padding: 24, height: '100%', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}
                >
                  <span className="font-pixel text-dark-green" style={{ fontSize: 8 }}>CHOOSE A GAME</span>
                  <div className="flex gap-4">
                    {GAMES.map(g => (
                      <motion.button
                        key={g.id}
                        onClick={() => setActive(g.id)}
                        data-interactive
                        whileHover={{ y: -5, boxShadow: `8px 8px 0 ${g.color}` }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          flex: 1, padding: '18px 14px',
                          background: '#F7F4D5',
                          border: `3px solid ${g.color}`,
                          boxShadow: `5px 5px 0 ${g.color}`,
                          borderRadius: 4, cursor: 'none',
                          textAlign: 'center',
                        }}
                      >
                        <div className="font-pixel text-dark-green" style={{ fontSize: 8, marginBottom: 8 }}>{g.label}</div>
                        <div className="font-retro" style={{ fontSize: 18, color: g.color }}>{g.sub}</div>
                      </motion.button>
                    ))}
                  </div>
                  <p className="font-retro" style={{ fontSize: 18, color: '#839958', textAlign: 'center' }}>
                    ✦ easy to win · purely for fun ✦
                  </p>
                </motion.div>
              )}
              {active === 'star' && (
                <motion.div key="star" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: '100%' }}>
                  <StarCatcher />
                </motion.div>
              )}
              {active === 'memory' && (
                <motion.div key="memory" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: '100%', padding: 12 }}>
                  <MemoryMatch />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
