import { motion } from 'framer-motion';
import { PottedPlant, FloatingStar, StarCluster } from '../svg/Illustrations';
import { PixelHeart, WiFiGlobe, FloppyDisk } from '../svg/ComputerStickers';
import { personal } from '../../data/resumeData';

const LINKS = [
  { label: 'EMAIL',    prefix: 'C:\\>', href: `mailto:${personal.email}`,  display: personal.email,              color: '#D3968C' },
  { label: 'LINKEDIN', prefix: 'C:\\>', href: personal.linkedin,           display: 'linkedin.com/in/kriti-raj-5b398236a', color: '#105666' },
  { label: 'GITHUB',   prefix: 'C:\\>', href: personal.github,             display: 'github.com/kriti2110',      color: '#839958' },
  { label: 'LOCATION', prefix: 'C:\\>', href: null,                        display: 'Kolkata, India',             color: '#0A3323' },
];

const FUN_FACTS = [
  'Builds ML pipelines at 2am ✦',
  'Explains everything with diagrams ✦',
  'Tea > Coffee  ✦',
  'Anime fan & retrowave enjoyer ✦',
];

export function ContactPage() {
  return (
    <div className="gingham relative w-full h-full flex overflow-hidden"
      style={{ padding: '24px 36px 18px 46px', gap: 28 }}>

      {/* Background decorations */}
      <div className="absolute" style={{ top: 18,  right: 22, pointerEvents: 'none' }}>
        <FloatingStar size={15} color="#D3968C" delay={0.2} />
      </div>
      <div className="absolute" style={{ bottom: 48, left: 40, pointerEvents: 'none' }}>
        <FloatingStar size={11} color="#839958" delay={1.0} />
      </div>
      <div className="absolute" style={{ top: 150, left: '46%', pointerEvents: 'none' }}>
        <FloatingStar size={10} color="#105666" delay={0.7} />
      </div>

      {/* ── LEFT — terminal contact ── */}
      <div className="flex flex-col gap-4 z-10" style={{ flex: '0 0 54%' }}>

        {/* Header */}
        <motion.div className="flex items-center gap-3"
          initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <FloatingStar size={16} color="#D3968C" />
          <span className="font-pixel text-dark-green" style={{ fontSize: 10, letterSpacing: 2 }}>GET IN TOUCH</span>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, type: 'spring', damping: 18, stiffness: 160 }}
          style={{ background: '#0A3323', border: '3px solid #F7F4D5', boxShadow: '6px 6px 0 #839958', borderRadius: 4, overflow: 'hidden' }}>

          {/* Title bar */}
          <div className="win-titlebar flex items-center gap-2 px-3" style={{ height: 32, borderBottom: '2px solid rgba(247,244,213,0.3)' }}>
            {['#D3968C','#839958','#105666'].map(c => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, border: '1.5px solid #0A3323' }} />
            ))}
            <span className="font-pixel" style={{ fontSize: 8, color: '#F7F4D5', marginLeft: 7 }}>
              C:\KRITI\contact.exe
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 13 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}>
              <span className="font-retro" style={{ fontSize: 19, color: '#839958' }}>
                {'>'} Open to full-time roles, research collaborations, and freelance ML projects.
              </span>
            </motion.div>

            {LINKS.map(({ label, prefix, href, display, color }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.34 + i * 0.08, type: 'spring', damping: 18, stiffness: 200 }}>
                <div className="flex items-baseline gap-2">
                  <span className="font-pixel" style={{ fontSize: 8, color: '#839958' }}>{prefix}</span>
                  <span className="font-pixel" style={{ fontSize: 8, color }}>[{label}]</span>
                </div>
                {href ? (
                  <motion.a href={href} target="_blank" rel="noreferrer" data-interactive
                    whileHover={{ x: 7 }} className="font-retro"
                    style={{ display: 'block', fontSize: 22, color, textDecoration: 'none', paddingLeft: 14, marginTop: 2, borderLeft: `2px solid ${color}44` }}>
                    {display} →
                  </motion.a>
                ) : (
                  <div className="font-retro" style={{ fontSize: 22, color, paddingLeft: 14, marginTop: 2, borderLeft: `2px solid ${color}44` }}>
                    {display}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Blinking cursor */}
            <motion.span className="font-pixel" style={{ fontSize: 10, color: '#839958' }}
              animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
              _
            </motion.span>
          </div>
        </motion.div>

        {/* Fun facts */}
        <motion.div className="flex flex-col gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <span className="font-pixel text-dark-green" style={{ fontSize: 8 }}>FUN FACTS</span>
          <div className="flex flex-wrap gap-2">
            {FUN_FACTS.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.64 + i * 0.07, type: 'spring', damping: 14, stiffness: 200 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                data-interactive
                style={{ padding: '6px 11px', background: '#F7F4D5', border: '2px solid #D3968C', boxShadow: '3px 3px 0 #D3968C', borderRadius: 3 }}>
                <span className="font-retro text-dark-green" style={{ fontSize: 18 }}>{f}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Computer stickers row */}
        <motion.div className="flex gap-4 items-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
          <div style={{ opacity: 0.7, pointerEvents: 'none' }}><PixelHeart size={0.85} color="#D3968C" /></div>
          <div style={{ opacity: 0.7, pointerEvents: 'none' }}><WiFiGlobe size={0.82} /></div>
          <div style={{ opacity: 0.7, pointerEvents: 'none' }}><FloppyDisk size={0.78} color="#105666" /></div>
        </motion.div>
      </div>

      {/* ── RIGHT — plant + decorations ── */}
      <div className="flex flex-col items-center justify-between flex-1 z-10">

        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, type: 'spring', damping: 12, stiffness: 180 }}
          style={{ alignSelf: 'flex-end', marginRight: 16 }}>
          <StarCluster />
        </motion.div>

        {/* Large plant */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', damping: 16, stiffness: 120 }}
          style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
            width: 190, height: 270,
            border: '2px dashed rgba(131,153,88,0.28)', borderRadius: 14, pointerEvents: 'none',
          }} />
          <PottedPlant width={170} height={230} />
          <div className="absolute" style={{ top: 12,  left: -24 }}><FloatingStar size={15} color="#D3968C" delay={0.35} /></div>
          <div className="absolute" style={{ top: 55,  right: -20 }}><FloatingStar size={12} color="#839958" delay={1.0} /></div>
          <div className="absolute" style={{ bottom: 44, right: -28 }}><FloatingStar size={19} color="#105666" delay={0.65} /></div>
        </motion.div>

        {/* Tagline */}
        <motion.div className="flex items-center gap-2"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          style={{ marginBottom: 10 }}>
          <FloatingStar size={10} color="#839958" delay={0.5} />
          <span className="font-retro" style={{ fontSize: 24, color: '#105666' }}>
            open to collaborations!
          </span>
          <FloatingStar size={10} color="#D3968C" delay={1.1} />
        </motion.div>
      </div>

      {/* Watermark */}
      <div className="absolute font-pixel select-none pointer-events-none"
        style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)', fontSize: 7, color: 'rgba(10,51,35,0.08)', letterSpacing: 5, whiteSpace: 'nowrap' }}>
        KRITI RAJ — AI & ML PORTFOLIO — 2025
      </div>
    </div>
  );
}
