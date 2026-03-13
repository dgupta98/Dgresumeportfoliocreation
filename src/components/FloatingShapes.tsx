import { useEffect, useState } from "react";

export function FloatingShapes() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cyan orb - top left */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full animate-blob"
        style={{
          top: "-5%",
          left: "-5%",
          background: "radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Purple orb - bottom right */}
      <div
        className="absolute w-[250px] h-[250px] rounded-full animate-blob animation-delay-2000"
        style={{
          bottom: "10%",
          right: "-3%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Smaller cyan orb - mid left */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full animate-float-slow"
        style={{
          top: "40%",
          left: "10%",
          background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Subtle teal ambient */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full animate-blob animation-delay-4000"
        style={{
          top: "60%",
          right: "20%",
          background: "radial-gradient(circle, rgba(94,234,212,0.06), transparent 70%)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}
