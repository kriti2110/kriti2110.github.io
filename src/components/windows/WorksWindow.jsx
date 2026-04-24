import { motion } from 'framer-motion';
import { FloatingStar } from '../svg/Illustrations';
import { projects } from '../../data/resumeData';

const TILTS = [-2.5, 1.8, -1.2];

export function WorksWindow() {
  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <FloatingStar size={14} color="#105666" />
        <span className="font-pixel text-dark-green" style={{ fontSize: 7 }}>
          SELECTED WORKS
        </span>
      </div>

      {/* Project sticker cards */}
      <div className="flex flex-col gap-3">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, x: -20, rotate: TILTS[i] - 4 }}
            animate={{ opacity: 1, x: 0, rotate: TILTS[i] }}
            transition={{ type: 'spring', damping: 10, stiffness: 180, delay: i * 0.12 }}
            whileHover={{
              rotate: [TILTS[i], TILTS[i] + 3, TILTS[i] - 3, TILTS[i]],
              y: -3,
              transition: { duration: 0.4 },
            }}
            style={{
              background: '#F7F4D5',
              border: `3px solid ${proj.color}`,
              boxShadow: `4px 4px 0 ${proj.color}`,
              borderRadius: 3,
              padding: '8px 10px',
              position: 'relative',
            }}
          >
            {/* Corner accent */}
            <div
              style={{
                position: 'absolute', top: -2, right: -2,
                width: 12, height: 12, background: proj.color,
                borderRadius: '0 3px 0 4px',
              }}
            />

            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-pixel text-dark-green" style={{ fontSize: 7 }}>
                  {proj.title}
                </div>
                <div
                  className="font-retro mt-0.5"
                  style={{ fontSize: 13, color: proj.color }}
                >
                  {proj.subtitle}
                </div>
              </div>
              <div
                className="font-pixel text-white px-1.5 py-0.5 flex-shrink-0"
                style={{
                  fontSize: 5.5,
                  background: proj.color,
                  border: '2px solid #0A3323',
                  borderRadius: 2,
                }}
              >
                {proj.metric}
              </div>
            </div>

            <p className="font-retro text-dark-green mt-1" style={{ fontSize: 14, lineHeight: 1.3 }}>
              {proj.desc}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {proj.tech.map(t => (
                <span
                  key={t}
                  className="font-pixel"
                  style={{
                    fontSize: 5,
                    color: proj.color,
                    border: `1.5px solid ${proj.color}`,
                    background: `${proj.color}18`,
                    borderRadius: 2,
                    padding: '1px 4px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
