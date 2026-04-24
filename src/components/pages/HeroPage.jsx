import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimeGirl, FloatingStar, Cloud, StarCluster } from '../svg/Illustrations';
import { FlyingCreatures } from '../svg/FlyingCreatures';
import { PixelComputer, FloppyDisk, CodeBracket, PixelHeart } from '../svg/ComputerStickers';
import { GameHub } from '../games/GameHub';
import { personal } from '../../data/resumeData';

const STATS = [
  { val: '3',     label: 'INTERNSHIPS', color: '#839958' },
  { val: '5+',    label: 'HACKATHONS',  color: '#105666' },
  { val: '0.921', label: 'TOP AUROC',   color: '#D3968C' },
];

export function HeroPage({ navigate }) {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="gingham relative w-full h-full flex items-center overflow-hidden"
      style={{ padding: '28px 56px 18px 56px' }}>

      {/* Flying butterflies & birds */}
      <FlyingCreatures />

      {/* ── Background clouds ── */}
      <div className="absolute" style={{ top: 8,  right: 22, pointerEvents: 'none' }}>
        <Cloud width={165} height={90} delay={0} />
      </div>
      <div className="absolute" style={{ top: 55, right: 230, opacity: 0.65, pointerEvents: 'none' }}>
        <Cloud width={110} height={60} delay={2.5} />
      </div>
      <div className="absolute" style={{ top: 20, left: 460, opacity: 0.38, pointerEvents: 'none' }}>
        <Cloud width={82} height={48} delay={1.3} />
      </div>

      {/* ── Scattered stars ── */}
      <div className="absolute" style={{ top: 26,  left: 44,  pointerEvents: 'none' }}>
        <FloatingStar size={19} color="#839958" delay={0.4} />
      </div>
      <div className="absolute" style={{ top: 168, left: 444, pointerEvents: 'none' }}>
        <FloatingStar size={14} color="#D3968C" delay={1.1} />
      </div>
      <div className="absolute" style={{ bottom: 140, left: 340, pointerEvents: 'none' }}>
        <FloatingStar size={11} color="#105666" delay={0.8} />
      </div>
      <div className="absolute" style={{ bottom: 32, left: 44, pointerEvents: 'none' }}>
        <StarCluster />
      </div>

      {/* ── Computer stickers (decorative) ── */}
      <div className="absolute" style={{ bottom: 60, left: 130, pointerEvents: 'none', opacity: 0.75 }}>
        <PixelComputer size={0.9} />
      </div>
      <div className="absolute" style={{ top: 30, left: 500, pointerEvents: 'none', opacity: 0.7 }}>
        <CodeBracket size={0.85} />
      </div>
      <div className="absolute" style={{ bottom: 68, left: 220, pointerEvents: 'none', opacity: 0.7 }}>
        <PixelHeart size={0.9} color="#D3968C" />
      </div>

      {/* ── LEFT content ── */}
      <div className="flex flex-col gap-5 z-10" style={{ flex: '0 0 52%', maxWidth: 520 }}>

        {/* Sub-label */}
        <motion.div className="flex items-center gap-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.04 }}>
          <span style={{ display: 'inline-block', width: 22, height: 2, background: '#839958' }} />
          <span className="font-pixel" style={{ fontSize: 8, color: '#839958', letterSpacing: 4 }}>
            PORTFOLIO 2025
          </span>
          <span style={{ display: 'inline-block', width: 22, height: 2, background: '#839958' }} />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.08, type: 'spring', damping: 18, stiffness: 160 }}
        >
          <div className="font-pixel text-dark-green" style={{ fontSize: 40, lineHeight: 1.2, letterSpacing: 2 }}>
            KRITI
          </div>
          <div className="font-pixel text-dark-green" style={{ fontSize: 40, lineHeight: 1.2, letterSpacing: 2 }}>
            RAJ
          </div>
          <div className="font-retro" style={{ fontSize: 30, color: '#105666', marginTop: 5, letterSpacing: 1 }}>
            AI &amp; ML ENGINEER
          </div>
          <div className="font-pixel" style={{ fontSize: 8, color: '#839958', marginTop: 5, letterSpacing: 2 }}>
            KOLKATA, INDIA  ✦  KIIT BHUBANESWAR
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p className="font-retro text-dark-green"
          style={{ fontSize: 20, lineHeight: 1.55, maxWidth: 465 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
          {personal.bio}
        </motion.p>

        {/* Stat stickers */}
        <motion.div className="flex gap-3 flex-wrap"
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>
          {STATS.map(({ val, label, color }, i) => (
            <motion.div key={label}
              whileHover={{ y: -5, rotate: [-1.5, 1.5, -1.5, 0], transition: { duration: 0.35 } }}
              data-interactive
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -2 : 1.5 }}
              transition={{ delay: 0.38 + i * 0.08, type: 'spring', damping: 12, stiffness: 200 }}
              style={{
                padding: '10px 16px',
                background: '#F7F4D5',
                border: `3px solid ${color}`,
                boxShadow: `5px 5px 0 ${color}`,
                borderRadius: 3, minWidth: 82,
              }}
            >
              <div className="font-pixel text-dark-green" style={{ fontSize: 22 }}>{val}</div>
              <div className="font-pixel" style={{ fontSize: 8, color, marginTop: 3 }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div className="flex gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}>
          <motion.button
            whileHover={{ x: 5, boxShadow: '7px 7px 0 #0A3323' }} whileTap={{ scale: 0.95 }}
            onClick={() => navigate(1)} data-interactive className="font-pixel"
            style={{ fontSize: 8, padding: '11px 18px', background: '#105666', color: '#F7F4D5', border: '3px solid #0A3323', boxShadow: '4px 4px 0 #0A3323', borderRadius: 3, cursor: 'none' }}>
            VIEW WORKS →
          </motion.button>
          <motion.button
            whileHover={{ x: 5, boxShadow: '7px 7px 0 #0A3323' }} whileTap={{ scale: 0.95 }}
            onClick={() => navigate(2)} data-interactive className="font-pixel"
            style={{ fontSize: 8, padding: '11px 18px', background: '#D3968C', color: '#F7F4D5', border: '3px solid #0A3323', boxShadow: '4px 4px 0 #0A3323', borderRadius: 3, cursor: 'none' }}>
            MY JOURNEY →
          </motion.button>
          {/* GAMES button */}
          <motion.button
            whileHover={{ y: -3, boxShadow: '7px 7px 0 #0A3323' }} whileTap={{ scale: 0.95 }}
            onClick={() => setShowGame(true)} data-interactive className="font-pixel"
            style={{ fontSize: 8, padding: '11px 18px', background: '#839958', color: '#F7F4D5', border: '3px solid #0A3323', boxShadow: '4px 4px 0 #0A3323', borderRadius: 3, cursor: 'none' }}>
            🎮 PLAY GAMES
          </motion.button>
        </motion.div>

        {/* Tech chips */}
        <motion.div className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.56 }}>
          {['Python','PyTorch','XGBoost','SHAP','Flask','GCP','Swin-T','LSTM'].map(t => (
            <span key={t} className="font-pixel"
              style={{ fontSize: 8, padding: '4px 9px', border: '1.5px solid #839958', color: '#839958', background: 'rgba(131,153,88,0.1)', borderRadius: 2 }}>
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT — Anime Girl ── */}
      <div className="absolute" style={{ right: 46, bottom: 0 }}>
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: 260, height: 330,
          border: '2px dashed rgba(131,153,88,0.25)',
          borderRadius: 14, pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, x: 70, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.12, type: 'spring', damping: 16, stiffness: 130 }}
          style={{ position: 'relative' }}
        >
          <AnimeGirl width={268} height={318} />

          {/* Orbiting stars */}
          <div className="absolute" style={{ top: 22,  left: -24 }}><FloatingStar size={18} color="#D3968C" delay={0.3} /></div>
          <div className="absolute" style={{ top: 66,  right: -20 }}><FloatingStar size={13} color="#839958" delay={0.9} /></div>
          <div className="absolute" style={{ bottom: 85, right: -28 }}><FloatingStar size={21} color="#105666" delay={1.5} /></div>
          <div className="absolute" style={{ bottom: 44, left: -30 }}><FloatingStar size={12} color="#D3968C" delay={0.6} /></div>

          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, type: 'spring', damping: 14, stiffness: 220 }}
            style={{
              position: 'absolute', top: 18, right: -120,
              background: '#F7F4D5', border: '2.5px solid #0A3323',
              boxShadow: '3px 3px 0 #0A3323',
              borderRadius: 7, padding: '7px 12px', whiteSpace: 'nowrap',
            }}
          >
            <span className="font-retro text-dark-green" style={{ fontSize: 20 }}>
              let's build! ✦
            </span>
            <div style={{ position: 'absolute', bottom: -11, left: 18, width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '11px solid #0A3323' }} />
            <div style={{ position: 'absolute', bottom: -8,  left: 20, width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '9px solid #F7F4D5' }} />
          </motion.div>

          {/* Floppy sticker near girl */}
          <div style={{ position: 'absolute', bottom: 180, left: -50, pointerEvents: 'none', opacity: 0.8 }}>
            <FloppyDisk size={0.85} color="#839958" />
          </div>
        </motion.div>
      </div>

      {/* Watermark */}
      <div className="absolute font-pixel select-none pointer-events-none"
        style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)', fontSize: 7, color: 'rgba(10,51,35,0.09)', letterSpacing: 5, whiteSpace: 'nowrap' }}>
        KRITI RAJ — AI & ML PORTFOLIO — 2025
      </div>

      {/* Game modal */}
      <AnimatePresence>
        {showGame && <GameHub onClose={() => setShowGame(false)} />}
      </AnimatePresence>
    </div>
  );
}
