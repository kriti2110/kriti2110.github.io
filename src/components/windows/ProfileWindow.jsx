import { AnimeGirl, FloatingStar, Cloud } from '../svg/Illustrations';
import { personal } from '../../data/resumeData';

export function ProfileWindow() {
  return (
    <div className="flex flex-col gap-3">
      {/* Clouds decoration */}
      <div className="flex gap-3 items-end opacity-75">
        <Cloud width={80}  height={45} delay={0} />
        <Cloud width={60}  height={35} delay={1.5} />
      </div>

      {/* Avatar + info */}
      <div className="flex items-start gap-3">
        {/* Anime girl + stars */}
        <div className="relative flex-shrink-0">
          <AnimeGirl width={120} height={143} />
          <div className="absolute -top-2 -right-2">
            <FloatingStar size={16} color="#D3968C" delay={0} />
          </div>
          <div className="absolute bottom-4 -left-3">
            <FloatingStar size={12} color="#839958" delay={0.6} />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-2 pt-1">
          <div>
            <div className="font-pixel text-dark-green leading-snug" style={{ fontSize: 9 }}>
              {personal.name}
            </div>
            <div
              className="font-retro mt-1 text-midnight"
              style={{ fontSize: 17, lineHeight: 1.2 }}
            >
              {personal.role}
            </div>
          </div>

          {/* Stats stickers */}
          {[
            ['5+', 'Hackathons'],
            ['3', 'Internships'],
            ['0.921', 'AUROC'],
          ].map(([v, l]) => (
            <div
              key={l}
              className="flex items-center gap-2 px-2 py-1 rounded"
              style={{
                background: '#E8E3C0',
                border: '2px solid #0A3323',
                boxShadow: '2px 2px 0 #0A3323',
              }}
            >
              <span className="font-pixel text-moss" style={{ fontSize: 8 }}>{v}</span>
              <span className="font-retro text-dark-green" style={{ fontSize: 14 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bio text */}
      <div
        className="font-retro text-dark-green leading-relaxed px-2 py-2 rounded"
        style={{ fontSize: 16, background: '#E8E3C0', border: '2px solid #839958' }}
      >
        {personal.bio}
      </div>

      {/* Location badge */}
      <div className="flex items-center gap-2">
        <FloatingStar size={10} color="#D3968C" />
        <span className="font-pixel" style={{ fontSize: 6, color: '#105666' }}>
          📍 {personal.location}
        </span>
      </div>
    </div>
  );
}
