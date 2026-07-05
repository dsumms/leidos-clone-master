import { useState } from "react";
import { motion } from "framer-motion";
import { FileSearch, Bot, BarChart3, ClipboardCheck } from "lucide-react";
import CircuitCardBg from "./CircuitCardBg";
import CircuitHeading from "./CircuitHeading";

const capabilities = [
  {
    id: "01",
    title: "Dark to Light Data",
    description: "Document management system to quickly access documents",
    icon: FileSearch,
  },
  {
    id: "02",
    title: "Intelligent Agent",
    description: "AI-assisted platform to find relevant regulatory data",
    icon: Bot,
  },
  {
    id: "03",
    title: "Data Visualization Tools",
    description: "Accessible dashboards, dynamic maps, and alerts",
    icon: BarChart3,
  },
  {
    id: "04",
    title: "Permitting & Review Solutions",
    description: "AI-powered permitting, licensing, bill, and public request reviews",
    icon: ClipboardCheck,
  },
];

const CapabilityCard = ({ cap, index }: { cap: typeof capabilities[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = cap.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative border-t border-border p-8 sm:p-10 lg:p-16 group overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)] hover:-translate-y-1 ${
        index % 2 === 0 ? "md:border-r" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CircuitCardBg active={hovered} />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <span className="font-display text-sm text-muted-foreground tracking-widest">
            {cap.id}
          </span>
          <Icon className="w-6 h-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-5 group-hover:text-primary transition-colors duration-300">
          {cap.title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed text-base">
          {cap.description}
        </p>
      </div>
    </motion.div>
  );
};

const CapabilitiesSection = () => (
  <section className="py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CircuitHeading
        text="Apaluma is the intelligence layer for government data"
        className="mb-10 sm:mb-16 lg:mb-20"
      />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {capabilities.map((cap, i) => (
        <CapabilityCard key={cap.id} cap={cap} index={i} />
      ))}
    </div>
  </section>
);

export default CapabilitiesSection;
