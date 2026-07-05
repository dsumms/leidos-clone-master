import apalumaLogo from "@/assets/apaluma-logo.png";
import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 sm:py-16 px-6 sm:px-8 lg:px-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <img src={apalumaLogo} alt="Apaluma" className="h-10 object-contain mb-4" />
        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
          Together, we transform data into action, ensuring a sustainable future for generations to come.
        </p>
        <p className="font-display text-xs text-muted-foreground mt-4 font-bold">
          ALICIA J. KEYES, Founder and CEO
        </p>
      </div>

      <div>
        <p className="font-display text-xs text-muted-foreground tracking-widest mb-4">NAVIGATION</p>
        <div className="flex flex-col gap-3">
          {[
            { label: "Home", path: "/" },
            { label: "Features", path: "/features" },
            { label: "Talent", path: "/talent" },
            { label: "Substack", path: "/substack" },
            { label: "Contact", path: "/contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.path}
              className="font-display text-xs text-foreground tracking-wider hover:text-primary transition-colors duration-200"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="font-display text-xs text-muted-foreground tracking-widest mb-4">CONNECT</p>
        <div className="flex flex-col gap-3">
          <a
            href="https://substack.com/@aliciajkeyes"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs text-foreground tracking-wider hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
          >
            SUBSTACK <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div>
        <p className="font-display text-xs text-muted-foreground tracking-widest mb-4">LEGAL</p>
        <div className="flex flex-col gap-3">
          <a
            href="/privacy"
            className="font-display text-xs text-foreground tracking-wider hover:text-primary transition-colors duration-200"
          >
            PRIVACY POLICY
          </a>
          <a
            href="/terms"
            className="font-display text-xs text-foreground tracking-wider hover:text-primary transition-colors duration-200"
          >
            TERMS AND CONDITIONS
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-display text-xs text-muted-foreground">
        © Apaluma 2026. All rights reserved.
      </p>
      <a
        href="/contact"
        className="font-display text-xs text-primary tracking-widest hover:text-foreground transition-colors duration-200"
      >
        REQUEST A DEMO →
      </a>
    </div>
  </footer>
);

export default Footer;
