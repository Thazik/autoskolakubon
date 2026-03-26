import { motion } from "framer-motion";
import { Shield, GraduationCap } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="tym" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Náš <span className="text-gradient">tým</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Zkušení profesionálové, kteří Vás provedou celým kurzem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Vedení */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-xl p-8 shadow-blue border border-blue-subtle"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Vedení autoškoly</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-section-alt">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  AK
                </div>
                <span className="font-medium text-foreground">Bc. Adam Kuboň</span>
              </div>
            </div>
          </motion.div>

          {/* Učitelé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-blue border border-blue-subtle"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Učitelé</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-section-alt">
                <div className="w-10 h-10 rounded-full bg-blue-dark flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  RK
                </div>
                <span className="font-medium text-foreground">Rostislav Kuboň</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-section-alt">
                <div className="w-10 h-10 rounded-full bg-blue-dark flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  AK
                </div>
                <span className="font-medium text-foreground">Adam Kuboň</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
