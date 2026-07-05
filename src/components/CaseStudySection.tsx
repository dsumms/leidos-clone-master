import { motion } from "framer-motion";

const CaseStudySection = () => (
  <section className="py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-secondary/30">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-display text-xs text-muted-foreground tracking-widest mb-4">
        CASE STUDY
      </p>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
        New Mexico Environment Department's Project Velocity
      </h2>
      <p className="font-display text-base text-primary italic max-w-2xl mb-8">
        "Transforming decades of legacy environmental records into an intelligent, searchable platform — across air, water, waste, and energy."
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-4xl"
    >
      <p className="font-body text-muted-foreground leading-relaxed mb-8">
        Apaluma partnered with the New Mexico Environment Department to digitize and illuminate
        critical environmental datasets, transforming legacy document systems into an intelligent,
        searchable platform across air quality, water, waste, and energy programs.
      </p>
      <a
        href="/features"
        className="font-display text-sm tracking-widest text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-200"
      >
        VIEW CASE STUDY
      </a>
    </motion.div>
  </section>
);

export default CaseStudySection;
