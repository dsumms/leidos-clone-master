import { useRef } from "react";

interface CircuitHeadingProps {
  text: string;
  className?: string;
}

const CircuitHeading = ({ text, className = "" }: CircuitHeadingProps) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className={`inline-block ${className}`}>
      <h2
        ref={textRef}
        className="text-2xl sm:text-3xl md:text-5xl font-display font-bold relative z-10"
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundImage: "linear-gradient(135deg, hsl(168, 62%, 57%) 0%, hsl(45, 65%, 55%) 50%, hsl(168, 62%, 67%) 100%)",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default CircuitHeading;
