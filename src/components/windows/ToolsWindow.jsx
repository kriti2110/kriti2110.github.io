import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToolsScene } from '../three/ToolsScene';
import { PythonIcon, FigmaIcon, ExcelIcon, GitHubIcon, FlaskIcon, GCPIcon } from '../svg/ToolIcons';
import { FloatingStar } from '../svg/Illustrations';

const ICONS = [
  { name: 'Python',  Icon: PythonIcon },
  { name: 'Figma',   Icon: FigmaIcon  },
  { name: 'Excel',   Icon: ExcelIcon  },
  { name: 'GitHub',  Icon: GitHubIcon },
  { name: 'Flask',   Icon: FlaskIcon  },
  { name: 'GCP',     Icon: GCPIcon    },
];

export function ToolsWindow() {
  const [scattered, setScattered] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FloatingStar size={13} color="#D3968C" />
          <span className="font-pixel text-dark-green" style={{ fontSize: 7 }}>
            TOOLS & STACK
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setScattered(s => !s)}
          data-interactive
          className="font-pixel"
          style={{
            fontSize: 5.5,
            padding: '3px 7px',
            background: scattered ? '#D3968C' : '#839958',
            color: 'white',
            border: '2px solid #0A3323',
            boxShadow: '2px 2px 0 #0A3323',
            borderRadius: 2,
          }}
        >
          {scattered ? 'CLUSTER' : 'SCATTER'}
        </motion.button>
      </div>

      {/* 3D canvas — interactive shapes scatter on button press */}
      <div
        style={{
          border: '2px solid #0A3323',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 'inset 2px 2px 0 rgba(10,51,35,0.1)',
        }}
      >
        <ToolsScene scattered={scattered} />
      </div>

      {/* Flat SVG icon row below the canvas */}
      <div className="flex flex-wrap justify-center gap-3 py-1">
        {ICONS.map(({ name, Icon }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center gap-1"
            whileHover={{ y: -4, rotate: [-1, 1, -1, 0], transition: { duration: 0.3 } }}
            data-interactive
          >
            <div
              style={{
                padding: 5,
                background: '#F7F4D5',
                border: '2px solid #0A3323',
                boxShadow: '2px 2px 0 #0A3323',
                borderRadius: 4,
              }}
            >
              <Icon size={30} />
            </div>
            <span className="font-pixel text-dark-green" style={{ fontSize: 5 }}>{name}</span>
          </motion.div>
        ))}
      </div>

      {/* Tip */}
      <p className="font-retro text-center" style={{ fontSize: 13, color: '#839958' }}>
        ✦ click SCATTER to play with the 3D shapes ✦
      </p>
    </div>
  );
}
