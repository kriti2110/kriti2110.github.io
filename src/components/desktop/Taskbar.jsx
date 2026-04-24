import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EMOJI = { profile: '👤', works: '💼', tools: '🛠', contact: '✉️' };

export function Taskbar({ windows, onRestore }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex items-center px-3 gap-2"
      style={{
        height: 38,
        background: '#F7F4D5',
        borderTop: '3px solid #0A3323',
        boxShadow: '0 -3px 0 rgba(10,51,35,0.15)',
        zIndex: 999,
      }}
    >
      {/* Start-ish button */}
      <div
        className="font-pixel text-white px-3 py-1 select-none flex-shrink-0"
        style={{
          fontSize: 7,
          background: 'linear-gradient(135deg, #839958, #0A3323)',
          border: '2px solid #0A3323',
          boxShadow: '2px 2px 0 rgba(10,51,35,0.4)',
          borderRadius: 2,
        }}
      >
        ✦ START
      </div>

      {/* Separator */}
      <div style={{ width: 2, height: 22, background: '#0A3323', opacity: 0.3 }} />

      {/* Minimized window buttons */}
      <div className="flex gap-2 flex-1">
        {windows.filter(w => w.isMinimized).map(w => (
          <motion.button
            key={w.id}
            onClick={() => onRestore(w.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            data-interactive
            className="font-pixel flex items-center gap-1 px-2 py-1"
            style={{
              fontSize: 6,
              color: '#0A3323',
              background: '#E8E3C0',
              border: '2px solid #0A3323',
              boxShadow: '2px 2px 0 rgba(10,51,35,0.3)',
              borderRadius: 2,
              maxWidth: 130,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <span>{EMOJI[w.id]}</span>
            <span className="truncate">{w.title.replace('C:\\KRITI\\', '')}</span>
          </motion.button>
        ))}
      </div>

      {/* Clock */}
      <div
        className="font-pixel flex-shrink-0 px-2 py-1"
        style={{
          fontSize: 7,
          color: '#0A3323',
          background: '#E8E3C0',
          border: '2px solid #0A3323',
          borderRadius: 2,
          minWidth: 78,
          textAlign: 'center',
        }}
      >
        {time}
      </div>
    </div>
  );
}
