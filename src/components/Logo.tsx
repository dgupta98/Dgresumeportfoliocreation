export function Logo() {
  return (
    <div className="relative group cursor-pointer">
      <svg
        width="64"
        height="64"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#0f172a", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#1e293b", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Background - matching portfolio theme */}
        <rect width="400" height="400" fill="url(#bgGrad)" className="transition-all duration-300"/>
        
        {/* Decorative circles */}
        <circle cx="200" cy="200" r="140" fill="none" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.3" className="transition-all duration-500 group-hover:r-145 group-hover:opacity-50"/>
        <circle cx="200" cy="200" r="120" fill="none" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.4" className="transition-all duration-500 group-hover:r-125 group-hover:opacity-60"/>
        
        {/* Stylish italic bold D */}
        <g transform="translate(200, 200)" className="transition-all duration-300 group-hover:scale-105">
          <path 
            d="M -75 -65 L -50 -65 Q -10 -65 5 -42 Q 15 -22 15 0 Q 15 22 5 42 Q -10 65 -50 65 L -75 65 Z" 
            fill="url(#grad1)" 
            transform="skewX(-15)"
            className="drop-shadow-lg"
          />
          <path 
            d="M -68 -57 L -52 -57 Q -18 -57 -5 -38 Q 5 -20 5 0 Q 5 20 -5 38 Q -18 57 -52 57 L -68 57 Z" 
            fill="url(#bgGrad)" 
            transform="skewX(-15)"
          />
        </g>
        
        {/* Stylish italic bold G */}
        <g transform="translate(200, 200)" className="transition-all duration-300 group-hover:scale-105">
          <path 
            d="M 30 -65 Q 70 -65 88 -42 Q 100 -25 100 0 L 100 38 Q 100 65 70 65 Q 38 65 22 48 L 32 40 Q 43 53 62 53 Q 85 53 85 38 L 85 12 L 42 12 L 42 -2 L 100 -2 M 100 0 Q 100 -22 88 -38 Q 75 -55 50 -55 Q 22 -55 12 -32" 
            fill="url(#grad2)" 
            transform="skewX(-15)"
            className="drop-shadow-lg"
          />
          <path 
            d="M 36 -55 Q 65 -55 78 -38 Q 88 -22 88 0 L 88 35 Q 88 55 66 55 Q 43 55 30 43 L 37 37 Q 47 47 62 47 Q 75 47 75 35 L 75 8 L 47 8 L 47 2 L 88 2 M 88 0 Q 88 -20 78 -33 Q 68 -48 47 -48 Q 26 -48 17 -30" 
            fill="url(#bgGrad)" 
            transform="skewX(-15)"
          />
        </g>
        
        {/* Elegant underline accent */}
        <path 
          d="M 80 280 Q 200 290 320 280" 
          fill="none" 
          stroke="url(#grad1)" 
          strokeWidth="2.5" 
          opacity="0.5"
          className="transition-all duration-500 group-hover:opacity-80"
        />
        
        {/* Small decorative dots */}
        <circle cx="200" cy="90" r="3" fill="#60a5fa" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="310" r="3" fill="#3b82f6" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </svg>
      
      {/* Animated glow effect on hover */}
      <div className="absolute inset-0 rounded-lg blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 bg-gradient-to-r from-blue-500 to-blue-600 -z-10 scale-125">
        <div className="w-full h-full animate-pulse" />
      </div>
    </div>
  );
}
