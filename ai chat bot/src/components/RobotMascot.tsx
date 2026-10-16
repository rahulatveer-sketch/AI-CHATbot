import React from 'react';

interface RobotMascotProps {
  mood?: 'happy' | 'thinking' | 'coding' | 'celebrating';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  speechText?: string;
}

export const RobotMascot: React.FC<RobotMascotProps> = ({
  mood = 'happy',
  size = 'md',
  className = '',
  speechText,
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
    xl: 'w-56 h-56',
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {speechText && (
        <div className="mb-2 max-w-xs px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium rounded-2xl shadow-lg border border-cyan-100 dark:border-cyan-900/40 relative animate-bounce-slow">
          <span>{speechText}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-cyan-100 dark:border-cyan-900/40 rotate-45"></div>
        </div>
      )}

      <div className={`relative ${sizeMap[size]} transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Antenna */}
          <line x1="80" y1="28" x2="80" y2="12" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
          <circle
            cx="80"
            cy="10"
            r="7"
            fill={mood === 'thinking' ? '#f59e0b' : '#06b6d4'}
            className="animate-pulse"
          />

          {/* Ears / Head bolts */}
          <rect x="24" y="52" width="8" height="20" rx="3" fill="#0284c7" />
          <rect x="128" y="52" width="8" height="20" rx="3" fill="#0284c7" />

          {/* Head Body */}
          <rect
            x="32"
            y="28"
            width="96"
            height="72"
            rx="20"
            fill="url(#headGradient)"
            stroke="#0284c7"
            strokeWidth="3.5"
          />

          {/* Screen Visor */}
          <rect
            x="42"
            y="40"
            width="76"
            height="46"
            rx="12"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="2"
          />

          {/* Eyes based on mood */}
          {mood === 'happy' && (
            <g>
              {/* Cyan happy curved eyes */}
              <path
                d="M52 64C52 57 62 57 62 64"
                stroke="#38bdf8"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M98 64C98 57 108 57 108 64"
                stroke="#38bdf8"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          )}

          {mood === 'thinking' && (
            <g>
              <circle cx="58" cy="60" r="6" fill="#fbbf24" />
              <circle cx="102" cy="56" r="6" fill="#fbbf24" />
              <line x1="52" y1="52" x2="64" y2="52" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          )}

          {mood === 'coding' && (
            <g>
              {/* Code brackets for eyes */}
              <text x="50" y="67" fill="#34d399" fontSize="16" fontFamily="monospace" fontWeight="bold">
                &lt;/&gt;
              </text>
              <text x="86" y="67" fill="#34d399" fontSize="16" fontFamily="monospace" fontWeight="bold">
                ++
              </text>
            </g>
          )}

          {mood === 'celebrating' && (
            <g>
              {/* Star eyes */}
              <path
                d="M58 50L60 57H67L61 61L63 68L58 64L53 68L55 61L49 57H56L58 50Z"
                fill="#fbbf24"
              />
              <path
                d="M102 50L104 57H111L105 61L107 68L102 64L97 68L99 61L93 57H100L102 50Z"
                fill="#fbbf24"
              />
            </g>
          )}

          {/* Smile / Mouth */}
          {mood !== 'coding' ? (
            <path
              d="M72 74Q80 81 88 74"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ) : (
            <line x1="72" y1="76" x2="88" y2="76" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
          )}

          {/* Neck */}
          <rect x="70" y="100" width="20" height="10" fill="#0284c7" rx="3" />

          {/* Robot Body */}
          <rect
            x="44"
            y="110"
            width="72"
            height="44"
            rx="14"
            fill="url(#bodyGradient)"
            stroke="#0284c7"
            strokeWidth="3"
          />

          {/* C++ Logo on chest */}
          <circle cx="80" cy="130" r="14" fill="#0369a1" />
          <text
            x="80"
            y="134"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            C++
          </text>

          {/* Left Arm */}
          <path
            d="M44 122C30 126 28 138 34 146"
            stroke="#0284c7"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="34" cy="146" r="4" fill="#06b6d4" />

          {/* Right Arm */}
          <path
            d="M116 122C130 126 132 138 126 146"
            stroke="#0284c7"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="126" cy="146" r="4" fill="#06b6d4" />

          {/* Gradients */}
          <defs>
            <linearGradient id="headGradient" x1="32" y1="28" x2="128" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0f2fe" />
              <stop offset="1" stopColor="#bae6fd" />
            </linearGradient>
            <linearGradient id="bodyGradient" x1="44" y1="110" x2="116" y2="154" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0f2fe" />
              <stop offset="1" stopColor="#bae6fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
