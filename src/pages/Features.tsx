import NavigationRail from "@/components/NavigationRail";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import featureDarkToLight from "@/assets/feature-dark-to-light.png";
import featureIntelligentAgent from "@/assets/feature-intelligent-agent.png";
import featureDataViz from "@/assets/feature-data-viz.png";
import featurePermitting from "@/assets/feature-permitting.png";

const featureImages = [featureDarkToLight, featureIntelligentAgent, featureDataViz, featurePermitting];

const features = [
  {
    id: "01",
    title: "Dark to Light Data",
    subtitle: "Document search system to quickly access documents",
    description: "Search across all bureaus and program areas. Filter by permit type, year, and county. Digitize and organize legacy government records into structured, searchable data.",
  },
  {
    id: "02",
    title: "Unified Intelligence Platform",
    subtitle: "AI-assisted platform to find relevant regulatory data",
    description: "Ask questions in natural language and get answers backed by source documents. Luma understands environmental regulation across Air Quality Bureau, Solid Waste Bureau, and Ground Water Quality Bureau.",
  },
  {
    id: "03",
    title: "Location Lifecycle Management",
    subtitle: "Accessible dashboards, dynamic maps, and alerts",
    description: "Turn complex environmental datasets into clear, actionable visual intelligence for decision makers. Interactive maps, charts, and real-time monitoring dashboards.",
  },
  {
    id: "04",
    title: "Regulatory Workflow Optimization",
    subtitle: "AI-powered permitting, licensing, bill, and public request reviews",
    
    description: "Accelerate review cycles with intelligent document analysis. Automatically flag inconsistencies, validate addresses, and cross-reference regulatory requirements.",
  },
];

const Features = () => (
  <div className="min-h-screen bg-background">
    <NavigationRail />
    <main className="lg:content-offset pt-24 lg:pt-0">
      <section className="min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-16">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground max-w-3xl">
          Product <span className="gradient-text">Features</span>
        </h1>
      </section>

      {features.map((feat) => (
        <motion.section
          key={feat.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border py-10 sm:py-16 px-6 sm:px-8 lg:px-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display text-xs text-muted-foreground tracking-widest">{feat.id}</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">{feat.title}</h2>
              <p className="font-display text-sm text-primary mb-6">{feat.subtitle}</p>
              <p className="font-body text-muted-foreground leading-relaxed">{feat.description}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={featureImages[parseInt(feat.id) - 1]}
                alt={feat.title}
                className="w-full max-w-md opacity-80"
              />
            </motion.div>
          </div>
        </motion.section>
      ))}

      <section className="border-t border-border py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-16">
        <div className="max-w-xl">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Interested in Learning More?
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Contact us to learn more about Apaluma, request pricing, schedule a demo, or join our beta program.
          </p>
          <a
            href="/contact"
            className="font-display text-sm tracking-widest text-primary border border-primary px-6 py-3 inline-block hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            CONTACT US
          </a>
        </div>
      </section>

      <Footer />
    </main>
  </div>
);

export default Features;
