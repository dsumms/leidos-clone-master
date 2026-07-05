import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import apalumaLogo from "@/assets/apaluma-logo.png";
import CircuitLogo from "./CircuitLogo";
import NavButton from "./NavButton";

const navItems = [
  { label: "Features", path: "/features", icon: "FEATURES" },
  { label: "Talent", path: "/talent", icon: "TALENT" },
  { label: "Substack", path: "/substack", icon: "SUBSTACK" },
  { label: "Contact", path: "/contact", icon: "CONTACT" },
];

const NavigationRail = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      <nav className="nav-rail hidden lg:flex">
        <Link to="/">
          <CircuitLogo />
        </Link>

        <div className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <NavButton
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>

        <div className="font-display text-[10px] text-muted-foreground tracking-widest" style={{ writingMode: "vertical-rl" }}>
          © 2026
        </div>
      </nav>

      <MobileNav />
    </>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/">
          <img src={apalumaLogo} alt="Apaluma" className="h-8 object-contain" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block w-5 h-[1.5px] bg-foreground"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block w-5 h-[1.5px] bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block w-5 h-[1.5px] bg-foreground"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-border"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-display text-sm tracking-widest ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationRail;
