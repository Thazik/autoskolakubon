import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="uvod" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Autoškola Kuboň" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-hero/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/20 to-hero/50" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-light/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-10 text-center py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="badge-primary">Autoškola v Havířově</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-hero-foreground mb-6 leading-tight"
        >
          Autoškola{" "}
          <span className="text-gradient">Kuboň</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-hero-foreground/70 leading-relaxed font-light"
        >
          V Autoškole Kuboň nabízíme profesionální výuku řízení s individuálním přístupem ke každému žákovi.
          Naším cílem je naučit Vás řídit sebejistě, bezpečně a připravit Vás na skutečný provoz na silnicích.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-xl shadow-blue-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
          >
            Přihlásit se do kurzu
          </a>
          <a
            href="#cenik"
            className="inline-flex items-center justify-center px-8 py-4 border border-hero-foreground/15 text-hero-foreground font-heading font-bold text-sm rounded-xl hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
          >
            Zobrazit ceník
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-hero-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
