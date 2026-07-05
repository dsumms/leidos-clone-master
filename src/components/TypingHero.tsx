import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

interface TypingHeroProps {
  text: string;
  accentText?: string;
  subtitle?: string;
}

const TypingHero = ({ text, accentText, subtitle }: TypingHeroProps) => {
  const fullText = accentText ? `${text} ${accentText}` : text;
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 500);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [isComplete]);

  const renderText = () => {
    if (!accentText) {
      return (
        <span className={`transition-colors duration-1000 ${isComplete ? "text-foreground" : "gradient-text"}`}>
          {displayedText}
        </span>
      );
    }

    const mainLen = text.length;
    const displayedMain = displayedText.slice(0, mainLen);
    const displayedAccent = displayedText.slice(mainLen);

    // Split "Illuminating" from the rest of the main text
    const illuminatingWord = "Illuminating";
    const hasIlluminating = displayedMain.startsWith(illuminatingWord);
    const illuminatingPart = hasIlluminating ? displayedMain.slice(0, illuminatingWord.length) : "";
    const restMain = hasIlluminating ? displayedMain.slice(illuminatingWord.length) : displayedMain;

    return (
      <>
        {illuminatingPart && (
          <span className={`${isComplete ? "illuminate-pulse" : ""} gradient-text`}>
            {illuminatingPart}
          </span>
        )}
        <span className="text-foreground">{restMain}</span>
        <span className="gradient-text">{displayedAccent}</span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background video/GIF */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
          {renderText()}
          {showCursor && <span className="cursor-block" />}
        </h1>

        {isComplete && subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground font-body max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <a
              href="/features"
              className="font-display text-sm tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              EXPLORE SOLUTIONS
            </a>
            <a
              href="/contact"
              className="font-display text-sm tracking-widest text-primary-foreground bg-primary px-6 py-3 hover:bg-primary/80 transition-colors duration-200"
            >
              REQUEST A DEMO
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TypingHero;
