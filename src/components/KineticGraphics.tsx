import React, { useState } from 'react';
import { FLYWHEEL_NODES, FlywheelNode } from '../data/jaiklaData';

interface SmartCampaignImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  overlayIntensity?: 'subtle' | 'medium' | 'deep';
  eager?: boolean;
}

export const SmartCampaignImage: React.FC<SmartCampaignImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  imgClassName = '',
  overlayIntensity = 'medium',
  eager = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  const overlayClass =
    overlayIntensity === 'subtle'
      ? 'bg-[#4B1FD6]/8'
      : overlayIntensity === 'deep'
      ? 'bg-[#4B1FD6]/16'
      : 'bg-[#5B1FA6]/12';

  return (
    <div className={`relative overflow-hidden bg-[#141418] ${className}`}>
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={eager ? 'eager' : 'lazy'}
          onError={handleError}
          className={`w-full h-full object-cover jaikla-photo-grade ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#16161D] via-[#121215] to-[#231442] text-center">
          <svg
            viewBox="0 0 120 48"
            className="w-24 h-10 mb-3 text-[#7C3AED] opacity-75"
            fill="none"
          >
            <path
              d="M6 38 C 34 38, 42 10, 72 18 C 92 23, 102 8, 114 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="72" cy="18" r="3.5" fill="#EBDDFF" />
          </svg>
          <span className="text-xs font-mono-tabular text-[#EBDDFF]/70">{alt}</span>
        </div>
      )}
      {/* 5-18% subtle purple atmospheric overlay as specified in Brand Color System */}
      <div className={`pointer-events-none absolute inset-0 mix-blend-Soft-light ${overlayClass}`} />
      {/* Measured contrast scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/35 to-transparent" />
    </div>
  );
};

export const JaiklaSymbolMark: React.FC<{
  className?: string;
  variant?: 'color' | 'white' | 'black';
}> = ({ className = 'w-8 h-7', variant = 'color' }) => {
  const gradId = React.useId();
  const fillPrimary =
    variant === 'white'
      ? '#F8F8FA'
      : variant === 'black'
      ? '#111111'
      : `url(#${gradId}-upper)`;
  const fillSecondary =
    variant === 'white'
      ? '#F8F8FA'
      : variant === 'black'
      ? '#111111'
      : `url(#${gradId}-lower)`;

  return (
    <svg
      viewBox="0 0 120 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {variant === 'color' && (
        <defs>
          <linearGradient id={`${gradId}-upper`} x1="8" y1="84" x2="82" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4B1FD6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id={`${gradId}-lower`} x1="35" y1="74" x2="112" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5B1FA6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      )}
      {/* Official PDF Upper/Left Sweeping Crescent Ribbon */}
      <path
        d="M 8 84 C 23 61, 43 13, 63 11 C 72 10, 78 16, 82 24 C 73 19, 63 21, 52 36 C 40 52, 29 71, 22 84 Z"
        fill={fillPrimary}
      />
      {/* Official PDF Lower/Right Arching Ribbon */}
      <path
        d="M 36 71 C 46 51, 58 29, 71 28 C 83 27, 96 51, 113 80 L 96 80 C 84 64, 74 52, 62 52 C 52 52, 43 60, 36 71 Z"
        fill={fillSecondary}
      />
    </svg>
  );
};

/**
 * Precision Vector Wordmark for "J Λ I K L Λ" matching the original PDF Brand Sheet.
 * - "J": Pure crossbar-less vertical stem with a smooth geometric baseline hook (no top serif/T-bar).
 * - "Λ": Custom crossbar-less geometric A apexes matching the exact stroke weight of J, I, K, L.
 * - All 6 glyphs share identical stroke thickness (3.3u), cap-height (y=2), and baseline (y=26).
 */
export const JaiklaWordmarkSvg: React.FC<{
  className?: string;
}> = ({ className = 'h-3.5 sm:h-4 w-auto' }) => (
  <svg
    viewBox="0 0 152 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
     role="img"
    aria-label="JAIKLA"
  >
    {/* J — Clean crossbar-less geometric stem + smooth circular baseline hook */}
    <path
      d="M 15.6 2 L 15.6 17.1 C 15.6 22.3 12.2 24.9 7.9 24.9 C 4.1 24.9 1.9 22.5 1.9 18.7"
      stroke="currentColor"
      strokeWidth="3.3"
      strokeLinecap="butt"
      strokeLinejoin="round"
    />
    {/* Λ (First A — Crossbar-less geometric apex) */}
    <path
      d="M 35.6 2 L 39.2 2 L 47.4 26 L 43.7 26 L 37.4 6.7 L 31.1 26 L 27.4 26 Z"
      fill="currentColor"
    />
    {/* I — Pure geometric vertical stem */}
    <path d="M 58.2 2 L 61.6 2 L 61.6 26 L 58.2 26 Z" fill="currentColor" />
    {/* K — Geometric vertical stem + precision diagonal arms */}
    <path d="M 73.8 2 L 77.2 2 L 77.2 26 L 73.8 26 Z" fill="currentColor" />
    <path
      d="M 87.0 2 L 91.2 2 L 80.7 13.4 L 91.8 26 L 87.5 26 L 78.2 15.3 L 77.2 16.4 L 77.2 12.5 Z"
      fill="currentColor"
    />
    {/* L — Geometric vertical stem + crisp horizontal base */}
    <path
      d="M 102.6 2 L 106.0 2 L 106.0 22.8 L 118.4 22.8 L 118.4 26 L 102.6 26 Z"
      fill="currentColor"
    />
    {/* Λ (Second A — Crossbar-less geometric apex) */}
    <path
      d="M 136.0 2 L 139.6 2 L 147.8 26 L 144.1 26 L 137.8 6.7 L 131.5 26 L 127.8 26 Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * 02 HORIZONTAL LOGO from the official JAIKLA ACTIVE WELLNESS PDF Brand Sheet
 * Features: Twin-Arc Symbol + Vertical Divider + Precision Vector "J Λ I K L Λ" + "ACTIVE WELLNESS"
 */
export const JaiklaHorizontalLogo: React.FC<{
  className?: string;
  showTagline?: boolean;
  variant?: 'color' | 'white';
}> = ({ className = '', showTagline = false, variant = 'color' }) => (
  <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
    <JaiklaSymbolMark className="w-9 h-7 sm:w-11 sm:h-8 shrink-0" variant={variant} />
    <span className="h-7 sm:h-8 w-[1px] bg-[#F8F8FA]/25 shrink-0" aria-hidden="true" />
    <div className="flex flex-col justify-center leading-none">
      <div className="text-[#F8F8FA]">
        <JaiklaWordmarkSvg className="h-3.5 sm:h-4 w-auto" />
      </div>
      <span className="font-display text-[8px] sm:text-[9px] font-medium tracking-[0.28em] jaikla-brand-tracking text-[#EBDDFF]/90 mt-1.5 whitespace-nowrap">
        ACTIVE WELLNESS
      </span>
      {showTagline && (
        <span className="font-mono-tabular text-[7px] tracking-[0.24em] jaikla-brand-tracking text-[#A1A1AA] mt-1 whitespace-nowrap">
          MOVE BETTER. LIVE BETTER.
        </span>
      )}
    </div>
  </div>
);

/**
 * 01 PRIMARY LOGO (Vertical Lockup) from the official JAIKLA ACTIVE WELLNESS PDF Brand Sheet
 */
export const JaiklaPrimaryLogo: React.FC<{
  className?: string;
  variant?: 'color' | 'white' | 'black';
  darkText?: boolean;
}> = ({ className = '', variant = 'color', darkText = false }) => (
  <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
    <JaiklaSymbolMark className="w-20 h-16 sm:w-24 sm:h-20 mb-3.5" variant={variant} />
    <div className={darkText ? 'text-[#111111]' : 'text-[#F8F8FA]'}>
      <JaiklaWordmarkSvg className="h-5 sm:h-6 w-auto" />
    </div>
    <span
      className={`font-display text-[10px] sm:text-xs font-medium tracking-[0.32em] pl-[0.32em] jaikla-brand-tracking mt-2 ${
        darkText ? 'text-[#111111]/80' : 'text-[#EBDDFF]'
      }`}
    >
      ACTIVE WELLNESS
    </span>
    <span
      className={`font-mono-tabular text-[8px] tracking-[0.25em] pl-[0.25em] jaikla-brand-tracking mt-2 ${
        darkText ? 'text-[#111111]/55' : 'text-[#A1A1AA]'
      }`}
    >
      MOVE BETTER. LIVE BETTER.
    </span>
  </div>
);

export const HeroKineticRibbon: React.FC = () => (
  <svg
    viewBox="0 0 1440 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-[320px] md:h-[420px] opacity-75"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="heroRibbonPrimary" x1="0%" y1="50%" x2="100%" y2="20%">
        <stop offset="0%" stopColor="#4B1FD6" stopOpacity="0" />
        <stop offset="25%" stopColor="#5B1FA6" stopOpacity="0.55" />
        <stop offset="65%" stopColor="#7C3AED" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#EBDDFF" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="heroRibbonSecondary" x1="0%" y1="80%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
        <stop offset="50%" stopColor="#EBDDFF" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4B1FD6" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Secondary mobility arc */}
    <path
      d="M-60 360 C 260 340, 460 180, 820 230 C 1100 268, 1270 120, 1500 70"
      stroke="url(#heroRibbonSecondary)"
      strokeWidth="1.25"
      strokeDasharray="6 8"
    />
    {/* Primary kinetic trajectory line */}
    <path
      d="M-40 310 C 240 290, 430 120, 770 175 C 1060 220, 1220 85, 1480 36"
      stroke="url(#heroRibbonPrimary)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Focal trajectory nodes */}
    <circle cx="770" cy="175" r="4" fill="#7C3AED" />
    <circle cx="770" cy="175" r="11" stroke="#7C3AED" strokeOpacity="0.35" strokeWidth="1" />
    <circle cx="1185" cy="108" r="3.5" fill="#EBDDFF" />
  </svg>
);

export const StageTrajectorySvg: React.FC<{
  pathData: string;
  accentCoord: { x: number; y: number };
  activeIndex: number;
}> = ({ pathData, accentCoord, activeIndex }) => {
  const stageXPositions = [140, 340, 520, 710, 890];

  return (
    <svg
      viewBox="0 0 1000 190"
      fill="none"
      className="w-full h-28 md:h-36 overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="stageArcGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#4B1FD6" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#EBDDFF" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Subtle baseline grid */}
      <line
        x1="40"
        y1="165"
        x2="960"
        y2="165"
        stroke="rgba(248,248,250,0.08)"
        strokeWidth="1"
      />
      {stageXPositions.map((xPos, idx) => (
        <g key={xPos}>
          <line
            x1={xPos}
            y1="20"
            x2={xPos}
            y2="165"
            stroke={idx === activeIndex ? 'rgba(124,58,237,0.4)' : 'rgba(248,248,250,0.05)'}
            strokeDasharray="3 5"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Dynamic kinetic movement curve */}
      <path
        d={pathData}
        stroke="url(#stageArcGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transition: 'd 550ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Active stage node */}
      <g
        style={{
          transform: `translate(${accentCoord.x}px, ${accentCoord.y}px)`,
          transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <circle cx="0" cy="0" r="16" fill="rgba(124,58,237,0.18)" />
        <circle cx="0" cy="0" r="6" fill="#EBDDFF" stroke="#7C3AED" strokeWidth="2.5" />
      </g>
    </svg>
  );
};

export interface TelemetryOverlayProps {
  mode: 'prepare' | 'perform' | 'recover';
  locale?: 'en' | 'th' | 'zh' | 'ko' | 'ja' | 'ar';
}

const TELEMETRY_LOCALE_CARDS: Record<
  'en' | 'th' | 'zh' | 'ko' | 'ja' | 'ar',
  { tag: string; title: string; desc: string }[]
> = {
  en: [
    { tag: 'HR', title: 'CARDIAC RHYTHM', desc: 'Autonomic effort & pacing zone awareness' },
    { tag: 'MOVEMENT', title: 'KINETIC FLOW', desc: 'Gait symmetry & stride economy pattern' },
    { tag: 'RECOVERY', title: 'RESTORATION', desc: 'Nervous system & myofascial readiness' },
    { tag: 'MOBILITY', title: 'RANGE OF MOTION', desc: 'Functional joint freedom & stability arc' },
    { tag: 'LOAD', title: 'PROGRESSION', desc: 'Calibrated mechanical & training stimulus' },
  ],
  th: [
    { tag: 'อัตราหัวใจ', title: 'จังหวะหัวใจและระดับความเหนื่อย', desc: 'สังเกตระดับความเหนื่อยและจังหวะการออกแรงที่เหมาะกับตัวเอง' },
    { tag: 'การเคลื่อนไหว', title: 'จังหวะการก้าวและท่าทาง', desc: 'ความสมดุลของท่าทางและความลื่นไหลของการเคลื่อนไหว' },
    { tag: 'การฟื้นตัว', title: 'การพักและฟื้นตัว', desc: 'การผ่อนคลายของร่างกายและกล้ามเนื้อหลังการออกแรง' },
    { tag: 'ความคล่องตัว', title: 'ช่วงการเคลื่อนไหวของข้อต่อ', desc: 'ความคล่องตัวและความมั่นคงของข้อต่อในการเคลื่อนไหว' },
    { tag: 'การพัฒนา', title: 'การค่อย ๆ เพิ่มความท้าทาย', desc: 'การปรับระดับกิจกรรมให้เหมาะกับความพร้อมของร่างกาย' },
  ],
  zh: [
    { tag: '心率', title: '心率节律', desc: '自主神经负荷与配速区间感知' },
    { tag: '动作', title: '动力流畅度', desc: '步态对称性与步伐经济性模式' },
    { tag: '恢复', title: '身心修复', desc: '神经系统与肌筋膜恢复状态' },
    { tag: '灵活性', title: '关节活动度', desc: '功能性关节自由度与稳定弧线' },
    { tag: '负荷', title: '渐进强化', desc: '科学校准的机械与训练刺激' },
  ],
  ko: [
    { tag: '심박', title: '심박 리듬', desc: '자율신경 노력도 및 페이싱 존 인지' },
    { tag: '움직임', title: '키네틱 플로우', desc: '보행 대칭성 및 스트라이드 효율 패턴' },
    { tag: '회복', title: '신체 복원', desc: '신경계 및 근막 준비 상태' },
    { tag: '가동성', title: '관절 가동 범위', desc: '기능적 관절 자유도 및 안정성 아크' },
    { tag: '부하', title: '점진적 성장', desc: '정밀하게 조율된 역학적 훈련 자극' },
  ],
  ja: [
    { tag: '心拍', title: '心拍リズム', desc: '自律神経の負荷とペーシングゾーンの把握' },
    { tag: '動作', title: 'キネティックフロー', desc: 'フォームの対称性とストライド効率' },
    { tag: '回復', title: 'リカバリー状態', desc: '神経系と筋膜のコンディショニング' },
    { tag: '可動性', title: '関節可動域', desc: '機能的な関節の自由度と安定性' },
    { tag: '負荷', title: 'プログレッション', desc: '適切に調整された運動刺激と成長曲線' },
  ],
  ar: [
    { tag: 'النبض', title: 'إيقاع القلب', desc: 'الوعي بمناطق الجهد وتنظيم الإيقاع' },
    { tag: 'الحركة', title: 'الانسياب الحركي', desc: 'توازن الخطوات وكفاءة مسار الحركة' },
    { tag: 'الاستشفاء', title: 'استعادة الحيوية', desc: 'جاهزية الجهاز العصبي واللفافة العضلية' },
    { tag: 'المرونة', title: 'المدى الحركي', desc: 'حرية حركة المفاصل الوظيفية وثباتها' },
    { tag: 'الحمل', title: 'التدرج التدريبي', desc: 'موازنة الحمل البدني والتطور الآمن' },
  ],
};

export const HumanPerformanceTelemetrySvg: React.FC<TelemetryOverlayProps> = ({
  mode,
  locale = 'en',
}) => {
  const curves = {
    prepare: {
      hrWave: 'M 10 55 Q 45 52, 80 48 T 150 46 T 220 42 T 290 45',
      mobilityArc: 'M 20 85 C 75 20, 185 20, 240 85',
      loadCurve: 'M 10 78 C 80 74, 150 60, 250 48',
    },
    perform: {
      hrWave: 'M 10 68 Q 30 15, 55 62 T 105 18 T 155 60 T 205 16 T 255 55 T 290 24',
      mobilityArc: 'M 20 85 C 60 5, 200 5, 240 85',
      loadCurve: 'M 10 82 C 90 65, 140 22, 250 14',
    },
    recover: {
      hrWave: 'M 10 35 Q 60 58, 115 64 T 210 70 T 290 72',
      mobilityArc: 'M 20 85 C 85 35, 175 35, 240 85',
      loadCurve: 'M 10 25 C 85 52, 165 72, 250 78',
    },
  }[mode];

  const cards = TELEMETRY_LOCALE_CARDS[locale] || TELEMETRY_LOCALE_CARDS.en;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {/* 01 HR RHYTHM */}
      <div className="p-4 rounded-xl bg-[#111111]/85 border border-[#F8F8FA]/10 backdrop-blur-md flex flex-col justify-between">
        <div className="flex flex-col gap-0.5 mb-2">
          <span className="text-[10px] font-mono-tabular text-[#A1A1AA]">{cards[0].tag}</span>
          <span className="text-xs font-semibold text-[#EBDDFF]">{cards[0].title}</span>
        </div>
        <svg viewBox="0 0 300 84" className="w-full h-12" fill="none">
          <path
            d={curves.hrWave}
            stroke="#7C3AED"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-[11px] text-[#A1A1AA] mt-1.5 leading-relaxed">{cards[0].desc}</p>
      </div>

      {/* 02 MOVEMENT TRAJECTORY */}
      <div className="p-4 rounded-xl bg-[#111111]/85 border border-[#F8F8FA]/10 backdrop-blur-md flex flex-col justify-between">
        <div className="flex flex-col gap-0.5 mb-2">
          <span className="text-[10px] font-mono-tabular text-[#A1A1AA]">{cards[1].tag}</span>
          <span className="text-xs font-semibold text-[#EBDDFF]">{cards[1].title}</span>
        </div>
        <svg viewBox="0 0 260 95" className="w-full h-12" fill="none">
          <path
            d="M 15 75 C 75 75, 95 22, 155 32 C 195 38, 220 18, 245 14"
            stroke="#EBDDFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx={mode === 'prepare' ? 75 : mode === 'perform' ? 195 : 140}
            cy={mode === 'prepare' ? 52 : mode === 'perform' ? 28 : 30}
            r="4.5"
            fill="#7C3AED"
          />
        </svg>
        <p className="text-[11px] text-[#A1A1AA] mt-1.5 leading-relaxed">{cards[1].desc}</p>
      </div>

      {/* 03 RECOVERY PULSE */}
      <div className="p-4 rounded-xl bg-[#111111]/85 border border-[#F8F8FA]/10 backdrop-blur-md flex flex-col justify-between">
        <div className="flex flex-col gap-0.5 mb-2">
          <span className="text-[10px] font-mono-tabular text-[#A1A1AA]">{cards[2].tag}</span>
          <span className="text-xs font-semibold text-[#EBDDFF]">{cards[2].title}</span>
        </div>
        <svg viewBox="0 0 260 95" className="w-full h-12" fill="none">
          <path
            d="M 12 65 C 60 65, 90 25, 135 25 C 180 25, 205 65, 248 65"
            stroke="#4B1FD6"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 12 72 C 70 68, 110 38, 150 36 C 195 34, 220 52, 248 45"
            stroke="#EBDDFF"
            strokeWidth="2"
          />
        </svg>
        <p className="text-[11px] text-[#A1A1AA] mt-1.5 leading-relaxed">{cards[2].desc}</p>
      </div>

      {/* 04 MOBILITY ARC */}
      <div className="p-4 rounded-xl bg-[#111111]/85 border border-[#F8F8FA]/10 backdrop-blur-md flex flex-col justify-between">
        <div className="flex flex-col gap-0.5 mb-2">
          <span className="text-[10px] font-mono-tabular text-[#A1A1AA]">{cards[3].tag}</span>
          <span className="text-xs font-semibold text-[#EBDDFF]">{cards[3].title}</span>
        </div>
        <svg viewBox="0 0 260 95" className="w-full h-12" fill="none">
          <path
            d={curves.mobilityArc}
            stroke="#7C3AED"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <line x1="20" y1="85" x2="240" y2="85" stroke="rgba(248,248,250,0.15)" />
        </svg>
        <p className="text-[11px] text-[#A1A1AA] mt-1.5 leading-relaxed">{cards[3].desc}</p>
      </div>

      {/* 05 LOAD PROGRESSION */}
      <div className="p-4 rounded-xl bg-[#111111]/85 border border-[#F8F8FA]/10 backdrop-blur-md flex flex-col justify-between">
        <div className="flex flex-col gap-0.5 mb-2">
          <span className="text-[10px] font-mono-tabular text-[#A1A1AA]">{cards[4].tag}</span>
          <span className="text-xs font-semibold text-[#EBDDFF]">{cards[4].title}</span>
        </div>
        <svg viewBox="0 0 260 95" className="w-full h-12" fill="none">
          <path
            d={curves.loadCurve}
            stroke="#EBDDFF"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-[11px] text-[#A1A1AA] mt-1.5 leading-relaxed">{cards[4].desc}</p>
      </div>
    </div>
  );
};

interface FlywheelDiagramProps {
  activeNodeIndex: number;
  onSelectNode: (index: number) => void;
  scrollRotationDeg: number;
  locale?: 'en' | 'th' | 'zh' | 'ko' | 'ja' | 'ar';
  localizedNodes?: { label: string }[];
  centerTopLabel?: string;
  centerMainLabel?: string;
}

const FLYWHEEL_LOCALE_TEXT: Record<
  'en' | 'th' | 'zh' | 'ko' | 'ja' | 'ar',
  { top: string; main: string; labels: string[] }
> = {
  en: {
    top: 'JAIKLA ECOSYSTEM',
    main: 'ACTIVE FLYWHEEL',
    labels: ['KNOWLEDGE', 'PROGRAM', 'EVENT', 'CONTENT', 'COMMUNITY', 'PARTNERSHIP', 'GROWTH'],
  },
  th: {
    top: 'ความเชี่ยวชาญ',
    main: 'เติบโตไปด้วยกัน',
    labels: [
      'องค์ความรู้เฉพาะทาง',
      'ใส่ใจผู้เข้าร่วม',
      'เชื่อมบริการ',
      'ร่วมมือระยะยาว',
      'ดูแลการเคลื่อนไหว',
      'สร้างคุณค่าให้ผู้คน',
      'ออกแบบเฉพาะโจทย์',
    ],
  },
  zh: {
    top: 'JAIKLA 生态系统',
    main: '活力增长飞轮',
    labels: ['科学知识', '训练方案', '活力赛事', '内容传播', '运动社群', '品牌合作', '持续增长'],
  },
  ko: {
    top: 'JAIKLA 에코시스템',
    main: '액티브 플라이휠',
    labels: ['전문 지식', '프로그램', '이벤트', '콘텐츠', '커뮤니티', '파트너십', '지속 성장'],
  },
  ja: {
    top: 'JAIKLA エコシステム',
    main: '成長フライホイール',
    labels: ['専門知識', 'プログラム', 'イベント', 'コンテンツ', 'コミュニティ', 'パートナー', '持続的成長'],
  },
  ar: {
    top: 'منظومة JAIKLA',
    main: 'عجلة النمو',
    labels: ['المعرفة', 'البرامج', 'الفعاليات', 'المحتوى', 'المجتمع', 'الشراكات', 'النمو'],
  },
};

export const FlywheelDiagram: React.FC<FlywheelDiagramProps> = ({
  activeNodeIndex,
  onSelectNode,
  scrollRotationDeg,
  locale = 'en',
  localizedNodes,
}) => {
  const radius = 172;
  const center = 240;
  const locPack = FLYWHEEL_LOCALE_TEXT[locale] || FLYWHEEL_LOCALE_TEXT.en;
  const resolvedTopLabel = locPack.top;
  const resolvedMainLabel = locPack.main;

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center">
      <svg viewBox="-48 -20 576 520" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="flywheelRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4B1FD6" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#EBDDFF" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Outer subtle ambient ring that responds gently to scroll */}
        <g
          style={{
            transformOrigin: '240px 240px',
            transform: `rotate(${scrollRotationDeg}deg)`,
            transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <circle
            cx={center}
            cy={center}
            r={radius + 26}
            fill="none"
            stroke="rgba(235, 221, 255, 0.08)"
            strokeWidth="1"
            strokeDasharray="6 10"
          />
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#flywheelRingGrad)"
            strokeWidth="2"
          />
          {/* Directional progression ticks */}
          {FLYWHEEL_NODES.map((node, i) => {
            const midAngle = ((node.angleDeg + 25.7) * Math.PI) / 180;
            const x = center + radius * Math.cos(midAngle);
            const y = center + radius * Math.sin(midAngle);
            return (
              <circle
                key={`tick-${i}`}
                cx={x}
                cy={y}
                r="2.5"
                fill="#7C3AED"
                opacity="0.7"
              />
            );
          })}
        </g>

        {/* Inner core emblem */}
        <circle
          cx={center}
          cy={center}
          r="78"
          fill="#141418"
          stroke="rgba(124, 58, 237, 0.35)"
          strokeWidth="1.25"
        />
        <text
          x={center}
          y={center - 10}
          textAnchor="middle"
          fill="#EBDDFF"
          className="font-mono-tabular text-[10px] tracking-wider"
        >
          {resolvedTopLabel}
        </text>
        <text
          x={center}
          y={center + 11}
          textAnchor="middle"
          fill="#F8F8FA"
          className="font-display text-[13px] font-bold"
        >
          {resolvedMainLabel}
        </text>
        <text
          x={center}
          y={center + 29}
          textAnchor="middle"
          fill="#A1A1AA"
          className="text-[10px]"
        >
          0{activeNodeIndex + 1} / 07
        </text>

        {/* 7 Interactive Flywheel Nodes */}
        {FLYWHEEL_NODES.map((node: FlywheelNode, idx: number) => {
          const rad = (node.angleDeg * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center + radius * Math.sin(rad);
          const isActive = idx === activeNodeIndex;
          const shortDiagramLabel = locPack.labels[idx] || node.label;
          const fullAccessibleLabel =
            localizedNodes?.[idx]?.label || shortDiagramLabel;

          return (
            <g
              key={node.id}
              onClick={() => onSelectNode(idx)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`${node.index} ${fullAccessibleLabel}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectNode(idx);
                }
              }}
            >
              {isActive && (
                <circle
                  cx={x}
                  cy={y}
                  r="34"
                  fill="rgba(124, 58, 237, 0.22)"
                />
              )}
              <circle
                cx={x}
                cy={y}
                r={isActive ? '24' : '19'}
                fill={isActive ? '#4B1FD6' : '#17171C'}
                stroke={isActive ? '#EBDDFF' : 'rgba(248, 248, 250, 0.22)'}
                strokeWidth={isActive ? '2' : '1.25'}
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#F8F8FA"
                className="font-mono-tabular text-[11px] font-medium select-none"
              >
                {node.index}
              </text>
              <text
                x={x}
                y={y + (y < center ? -32 : 39)}
                textAnchor="middle"
                fill={isActive ? '#EBDDFF' : '#A1A1AA'}
                className="font-mono-tabular text-[10.5px] font-medium select-none"
              >
                {shortDiagramLabel}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/**
 * Abstract Kinetic Vector Artwork for Section 05 (Why JAIKLA — 5 Core Capabilities)
 * Eliminates duplicate campaign photo usage while communicating each capability's distinct discipline.
 */
export const CapabilityKineticArtwork: React.FC<{
  index: number;
  isSelected: boolean;
}> = ({ index, isSelected }) => {
  const strokeMain = isSelected ? '#EBDDFF' : '#7C3AED';
  const strokeSub = isSelected ? '#7C3AED' : 'rgba(235, 221, 255, 0.25)';

  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`capGlow-${index}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity={isSelected ? '0.32' : '0.16'} />
          <stop offset="100%" stopColor="#111111" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="220" fill={`url(#capGlow-${index})`} />

      {/* Subtle architectural coordinate grid */}
      <line x1="24" y1="110" x2="296" y2="110" stroke="rgba(248,248,250,0.06)" strokeDasharray="3 5" />
      <line x1="160" y1="20" x2="160" y2="200" stroke="rgba(248,248,250,0.06)" strokeDasharray="3 5" />

      {index === 0 && (
        /* 01 ALLIED HEALTH KNOWLEDGE: Biomechanical Joint Axis & Goniometer Arc */
        <g>
          <circle cx="160" cy="110" r="64" stroke={strokeSub} strokeWidth="1.2" strokeDasharray="4 4" />
          <path
            d="M 96 154 L 160 110 L 228 62"
            stroke={strokeMain}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 192 110 A 32 32 0 0 0 182 86"
            stroke="#EBDDFF"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="160" cy="110" r="6" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <circle cx="96" cy="154" r="4" fill="#7C3AED" />
          <circle cx="228" cy="62" r="4" fill="#EBDDFF" />
          <text x="198" y="98" fill="#EBDDFF" className="font-mono-tabular text-[10px]">
            142° ROM
          </text>
        </g>
      )}

      {index === 1 && (
        /* 02 SPORT & ACTIVITY: Progressive Velocity Stride Trajectory */
        <g>
          <path
            d="M 36 162 Q 92 64 148 142 T 264 56"
            stroke={strokeMain}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 36 176 Q 98 96 154 156 T 284 82"
            stroke={strokeSub}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />
          <circle cx="94" cy="112" r="4.5" fill="#7C3AED" />
          <circle cx="182" cy="108" r="5" fill="#EBDDFF" />
          <circle cx="264" cy="56" r="6" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
        </g>
      )}

      {index === 2 && (
        /* 03 EVENT & EXPERIENCE: Spatial Arena Zones (Prepare -> Perform -> Recover) */
        <g>
          <ellipse cx="160" cy="114" rx="104" ry="48" stroke={strokeSub} strokeWidth="1.4" />
          <ellipse cx="160" cy="114" rx="68" ry="30" stroke={strokeMain} strokeWidth="2" />
          <ellipse cx="160" cy="114" rx="28" ry="12" fill="rgba(124,58,237,0.28)" stroke="#EBDDFF" strokeWidth="1.5" />
          <circle cx="92" cy="114" r="4" fill="#EBDDFF" />
          <circle cx="160" cy="84" r="4" fill="#7C3AED" />
          <circle cx="228" cy="114" r="4" fill="#EBDDFF" />
        </g>
      )}

      {index === 3 && (
        /* 04 CONTENT & MEDIA: Digital Broadcast Harmonics & Editorial Frame */
        <g>
          <rect
            x="68"
            y="54"
            width="184"
            height="112"
            rx="12"
            stroke={strokeSub}
            strokeWidth="1.5"
          />
          <path
            d="M 88 110 L 116 110 L 128 78 L 144 142 L 160 92 L 176 128 L 190 102 L 204 110 L 232 110"
            stroke={strokeMain}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="88" cy="72" r="3.5" fill="#7C3AED" />
          <text x="100" y="75" fill="#EBDDFF" className="font-mono-tabular text-[9px]">
            JAIKLA MEDIA ENGINE
          </text>
        </g>
      )}

      {index === 4 && (
        /* 05 COMMUNITY: Connected Human Movement Constellation */
        <g>
          <polygon
            points="160,48 232,88 212,162 108,162 88,88"
            stroke={strokeSub}
            strokeWidth="1.4"
            fill="rgba(75,31,214,0.1)"
          />
          <line x1="160" y1="48" x2="160" y2="112" stroke={strokeMain} strokeWidth="1.5" />
          <line x1="232" y1="88" x2="160" y2="112" stroke={strokeMain} strokeWidth="1.5" />
          <line x1="212" y1="162" x2="160" y2="112" stroke={strokeMain} strokeWidth="1.5" />
          <line x1="108" y1="162" x2="160" y2="112" stroke={strokeMain} strokeWidth="1.5" />
          <line x1="88" y1="88" x2="160" y2="112" stroke={strokeMain} strokeWidth="1.5" />
          <circle cx="160" cy="112" r="7" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <circle cx="160" cy="48" r="4.5" fill="#EBDDFF" />
          <circle cx="232" cy="88" r="4.5" fill="#7C3AED" />
          <circle cx="212" cy="162" r="4.5" fill="#EBDDFF" />
          <circle cx="108" cy="162" r="4.5" fill="#7C3AED" />
          <circle cx="88" cy="88" r="4.5" fill="#EBDDFF" />
        </g>
      )}
    </svg>
  );
};

/**
 * Bespoke Scientific & Biomechanical SVG Diagrams for Section 08 (6 Expert Guidance Pillars)
 * Replaces duplicate campaign photos with dedicated allied-health telemetry diagrams.
 */
export const ExpertPillarScienceDiagram: React.FC<{
  pillarIndex: string;
}> = ({ pillarIndex }) => {
  return (
    <svg
      viewBox="0 0 360 180"
      fill="none"
      className="w-full h-full bg-[#111116]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`pillarGrad-${pillarIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B1FD6" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#141418" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="360" height="180" fill={`url(#pillarGrad-${pillarIndex})`} />
      <line x1="20" y1="90" x2="340" y2="90" stroke="rgba(248,248,250,0.07)" strokeDasharray="3 5" />
      <line x1="180" y1="16" x2="180" y2="164" stroke="rgba(248,248,250,0.07)" strokeDasharray="3 5" />

      {pillarIndex === '01' && (
        /* Body Awareness: Postural Alignment Plumb Line & Center of Mass */
        <g>
          <circle cx="180" cy="90" r="48" stroke="rgba(235,221,255,0.22)" strokeWidth="1.2" />
          <circle cx="180" cy="90" r="26" stroke="#7C3AED" strokeWidth="1.6" strokeDasharray="4 3" />
          <line x1="180" y1="26" x2="180" y2="154" stroke="#EBDDFF" strokeWidth="2" />
          <circle cx="180" cy="52" r="4" fill="#EBDDFF" />
          <circle cx="180" cy="90" r="6" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <circle cx="180" cy="128" r="4" fill="#7C3AED" />
          <text x="196" y="86" fill="#EBDDFF" className="font-mono-tabular text-[9px]">
            NEUTRAL AXIS · 0.0°
          </text>
        </g>
      )}

      {pillarIndex === '02' && (
        /* Movement Preparation: Neuromuscular Activation Ramp */
        <g>
          <path
            d="M 36 140 C 90 138, 120 110, 175 82 C 230 54, 270 42, 324 38"
            stroke="#7C3AED"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M 36 140 C 90 138, 120 110, 175 82 C 230 54, 270 42, 324 38 L 324 150 L 36 150 Z"
            fill="rgba(124,58,237,0.12)"
          />
          <circle cx="110" cy="120" r="4" fill="#EBDDFF" />
          <circle cx="195" cy="72" r="5" fill="#7C3AED" stroke="#EBDDFF" strokeWidth="1.5" />
          <circle cx="290" cy="40" r="5.5" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <text x="205" y="102" fill="#EBDDFF" className="font-mono-tabular text-[9px]">
            PRIMED READINESS 96%
          </text>
        </g>
      )}

      {pillarIndex === '03' && (
        /* Exercise Education: Effort Calibration & Aerobic/Anaerobic Threshold Zones */
        <g>
          {[
            { x: 56, h: 36, label: 'Z1', color: 'rgba(235,221,255,0.25)' },
            { x: 108, h: 58, label: 'Z2', color: 'rgba(124,58,237,0.45)' },
            { x: 160, h: 82, label: 'Z3', color: '#7C3AED' },
            { x: 212, h: 104, label: 'Z4', color: '#4B1FD6' },
            { x: 264, h: 72, label: 'LOAD', color: '#EBDDFF' },
          ].map((bar) => (
            <g key={bar.label}>
              <rect
                x={bar.x}
                y={144 - bar.h}
                width="32"
                height={bar.h}
                rx="5"
                fill={bar.color}
              />
              <text
                x={bar.x + 16}
                y="160"
                textAnchor="middle"
                fill="#EBDDFF"
                className="font-mono-tabular text-[9px]"
              >
                {bar.label}
              </text>
            </g>
          ))}
        </g>
      )}

      {pillarIndex === '04' && (
        /* Recovery: Parasympathetic HRV Coherent Sine Wave */
        <g>
          <path
            d="M 28 90 C 64 36, 100 144, 136 90 C 172 36, 208 144, 244 90 C 280 36, 308 124, 334 90"
            stroke="#EBDDFF"
            strokeWidth="2.4"
            fill="none"
          />
          <path
            d="M 28 90 C 64 58, 100 122, 136 90 C 172 58, 208 122, 244 90 C 280 58, 308 112, 334 90"
            stroke="#7C3AED"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <circle cx="136" cy="90" r="5" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <circle cx="244" cy="90" r="5" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <text x="230" y="42" fill="#EBDDFF" className="font-mono-tabular text-[9px]">
            HRV COHERENCE · RESTORE
          </text>
        </g>
      )}

      {pillarIndex === '05' && (
        /* Mobility: Multi-Joint Kinetic Chain Freedom Arcs */
        <g>
          <path
            d="M 88 136 A 92 92 0 0 1 272 136"
            stroke="rgba(235,221,255,0.22)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 112 136 A 68 68 0 0 1 248 136"
            stroke="#7C3AED"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M 140 136 A 40 40 0 0 1 220 136"
            stroke="#EBDDFF"
            strokeWidth="2"
            fill="none"
          />
          <line x1="180" y1="136" x2="232" y2="82" stroke="#EBDDFF" strokeWidth="2.2" />
          <circle cx="180" cy="136" r="6" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <circle cx="232" cy="82" r="4.5" fill="#EBDDFF" />
        </g>
      )}

      {pillarIndex === '06' && (
        /* Strength Development: Force Absorption & Structural Stability Matrix */
        <g>
          <polygon
            points="180,32 256,76 256,136 180,158 104,136 104,76"
            stroke="#7C3AED"
            strokeWidth="2"
            fill="rgba(75,31,214,0.16)"
          />
          <polygon
            points="180,56 226,84 226,122 180,138 134,122 134,84"
            stroke="#EBDDFF"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />
          <circle cx="180" cy="96" r="6" fill="#4B1FD6" stroke="#EBDDFF" strokeWidth="2" />
          <text x="180" y="24" textAnchor="middle" fill="#EBDDFF" className="font-mono-tabular text-[9px]">
            TENDON & JOINT STABILITY
          </text>
        </g>
      )}
    </svg>
  );
};

