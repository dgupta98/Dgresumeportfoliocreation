import { useEffect, useState } from "react";

export function FloatingShapes() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-blob"
        style={{
          top: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(146,64,14,0.05), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-blob animation-delay-2000"
        style={{
          bottom: "5%",
          left: "-5%",
          background: "radial-gradient(circle, rgba(180,170,155,0.05), transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full animate-blob animation-delay-4000"
        style={{
          top: "45%",
          right: "20%",
          background: "radial-gradient(circle, rgba(146,64,14,0.04), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
