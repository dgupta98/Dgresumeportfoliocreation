export function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          {/* Horizontal lines */}
          <line x1="0" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="120" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="1" />
          
          {/* Vertical lines */}
          <line x1="50" y1="0" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="120" x2="50" y2="200" stroke="currentColor" strokeWidth="1" />
          
          <line x1="150" y1="0" x2="150" y2="80" stroke="currentColor" strokeWidth="1" />
          <line x1="150" y1="120" x2="150" y2="200" stroke="currentColor" strokeWidth="1" />
          
          {/* Nodes/junctions */}
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="150" cy="50" r="3" fill="currentColor" />
          <circle cx="100" cy="100" r="2" fill="currentColor" />
          <circle cx="50" cy="150" r="3" fill="currentColor" />
          <circle cx="150" cy="150" r="3" fill="currentColor" />
          
          {/* Diagonal connections */}
          <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="150" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
