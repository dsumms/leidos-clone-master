import NavigationRail from "@/components/NavigationRail";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "01",
    title: "Internships",
    description:
      "We offer structured, cohort-based internships for post-graduates and early-career professionals. Interns work on real projects alongside our team—not in a silo, not on simulations. They gain hands-on experience in AI, data, product development, policy, and business strategy, grounded in Apaluma's operations. And they leave with more than a line on a resume: they leave with networks, mentors, and a working understanding of how technology companies are built.",
  },
  {
    id: "02",
    title: "Innovation & Venture Support",
    description:
      "We create space for mid-career professionals, researchers, and entrepreneurial talent to work on applied challenges at the intersection of technology and real-world problems. The goal is not just to produce good work inside Apaluma—it is to help seed new ventures, new partnerships, and new companies that are native to New Mexico. We connect participants to investors, partners, and the operational knowledge that turns good ideas into viable businesses.",
  },
  {
    id: "03",
    title: "Professors & Residents in Practice",
    description:
      "Talent needs supervision, and supervision needs credibility. We embed experienced academics and industry practitioners within our operations—people who have taught, built, led, and shipped. They mentor interns and innovation participants directly, design learning experiences, maintain standards, and serve as thought partners to our executive team. Their presence ensures that what we offer is rigorous, accountable, and grounded in real expertise.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Talent = () => (
  <div className="min-h-screen bg-background">
    <ScrollToTop />
    <NavigationRail />
    <main className="lg:content-offset pt-24 lg:pt-0">
      {/* Hero */}
      <section className="min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
        <motion.p
          {...fadeIn}
          className="font-display text-xs text-primary tracking-[0.3em] mb-6"
        >
          APALUMA
        </motion.p>
        <motion.h1
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight max-w-3xl"
        >
          <span className="gradient-text">Talent. Innovation. Ecosystem.</span>
        </motion.h1>
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-2xl leading-relaxed"
        >
          Our Commitment to Building New Mexico's Next Generation of Technology
          Leaders and Companies
        </motion.p>
      </section>

      {/* Mission intro */}
      <section className="border-t border-border py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-16">
        <div className="max-w-3xl space-y-6">
          <motion.p {...fadeIn} className="font-body text-foreground leading-relaxed">
            Apaluma is an environmental intelligence company. We build technology
            that helps governments and institutions make better decisions about
            the world around us. That is our work.
          </motion.p>
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            But we also believe that what we're building should not exist in
            isolation. New Mexico has extraordinary talent—in its universities,
            in its labs, in its communities—and too often that talent leaves
            because there is no clear path from ideas to companies, from
            ambition to execution. We want to change that.
          </motion.p>
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            Our commitment to talent development is not a program. It is a
            value. It is how our leadership chooses to build—by investing in
            people, by opening doors, and by creating the conditions for a
            technology ecosystem that is rooted here.
          </motion.p>
        </div>
      </section>

      {/* What We Offer heading */}
      <section className="border-t border-border py-12 sm:py-16 px-6 sm:px-8 lg:px-16">
        <motion.h2
          {...fadeIn}
          className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4"
        >
          What We <span className="gradient-text">Offer</span>
        </motion.h2>
      </section>

      {/* Three pillars */}
      {pillars.map((pillar, i) => (
        <motion.section
          key={pillar.id}
          {...fadeIn}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="border-t border-border py-10 sm:py-16 px-6 sm:px-8 lg:px-16"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-display text-xs text-muted-foreground tracking-widest">
                {pillar.id}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
              {pillar.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </div>
        </motion.section>
      ))}

      {/* Why This Matters */}
      <section className="border-t border-border py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-16">
        <div className="max-w-3xl space-y-6">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-4xl font-display font-bold text-foreground mb-6"
          >
            Why This <span className="gradient-text">Matters</span>
          </motion.h2>
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            New Mexico does not lack talent. It lacks infrastructure—the
            networks, the mentorship, the capital access, and the institutional
            knowledge that turn talent into companies and companies into an
            ecosystem. Apaluma is committed to being part of building that
            infrastructure, starting with the people closest to us and extending
            outward.
          </motion.p>
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-foreground leading-relaxed font-medium"
          >
            This is what our leadership believes in. This is what we invest in.
            And this is how we build.
          </motion.p>
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-xs text-muted-foreground tracking-widest pt-4"
          >
            Apaluma Inc. &nbsp;•&nbsp; apaluma.com &nbsp;•&nbsp; April 2026
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  </div>
);

export default Talent;
