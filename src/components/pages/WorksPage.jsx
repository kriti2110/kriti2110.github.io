import { motion } from 'framer-motion';
import { FloatingStar } from '../svg/Illustrations';
import { CodeBracket, WiFiGlobe } from '../svg/ComputerStickers';
import { projects } from '../../data/resumeData';

const TILTS = [-1.5, 0.8, -0.5];

export function WorksPage() {
  return (
    <div className="gingham relative w-full h-full flex flex-col overflow-hidden"
      style={{ padding: '20px 28px 14px 28px' }}>

      {/* Header */}
      <motion.div className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <FloatingStar size={16} color="#105666" />
        <span className="font-pixel text-dark-green" style={{ fontSize: 10, letterSpacing: 2 }}>SELECTED WORKS</span>
        <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg,#105666,transparent)' }} />
        <div style={{ opacity: 0.7, pointerEvents: 'none' }}><CodeBracket size={0.75} /></div>
      </motion.div>

      {/* 3-column cards */}
      <div className="flex gap-4 flex-1" style={{ minHeight: 0 }}>
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 60, rotate: TILTS[i] - 5 }}
            animate={{ opacity: 1, y: 0, rotate: TILTS[i] }}
            transition={{ delay: 0.1 + i * 0.12, type: 'spring', damping: 14, stiffness: 160 }}
            whileHover={{ y: -6, rotate: [TILTS[i], TILTS[i]+2, TILTS[i]-1.5, TILTS[i]], transition: { duration: 0.4 } }}
            data-interactive
            style={{
              flex: 1, background: '#F7F4D5',
              border: `3px solid ${proj.color}`,
              boxShadow: `6px 6px 0 ${proj.color}`,
              borderRadius: 4, display: 'flex', flexDirection: 'column',
              overflow: 'hidden', cursor: 'none',
            }}
          >
            {/* Colored top band */}
            <div style={{ background: proj.color, padding: '14px 14px 12px', position: 'relative', borderBottom: `2px solid #0A3323` }}>
              <div style={{ position: 'absolute', top: 7, left: 7,   width: 9, height: 9, background: '#F7F4D5', opacity: 0.35, borderRadius: 1 }} />
              <div style={{ position: 'absolute', top: 7, right: 7,  width: 9, height: 9, background: '#F7F4D5', opacity: 0.35, borderRadius: 1 }} />

              <div className="font-pixel" style={{ fontSize: 11, color: '#F7F4D5', letterSpacing: 1 }}>{proj.title}</div>
              <div className="font-retro" style={{ fontSize: 20, color: 'rgba(247,244,213,0.88)', marginTop: 3 }}>{proj.subtitle}</div>

              <div className="font-pixel" style={{ display: 'inline-block', marginTop: 9, padding: '4px 10px', background: '#F7F4D5', color: proj.color, border: '2px solid #0A3323', borderRadius: 2, fontSize: 8 }}>
                ✦ {proj.metric}
              </div>
            </div>

            {/* Body */}
            <div style={{ flex: 1, padding: '12px 14px 10px', display: 'flex', flexDirection: 'column', gap: 10 }}>

              {/* Short desc */}
              <p className="font-retro text-dark-green" style={{ fontSize: 18, lineHeight: 1.5 }}>
                {proj.desc}
              </p>

              {/* Long desc */}
              <p className="font-retro" style={{ fontSize: 16, lineHeight: 1.45, color: '#3a5a3a' }}>
                {proj.longDesc}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map(t => (
                  <span key={t} className="font-pixel"
                    style={{ fontSize: 8, padding: '3px 8px', color: proj.color, border: `2px solid ${proj.color}`, background: `${proj.color}18`, borderRadius: 2 }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 2, background: `${proj.color}28`, borderRadius: 1 }} />

              {/* Key stats row */}
              <div className="flex gap-2">
                {proj.stats.map(([val, lbl]) => (
                  <div key={lbl} style={{ flex: 1, padding: '7px 5px', border: `1.5px solid ${proj.color}`, borderRadius: 3, textAlign: 'center' }}>
                    <div className="font-pixel text-dark-green" style={{ fontSize: 8 }}>{val}</div>
                    <div className="font-pixel" style={{ fontSize: 7, color: proj.color, marginTop: 2 }}>{lbl}</div>
                  </div>
                ))}
              </div>

              <div style={{ flex: 1 }} />

              {/* Footer tag */}
              <div className="font-pixel" style={{ fontSize: 8, color: proj.color, textAlign: 'center', padding: '6px', border: `1.5px dashed ${proj.color}`, borderRadius: 2, letterSpacing: 1 }}>
                ✦ {proj.id.toUpperCase()} · ML RESEARCH PROJECT
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom row */}
      <motion.div className="flex items-center justify-between mt-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <div style={{ opacity: 0.65, pointerEvents: 'none' }}><WiFiGlobe size={0.75} /></div>
        <div className="flex items-center gap-2">
          <FloatingStar size={9} color="#839958" delay={0.2} />
          <span className="font-retro" style={{ fontSize: 18, color: '#839958' }}>
            end-to-end production-ready ML systems
          </span>
          <FloatingStar size={9} color="#D3968C" delay={0.8} />
        </div>
        <div style={{ opacity: 0.65, pointerEvents: 'none' }}><WiFiGlobe size={0.75} /></div>
      </motion.div>
    </div>
  );
}
