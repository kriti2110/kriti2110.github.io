import { motion } from 'framer-motion';
import { PottedPlant, FloatingStar } from '../svg/Illustrations';
import { personal } from '../../data/resumeData';

export function ContactWindow() {
  return (
    <div className="flex flex-col items-center gap-3 py-1">
      {/* Plant illustration */}
      <div className="relative">
        <PottedPlant width={90} height={120} />
        <div className="absolute top-2 right-0">
          <FloatingStar size={14} color="#105666" delay={0.3} />
        </div>
        <div className="absolute top-0 -left-3">
          <FloatingStar size={10} color="#D3968C" delay={1} />
        </div>
      </div>

      {/* Section title */}
      <div className="font-pixel text-dark-green text-center" style={{ fontSize: 7 }}>
        GET IN TOUCH
      </div>

      {/* Contact links */}
      <div className="flex flex-col gap-2 w-full">
        {[
          { label: 'EMAIL',    href: `mailto:${personal.email}`,  val: personal.email,         color: '#D3968C' },
          { label: 'LINKEDIN', href: personal.linkedin,           val: 'linkedin.com/in/kriti', color: '#105666' },
          { label: 'GITHUB',   href: personal.github,             val: 'github.com/username',   color: '#839958' },
        ].map(({ label, href, val, color }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            data-interactive
            whileHover={{ x: 4, rotate: [0, 0.5, -0.5, 0], transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-3 py-2 no-underline"
            style={{
              background: '#F7F4D5',
              border: `2px solid ${color}`,
              boxShadow: `3px 3px 0 ${color}`,
              borderRadius: 3,
              textDecoration: 'none',
            }}
          >
            <span className="font-pixel" style={{ fontSize: 5.5, color }}>
              {label}
            </span>
            <span className="font-retro text-dark-green truncate" style={{ fontSize: 14 }}>
              {val}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Fun tagline */}
      <div className="flex items-center gap-1">
        <FloatingStar size={9} color="#839958" delay={0.5} />
        <span className="font-retro text-moss text-center" style={{ fontSize: 14 }}>
          open to collaborations!
        </span>
        <FloatingStar size={9} color="#D3968C" delay={1} />
      </div>
    </div>
  );
}
