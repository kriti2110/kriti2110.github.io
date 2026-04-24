import { motion } from 'framer-motion';
import { FloatingStar } from '../svg/Illustrations';
import { PixelComputer, FloppyDisk } from '../svg/ComputerStickers';
import { experience } from '../../data/resumeData';

const EXP_COLORS = ['#105666', '#839958', '#D3968C'];

const EDUCATION = {
  school: 'KIIT University, Bhubaneswar',
  degree: 'B.Tech — Computer Science & Engineering',
  period: '2022 – 2026',
  note:   'Specialisation: AI & ML  ·  GPA 8.4/10  ·  Relevant: ML Theory, CV, NLP, Stats',
  color:  '#839958',
};

const ACHIEVEMENTS = [
  { icon: '🏆', text: 'Smart India Hackathon Finalist 2023' },
  { icon: '🌟', text: 'Top 5% at inter-college AI challenge' },
  { icon: '📄', text: 'Research contributor — NICU time-series analysis' },
  { icon: '🚀', text: 'GCP-deployed solar forecasting API (live research use)' },
];

export function JourneyPage() {
  return (
    <div className="gingham relative w-full h-full flex flex-col overflow-hidden"
      style={{ padding: '20px 28px 14px 28px' }}>

      {/* Header */}
      <motion.div className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <FloatingStar size={16} color="#D3968C" />
        <span className="font-pixel text-dark-green" style={{ fontSize: 10, letterSpacing: 2 }}>MY JOURNEY</span>
        <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg,#D3968C,transparent)' }} />
        <div style={{ opacity: 0.65, pointerEvents: 'none' }}><FloppyDisk size={0.7} color="#D3968C" /></div>
      </motion.div>

      {/* Main layout */}
      <div className="flex gap-5 flex-1" style={{ minHeight: 0 }}>

        {/* ── LEFT — decorative timeline ── */}
        <div style={{ flex: '0 0 196px', position: 'relative', paddingTop: 8 }}>
          {/* Vertical gradient line */}
          <div style={{
            position: 'absolute', left: 28, top: 8, bottom: 8, width: 3,
            background: 'linear-gradient(180deg, #839958, #105666, #D3968C, #839958)',
            borderRadius: 2,
          }} />

          {[
            { year: '2025', label: 'LATEST',  color: '#839958', top: 20  },
            { year: '2024', label: 'ONGOING', color: '#105666', top: 110 },
            { year: '2023', label: 'GRIND',   color: '#D3968C', top: 196 },
            { year: '2022', label: 'STARTED', color: '#839958', top: 286 },
          ].map(({ year, label, color, top }, i) => (
            <motion.div key={year} className="absolute" style={{ left: 0, top }}
              initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.09, type: 'spring', damping: 16, stiffness: 180 }}>
              <div style={{
                position: 'absolute', left: 20, top: 6,
                width: 18, height: 18, borderRadius: '50%',
                background: color, border: '2.5px solid #0A3323',
                boxShadow: `0 0 9px ${color}55`, zIndex: 1,
              }} />
              <div style={{
                marginLeft: 46, padding: '5px 10px',
                background: '#F7F4D5', border: `2px solid ${color}`,
                boxShadow: `3px 3px 0 ${color}`, borderRadius: 3, width: 128,
              }}>
                <div className="font-pixel text-dark-green" style={{ fontSize: 10 }}>{year}</div>
                <div className="font-pixel" style={{ fontSize: 7, color, marginTop: 2 }}>{label}</div>
              </div>
            </motion.div>
          ))}

          {/* Sticker */}
          <div className="absolute" style={{ right: 4, bottom: 90, pointerEvents: 'none', opacity: 0.7 }}>
            <PixelComputer size={0.72} />
          </div>
          <div className="absolute" style={{ right: 10, top: 20, pointerEvents: 'none' }}>
            <FloatingStar size={13} color="#839958" delay={0.4} />
          </div>
          <div className="absolute" style={{ right: 4, bottom: 40, pointerEvents: 'none' }}>
            <FloatingStar size={10} color="#D3968C" delay={1.3} />
          </div>
        </div>

        {/* ── RIGHT — cards ── */}
        <div className="flex flex-col gap-3 flex-1" style={{ minHeight: 0, overflowY: 'auto' }}>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-pixel text-dark-green" style={{ fontSize: 8, letterSpacing: 1 }}>WORK EXPERIENCE</span>
              <div style={{ flex: 1, height: 1.5, background: 'rgba(10,51,35,0.15)' }} />
            </div>

            <div className="flex flex-col gap-2.5">
              {experience.map((exp, i) => (
                <motion.div key={exp.co}
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.10, type: 'spring', damping: 16, stiffness: 180 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  data-interactive
                  style={{
                    background: '#F7F4D5', border: `2.5px solid ${EXP_COLORS[i]}`,
                    boxShadow: `4px 4px 0 ${EXP_COLORS[i]}`, borderRadius: 3,
                    padding: '10px 14px', position: 'relative', overflow: 'hidden',
                  }}>
                  {/* Accent bar */}
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: EXP_COLORS[i] }} />

                  <div className="flex justify-between items-start" style={{ paddingLeft: 9 }}>
                    <div>
                      <div className="font-pixel text-dark-green" style={{ fontSize: 9 }}>{exp.co}</div>
                      <div className="font-retro" style={{ fontSize: 20, color: EXP_COLORS[i], marginTop: 2 }}>{exp.role}</div>
                    </div>
                    <div className="font-pixel" style={{ fontSize: 8, padding: '3px 9px', background: EXP_COLORS[i], color: '#F7F4D5', border: '1.5px solid #0A3323', borderRadius: 2, whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {exp.period}
                    </div>
                  </div>

                  <p className="font-retro text-dark-green" style={{ fontSize: 17, marginTop: 5, paddingLeft: 9, lineHeight: 1.5 }}>
                    {exp.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-2" style={{ paddingLeft: 9 }}>
                    {exp.tags.map(t => (
                      <span key={t} className="font-pixel"
                        style={{ fontSize: 7, padding: '2px 7px', color: EXP_COLORS[i], border: `1.5px solid ${EXP_COLORS[i]}`, background: `${EXP_COLORS[i]}12`, borderRadius: 2 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-pixel text-dark-green" style={{ fontSize: 8, letterSpacing: 1 }}>EDUCATION</span>
              <div style={{ flex: 1, height: 1.5, background: 'rgba(10,51,35,0.15)' }} />
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.44, type: 'spring', damping: 16, stiffness: 180 }}
              style={{ background: '#F7F4D5', border: `2.5px solid ${EDUCATION.color}`, boxShadow: `4px 4px 0 ${EDUCATION.color}`, borderRadius: 3, padding: '10px 14px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: EDUCATION.color }} />
              <div className="flex justify-between items-start" style={{ paddingLeft: 9 }}>
                <div>
                  <div className="font-pixel text-dark-green" style={{ fontSize: 9 }}>{EDUCATION.school}</div>
                  <div className="font-retro" style={{ fontSize: 20, color: EDUCATION.color, marginTop: 2 }}>{EDUCATION.degree}</div>
                </div>
                <div className="font-pixel" style={{ fontSize: 8, padding: '3px 9px', background: EDUCATION.color, color: '#F7F4D5', border: '1.5px solid #0A3323', borderRadius: 2, whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {EDUCATION.period}
                </div>
              </div>
              <p className="font-retro text-dark-green" style={{ fontSize: 17, marginTop: 5, paddingLeft: 9 }}>
                ✦ {EDUCATION.note}
              </p>
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-pixel text-dark-green" style={{ fontSize: 8, letterSpacing: 1 }}>HIGHLIGHTS</span>
              <div style={{ flex: 1, height: 1.5, background: 'rgba(10,51,35,0.15)' }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.52 + i * 0.07, type: 'spring', damping: 14, stiffness: 200 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  data-interactive
                  style={{ padding: '7px 12px', background: '#F7F4D5', border: '2px solid #0A3323', boxShadow: '3px 3px 0 #0A3323', borderRadius: 3, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 17 }}>{ach.icon}</span>
                  <span className="font-retro text-dark-green" style={{ fontSize: 18 }}>{ach.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
