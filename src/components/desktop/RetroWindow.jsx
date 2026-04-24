import { useRef } from 'react';
import { motion } from 'framer-motion';

export function RetroWindow({
  id,
  title,
  children,
  initialX = 80,
  initialY = 80,
  width  = 360,
  tilt   = 0,
  zIndex = 10,
  isMinimized,
  onFocus,
  onMinimize,
  constraintsRef,
  delay = 0,
}) {
  const titleRef = useRef();

  if (isMinimized) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraintsRef}
      dragListener={false}   // only drag via title bar
      onMouseDown={onFocus}
      initial={{ opacity: 0, scale: 0.75, rotate: tilt - 6 }}
      animate={{ opacity: 1, scale: 1,    rotate: tilt }}
      transition={{ type: 'spring', damping: 10, stiffness: 200, delay }}
      style={{
        position: 'absolute',
        left: initialX,
        top:  initialY,
        width,
        zIndex,
        willChange: 'transform',
      }}
    >
      <div
        className="flex flex-col"
        style={{
          border:       '3px solid #0A3323',
          boxShadow:    '6px 6px 0 rgba(10,51,35,0.5)',
          borderRadius: 3,
          background:   '#F7F4D5',
          minHeight:    120,
          overflow:     'hidden',
        }}
      >
        {/* ── Title bar ── */}
        <motion.div
          ref={titleRef}
          className="win-titlebar flex items-center justify-between px-2 py-1.5 select-none"
          style={{ borderBottom: '3px solid #0A3323', minHeight: 32 }}
          drag
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={constraintsRef}
          onMouseDown={(e) => { e.stopPropagation(); onFocus(); }}
          data-interactive
        >
          {/* Window buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); onMinimize(); }}
              data-interactive
              style={{
                width: 14, height: 14, borderRadius: '50%',
                background: '#D3968C',
                border: '2px solid #0A3323',
                flexShrink: 0,
              }}
            />
            <div style={{
              width: 14, height: 14, borderRadius: '50%',
              background: '#839958', border: '2px solid #0A3323',
            }} />
            <div style={{
              width: 14, height: 14, borderRadius: '50%',
              background: '#105666', border: '2px solid #0A3323',
            }} />
          </div>

          {/* Title */}
          <span
            className="font-pixel text-white tracking-tight leading-none"
            style={{ fontSize: 7, textShadow: '1px 1px 0 rgba(0,0,0,0.5)' }}
          >
            {title}
          </span>

          {/* Right spacer = same width as buttons so title is centred */}
          <div style={{ width: 48 }} />
        </motion.div>

        {/* ── Content ── */}
        <div
          className="retro-scroll overflow-y-auto"
          style={{ flex: 1, padding: '10px 12px', color: '#0A3323' }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
