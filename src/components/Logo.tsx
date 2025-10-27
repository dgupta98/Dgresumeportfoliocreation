export function Logo() {
  return (
    <div className="relative group cursor-pointer">
      <svg
        width="56"
        height="56"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 group-hover:scale-110"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
          </linearGradient>
          
          {/* Animated gradient */}
          <linearGradient id="animatedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }}>
              <animate attributeName="stop-color" values="#60a5fa;#3b82f6;#60a5fa" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" style={{ stopColor: "#2563eb", stopOpacity: 1 }}>
              <animate attributeName="stop-color" values="#2563eb;#60a5fa;#2563eb" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Shadow/glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Stylish italic bold D with white gap */}
        <g transform="translate(100, 100)" filter="url(#glow)">
          {/* Outer D shape */}
          <path 
            d="M -50 -45 L -30 -45 Q 0 -45 12 -28 Q 18 -15 18 0 Q 18 15 12 28 Q 0 45 -30 45 L -50 45 Z" 
            fill="url(#logoGrad)" 
            transform="skewX(-12)"
            className="transition-all duration-500 group-hover:fill-[url(#animatedGrad)]"
            strokeWidth="2"
            stroke="url(#logoGrad)"
            strokeOpacity="0.6"
          />
          {/* White gap in the middle */}
          <path 
            d="M -42 -35 L -30 -35 Q -8 -35 2 -20 Q 8 -10 8 0 Q 8 10 2 20 Q -8 35 -30 35 L -42 35 Z" 
            fill="white" 
            transform="skewX(-12)"
          />
        </g>
        
        {/* Stylish italic bold G - proper G shape */}
        <g transform="translate(100, 100)" filter="url(#glow)">
          {/* Main G body - C shape with horizontal bar */}
          <path 
            d="M 55 -38 Q 70 -45 85 -38 Q 95 -30 95 -15 L 95 0 Q 95 15 90 25 Q 82 38 65 42 Q 50 45 35 38 Q 22 30 20 15 Q 18 0 20 -15 Q 22 -30 35 -38 Q 50 -45 65 -42 M 55 -30 Q 45 -26 40 -15 Q 38 -5 38 0 Q 38 5 40 15 Q 45 26 55 30 Q 65 33 73 28 Q 78 23 80 15 L 80 8 L 58 8 L 58 -2 L 88 -2 L 88 15 Q 86 25 78 32 Q 68 38 55 38 Q 40 35 32 23 Q 28 10 28 0 Q 28 -10 32 -23 Q 40 -35 55 -38 Z" 
            fill="url(#logoGrad)" 
            transform="skewX(-12)"
            className="transition-all duration-500 group-hover:fill-[url(#animatedGrad)]"
            strokeWidth="2"
            stroke="url(#logoGrad)"
            strokeOpacity="0.6"
          />
          {/* Inner cutout for G */}
          <path 
            d="M 55 -25 Q 48 -22 45 -12 Q 43 -3 43 0 Q 43 3 45 12 Q 48 22 55 25 Q 62 27 68 23 Q 72 19 73 12 L 73 3 L 62 3 L 62 2 L 80 2 L 80 12 Q 78 20 72 26 Q 65 31 55 31 Q 43 29 37 19 Q 34 8 34 0 Q 34 -8 37 -19 Q 43 -29 55 -31 Q 62 -32 68 -30 L 65 -25 Q 60 -27 55 -25 Z" 
            fill="white" 
            transform="skewX(-12)"
          />
        </g>
      </svg>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 -z-10 scale-150 animate-pulse" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
}
