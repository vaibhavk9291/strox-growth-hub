import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

const SpotlightCard = ({ children, className, tilt = true }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    setPos({ x: px, y: py });
    if (tilt) {
      const rx = ((py / rect.height) - 0.5) * -8;
      const ry = ((px / rect.width) - 0.5) * 8;
      setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`);
    }
  };

  const onLeave = () => {
    setPos({ x: -200, y: -200 });
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
      className={cn("relative group glass rounded-3xl overflow-hidden noise-overlay", className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary) / 0.18), transparent 60%)`,
        }}
      />
      <div className="relative h-full" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
