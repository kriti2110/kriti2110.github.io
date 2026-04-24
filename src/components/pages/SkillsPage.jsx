import { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingStar } from '../svg/Illustrations';
import { ToolsScene } from '../three/ToolsScene';
import { CodeBracket, PixelHeart } from '../svg/ComputerStickers';

const SKILL_GROUPS = [
  {
    title: 'LANGUAGES',
    color: '#839958',
    skills: [
      { name: 'Python',      pct: 95 },
      { name: 'SQL',         pct: 82 },
      { name: 'R',           pct: 70 },
      { name: 'JavaScript',  pct: 60 },
      { name: 'Bash/Shell',  pct: 68 },
    ],
  },
  {
    title: 'ML / DL',
    color: '#105666',
    skills: [
      { name: 'PyTorch',     pct: 88 },
      { name: 'Scikit-learn',pct: 90 },
      { name: 'XGBoost',     pct: 92 },
      { name: 'SHAP/LIME',   pct: 85 },
      { name: 'OpenCV',      pct: 72 },
    ],
  },
  {
    title: 'FRAMEWORKS',
    color: '#D3968C',
    skills: [
      { name: 'Flask',       pct: 84 },
      { name: 'Streamlit',   pct: 88 },
      { name: 'FastAPI',     pct: 76 },
      { name: 'Pandas',      pct: 93 },
      { name: 'NumPy',       pct: 90 },
    ],
  },
  {
    title: 'CLOUD & INFRA',
    color: '#0A3323',
    skills: [
      { name: 'GCP',         pct: 78 },
      { name: 'Docker',      pct: 74 },
      { name: 'GitHub',      pct: 90 },
      { name: 'BigQuery',    pct: 72 },
      { name: 'Vertex AI',   pct: 68 },
    ],
  },
];

function SkillBar({ name, pct, color, delay }) {
  return (
    <motion.div className="flex flex-col gap-1"
      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}>
      <div className="flex justify-between items-center">
        <span className="font-pixel text-dark-green" style={{ fontSize: 7 }}>{name}</span>
        <span className="font-pixel" style={{ fontSize: 7, color }}>{pct}%</span>
      </div>
      <div style={{ height: 9, background: `${color}20`, border: `1.5px solid ${color}`, borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', background: color, borderRadius: 1 }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ delay: delay + 0.15, duration: 0.75, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsPage() {
  const [scattered, setScattered] = useState(false);

  return (
    <div className="gingham relative w-full h-full flex flex-col overflow-hidden"
      style={{ padding: '20px 28px 14px 28px' }}>

      {/* Header */}
      <motion.div className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <FloatingStar size={16} color="#839958" />
        <span className="font-pixel text-dark-green" style={{ fontSize: 10, letterSpacing: 2 }}>TOOLS & SKILLS</span>
        <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg,#839958,transparent)' }} />
        <div style={{ opacity: 0.7, pointerEvents: 'none' }}><CodeBracket size={0.7} /></div>
      </motion.div>

      {/* Main: left skill bars + right 3D scene */}
      <div className="flex gap-4 flex-1" style={{ minHeight: 0 }}>

        {/* ── LEFT — 4 quadrants ── */}
        <div className="grid grid-cols-2 gap-3" style={{ flex: '0 0 58%' }}>
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div key={group.title}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + gi * 0.08, type: 'spring', damping: 16, stiffness: 180 }}
              style={{
                background: '#F7F4D5', border: `2.5px solid ${group.color}`,
                boxShadow: `4px 4px 0 ${group.color}`, borderRadius: 4,
                padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8,
              }}>
              {/* Quadrant header */}
              <div className="flex items-center gap-2">
                <div style={{ width: 11, height: 11, background: group.color, borderRadius: 2, border: '1.5px solid #0A3323' }} />
                <span className="font-pixel text-dark-green" style={{ fontSize: 8 }}>{group.title}</span>
              </div>
              {/* Bars */}
              <div className="flex flex-col gap-2.5">
                {group.skills.map((sk, si) => (
                  <SkillBar key={sk.name} name={sk.name} pct={sk.pct} color={group.color}
                    delay={0.12 + gi * 0.08 + si * 0.04} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── RIGHT — 3D scene + extra chips ── */}
        <div className="flex flex-col gap-3 flex-1" style={{ minHeight: 0 }}>
          <div className="flex items-center justify-between">
            <span className="font-pixel text-dark-green" style={{ fontSize: 8 }}>3D TOOL VIEWER</span>
            <motion.button
              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.93 }}
              onClick={() => setScattered(s => !s)} data-interactive className="font-pixel"
              style={{ fontSize: 8, padding: '5px 11px', background: scattered ? '#D3968C' : '#839958', color: 'white', border: '2px solid #0A3323', boxShadow: '2px 2px 0 #0A3323', borderRadius: 2, cursor: 'none' }}>
              {scattered ? 'CLUSTER' : 'SCATTER'}
            </motion.button>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ flex: '0 0 220px', border: '2.5px solid #0A3323', borderRadius: 4, overflow: 'hidden', boxShadow: 'inset 2px 2px 0 rgba(10,51,35,0.1)' }}>
            <ToolsScene scattered={scattered} />
          </motion.div>

          {/* Also familiar */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-pixel text-dark-green" style={{ fontSize: 8 }}>ALSO KNOW</span>
              <div style={{ flex: 1, height: 1.5, background: 'rgba(10,51,35,0.12)' }} />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Hugging Face','LangChain','LIME','NLTK','Matplotlib','Seaborn','Plotly',
                'Jupyter','Figma','LaTeX','Excel','Tableau','MongoDB','VS Code'].map((t, i) => (
                <motion.span key={t}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.025 }}
                  className="font-pixel"
                  style={{ fontSize: 8, padding: '3px 8px', border: '1.5px solid #0A3323', color: '#0A3323', background: 'rgba(10,51,35,0.06)', borderRadius: 2 }}>
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <div style={{ opacity: 0.7, pointerEvents: 'none' }}><PixelHeart size={0.8} color="#839958" /></div>
            <p className="font-retro text-center" style={{ fontSize: 18, color: '#839958' }}>
              ✦ click SCATTER to toss the 3D shapes ✦
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
