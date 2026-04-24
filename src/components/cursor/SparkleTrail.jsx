import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#D3968C', '#839958', '#105666', '#F7F4D5', '#C9B8FF'];

function Sparkle({ id, x, y, size, rotate, color, onDone }) {
  return (
    <motion.div
      style={{
        position: 'fixed',
        left: x,
        top: y,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 99992,
      }}
      initial={{ opacity: 0.9, scale: 1, rotate }}
      animate={{ opacity: 0, scale: 0, y: -22, rotate: rotate + 160 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.72, ease: 'easeOut' }}
      onAnimationComplete={onDone}
    >
      <svg width={size} height={size} viewBox="-10 -10 20 20">
        <path
          d="M0,-9 L2,-2 L9,0 L2,2 L0,9 L-2,2 L-9,0 L-2,-2 Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
}

export function SparkleTrail({ mouseRef }) {
  const [sparkles, setSparkles] = useState([]);
  const lastPos  = useRef({ x: -500, y: -500 });
  const lastTime = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      const now = Date.now();
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 18 && now - lastTime.current > 55) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        lastTime.current = now;

        const id = now + Math.random();
        setSparkles(prev => [
          ...prev.slice(-14),
          {
            id,
            x:      e.clientX + (Math.random() - 0.5) * 24,
            y:      e.clientY + (Math.random() - 0.5) * 24,
            size:   Math.random() * 10 + 6,
            rotate: Math.random() * 360,
            color:  COLORS[Math.floor(Math.random() * COLORS.length)],
          },
        ]);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const remove = (id) => setSparkles(prev => prev.filter(s => s.id !== id));

  return (
    <AnimatePresence>
      {sparkles.map(s => (
        <Sparkle key={s.id} {...s} onDone={() => remove(s.id)} />
      ))}
    </AnimatePresence>
  );
}
