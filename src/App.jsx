import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cursor }      from './components/cursor/Cursor';
import { SparkleTrail } from './components/cursor/SparkleTrail';
import { NavBar }      from './components/layout/NavBar';
import { HeroPage }    from './components/pages/HeroPage';
import { WorksPage }   from './components/pages/WorksPage';
import { JourneyPage } from './components/pages/JourneyPage';
import { SkillsPage }  from './components/pages/SkillsPage';
import { ContactPage } from './components/pages/ContactPage';

const PAGES = [HeroPage, WorksPage, JourneyPage, SkillsPage, ContactPage];

const NAV_H = 52;

// 3D flip variants — rotateY requires perspective on parent
const variants = {
  initial: (dir) => ({
    rotateY: dir > 0 ? 52 : -52,
    opacity: 0,
    scale: 0.90,
    filter: 'blur(3px)',
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 200,
      mass: 0.8,
    },
  },
  exit: (dir) => ({
    rotateY: dir > 0 ? -52 : 52,
    opacity: 0,
    scale: 0.90,
    filter: 'blur(3px)',
    transition: { duration: 0.32, ease: [0.4, 0, 1, 1] },
  }),
};

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (newIndex) => {
    if (newIndex === pageIndex) return;
    setDirection(newIndex > pageIndex ? 1 : -1);
    setPageIndex(newIndex);
  };

  const PageComponent = PAGES[pageIndex];

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#F7F4D5' }}>
      {/* Fixed navbar */}
      <NavBar pageIndex={pageIndex} navigate={navigate} />

      {/* 3D perspective container — must be on parent, not the rotating element */}
      <div
        style={{
          position: 'absolute',
          top: NAV_H, left: 0, right: 0, bottom: 0,
          perspective: '1400px',
          perspectiveOrigin: '50% 50%',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={pageIndex}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'absolute',
              inset: 0,
              transformStyle: 'preserve-3d',
              transformOrigin: 'center center',
            }}
          >
            <PageComponent navigate={navigate} pageIndex={pageIndex} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cursor — guaranteed above everything */}
      <Cursor />
      <SparkleTrail />
    </div>
  );
}
