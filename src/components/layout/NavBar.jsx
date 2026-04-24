import { motion } from 'framer-motion';
import { FloatingStar } from '../svg/Illustrations';

const PAGES = ['HOME', 'WORKS', 'JOURNEY', 'SKILLS', 'CONTACT'];

export function NavBar({ pageIndex, navigate }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 52,
        background: 'linear-gradient(90deg, #839958 0%, #105666 55%, #0A3323 100%)',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        borderBottom: '3px solid #0A3323',
        boxShadow: '0 3px 0 rgba(10,51,35,0.45)',
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <FloatingStar size={13} color="#F7F4D5" delay={0} />
        <span className="font-pixel" style={{ fontSize: 7, color: '#F7F4D5', letterSpacing: 1 }}>
          KRITI.OS
        </span>
      </div>

      {/* Page dots */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {PAGES.map((name, i) => (
          <motion.button
            key={name}
            onClick={() => navigate(i)}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.85 }}
            data-interactive
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              background: 'none', border: 'none', padding: '2px 4px', cursor: 'none',
            }}
          >
            <div
              style={{
                width:  i === pageIndex ? 11 : 7,
                height: i === pageIndex ? 11 : 7,
                borderRadius: '50%',
                background: i === pageIndex ? '#F7F4D5' : 'rgba(247,244,213,0.3)',
                border: `1.5px solid ${i === pageIndex ? '#F7F4D5' : 'rgba(247,244,213,0.4)'}`,
                boxShadow: i === pageIndex ? '0 0 8px #F7F4D5' : 'none',
                transition: 'all 0.25s',
              }}
            />
            <span
              className="font-pixel"
              style={{
                fontSize: 7,
                color: i === pageIndex ? '#F7F4D5' : 'rgba(247,244,213,0.5)',
                transition: 'color 0.25s',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </span>
          </motion.button>
        ))}
      </div>

      {/* PREV / NEXT */}
      <div style={{ display: 'flex', gap: 8 }}>
        {[
          { label: '◄ PREV', dis: pageIndex === 0,            go: () => navigate(pageIndex - 1) },
          { label: 'NEXT ►', dis: pageIndex === PAGES.length - 1, go: () => navigate(pageIndex + 1) },
        ].map(({ label, dis, go }) => (
          <motion.button
            key={label}
            onClick={dis ? undefined : go}
            whileHover={!dis ? { scale: 1.08 } : {}}
            whileTap={!dis ? { scale: 0.92 } : {}}
            data-interactive
            className="font-pixel"
            style={{
              fontSize: 7,
              background: dis ? 'rgba(247,244,213,0.08)' : 'rgba(247,244,213,0.9)',
              color:      dis ? 'rgba(247,244,213,0.22)' : '#0A3323',
              border: `2px solid ${dis ? 'rgba(247,244,213,0.12)' : 'rgba(247,244,213,0.9)'}`,
              borderRadius: 3,
              padding: '5px 10px',
              cursor: 'none',
            }}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
