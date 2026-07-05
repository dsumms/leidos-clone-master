import { motion } from "framer-motion";

const SectionBreaker = ({ text }: { text: string }) => (
  <div className="section-break">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-center max-w-3xl px-8 tracking-tight"
      style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundImage: "linear-gradient(135deg, hsl(168, 62%, 57%) 0%, hsl(45, 65%, 55%) 50%, hsl(168, 62%, 67%) 100%)",
      }}
    >
      {text}
    </motion.p>
  </div>
);

export default SectionBreaker;
