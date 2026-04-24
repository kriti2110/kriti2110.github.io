import { useState, useRef } from 'react';
import { RetroWindow }    from './RetroWindow';
import { Taskbar }        from './Taskbar';
import { ProfileWindow }  from '../windows/ProfileWindow';
import { WorksWindow }    from '../windows/WorksWindow';
import { ToolsWindow }    from '../windows/ToolsWindow';
import { ContactWindow }  from '../windows/ContactWindow';
import { FloatingStar, Cloud, StarCluster } from '../svg/Illustrations';

// ── Window definitions — position, size, tilt, content ───────────────────────
const WINDOW_DEFS = [
  {
    id:      'profile',
    title:   'C:\\KRITI\\profile.exe',
    x: 50,   y: 45,
    width:   360,
    tilt:    -1.4,
    delay:   0.05,
    content: <ProfileWindow />,
  },
  {
    id:      'works',
    title:   'C:\\KRITI\\works.exe',
    x: 450,  y: 38,
    width:   390,
    tilt:    0.9,
    delay:   0.15,
    content: <WorksWindow />,
  },
  {
    id:      'tools',
    title:   'C:\\KRITI\\tools.exe',
    x: 72,   y: 455,
    width:   360,
    tilt:    -0.6,
    delay:   0.25,
    content: <ToolsWindow />,
  },
  {
    id:      'contact',
    title:   'C:\\KRITI\\contact.txt',
    x: 460,  y: 450,
    width:   290,
    tilt:    1.6,
    delay:   0.35,
    content: <ContactWindow />,
  },
];

export function Desktop() {
  const desktopRef = useRef();

  const [windows, setWindows] = useState(
    WINDOW_DEFS.map((w, i) => ({ ...w, zIndex: 10 + i, isMinimized: false }))
  );

  const bringToFront = (id) => {
    setWindows(prev => {
      const max = Math.max(...prev.map(w => w.zIndex));
      return prev.map(w => w.id === id ? { ...w, zIndex: max + 1 } : w);
    });
  };

  const minimize = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
  };

  const restore = (id) => {
    setWindows(prev => {
      const max = Math.max(...prev.map(w => w.zIndex));
      return prev.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: max + 1 } : w);
    });
  };

  return (
    <div
      ref={desktopRef}
      className="gingham relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 38px)' }}
    >
      {/* ── Desktop decorative elements ── */}

      {/* Top-right clouds */}
      <div className="absolute" style={{ top: 12, right: 20, opacity: 0.7, pointerEvents: 'none' }}>
        <Cloud width={120} height={65} delay={0} />
      </div>
      <div className="absolute" style={{ top: 55, right: 160, opacity: 0.55, pointerEvents: 'none' }}>
        <Cloud width={80} height={45} delay={2} />
      </div>

      {/* Corner star clusters */}
      <div className="absolute" style={{ bottom: 50, right: 22, pointerEvents: 'none' }}>
        <StarCluster />
      </div>
      <div className="absolute" style={{ top: 18, left: 22, pointerEvents: 'none' }}>
        <FloatingStar size={20} color="#839958" delay={0.4} />
      </div>
      <div className="absolute" style={{ bottom: 60, left: 430, pointerEvents: 'none' }}>
        <FloatingStar size={16} color="#D3968C" delay={1.1} />
      </div>
      <div className="absolute" style={{ top: 180, right: 435, pointerEvents: 'none' }}>
        <FloatingStar size={12} color="#105666" delay={0.7} />
      </div>

      {/* Subtle "wallpaper" text watermark */}
      <div
        className="absolute font-pixel select-none pointer-events-none"
        style={{
          bottom: 55, left: '50%', transform: 'translateX(-50%)',
          fontSize: 6, color: 'rgba(10,51,35,0.12)', letterSpacing: 4,
          whiteSpace: 'nowrap',
        }}
      >
        KRITI RAJ — AI & ML PORTFOLIO — 2025
      </div>

      {/* ── Windows ── */}
      {windows.map(win => (
        <RetroWindow
          key={win.id}
          id={win.id}
          title={win.title}
          initialX={win.x}
          initialY={win.y}
          width={win.width}
          tilt={win.tilt}
          zIndex={win.zIndex}
          isMinimized={win.isMinimized}
          onFocus={() => bringToFront(win.id)}
          onMinimize={() => minimize(win.id)}
          constraintsRef={desktopRef}
          delay={win.delay}
        >
          {win.content}
        </RetroWindow>
      ))}

      {/* ── Taskbar ── */}
      <Taskbar windows={windows} onRestore={restore} />
    </div>
  );
}
