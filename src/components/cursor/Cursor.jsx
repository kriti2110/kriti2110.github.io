import { useEffect, useRef } from 'react';

export function Cursor() {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);

  useEffect(() => {
    const mouse  = { x: -200, y: -200 };
    const ring   = { x: -200, y: -200 };
    const dot    = { x: -200, y: -200 };
    let rotation = 0;
    let hovered  = false;
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const enter = () => { hovered = true;  };
    const leave = () => { hovered = false; };

    document.addEventListener('mousemove', onMove, { passive: true });

    const bindHovers = () => {
      document.querySelectorAll('a, button, [data-interactive]').forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    bindHovers();

    const observer = new MutationObserver(bindHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.10;
      ring.y += (mouse.y - ring.y) * 0.10;
      dot.x  += (mouse.x - dot.x)  * 0.40;
      dot.y  += (mouse.y - dot.y)  * 0.40;
      rotation += 2.4;

      const s = hovered ? 1.7 : 1;

      if (ringRef.current)
        ringRef.current.style.transform =
          `translate(${ring.x - 20}px, ${ring.y - 20}px) rotate(${rotation}deg) scale(${s})`;

      if (dotRef.current)
        dotRef.current.style.transform =
          `translate(${dot.x - 5}px, ${dot.y - 5}px) scale(${hovered ? 0.5 : 1})`;

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Spinning dashed ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 40, height: 40,
          borderRadius: '50%',
          border: '2.5px dashed #839958',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 8px rgba(131,153,88,0.5)',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 10, height: 10,
          borderRadius: '50%',
          background: '#D3968C',
          border: '2px solid #0A3323',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 5px rgba(211,150,140,0.7)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
