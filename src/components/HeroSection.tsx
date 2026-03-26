import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="uvod" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Autoškola Kuboň" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-hero/60" />
      </div>

      <div className="container relative z-10 text-center py-32 md:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-hero-foreground mb-6 leading-tight"
        >
          Autoškola{" "}
          <span className="text-gradient">Kuboň</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-hero-foreground/80 leading-relaxed font-light"
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
          <a href="#kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-lg shadow-blue hover:brightness-110 transition-all">
            Přihlásit se do kurzu
          </a>
          <a href="#cenik" className="inline-flex items-center justify-center px-8 py-4 border border-hero-foreground/20 text-hero-foreground font-heading font-bold text-sm rounded-lg hover:border-primary hover:text-primary transition-all">
            Zobrazit ceník
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
