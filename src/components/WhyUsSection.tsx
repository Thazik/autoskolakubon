import { motion } from "framer-motion";
import {
  User, Clock, Smile, Calendar, Car, Zap, ShieldCheck, Gift,
} from "lucide-react";

const reasons = [
  { icon: User, text: "Individuální přístup ke každému žákovi" },
  { icon: Clock, text: "Dlouholeté zkušenosti v oblasti výuky řízení" },
  { icon: Smile, text: "Přátelská a trpělivá výuka bez stresu" },
  { icon: Calendar, text: "Přizpůsobení jízd vašemu času" },
  { icon: Car, text: "Moderní vozový park" },
  { icon: Zap, text: "Možnost rychlokurzu" },
  { icon: ShieldCheck, text: "Garantovaná cena kurzu (bez skrytých poplatků)" },
  { icon: Gift, text: "Možnost dárkového poukazu" },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 md:py-32 section-decoration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="badge-primary mb-4 inline-block">Naše výhody</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Proč si vybrat právě <span className="text-gradient">nás</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground max-w-lg mx-auto mb-14"
        >
          Nabízíme kompletní služby pro získání řidičského oprávnění s důrazem na kvalitu a bezpečnost
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-16">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-blue-subtle card-hover gradient-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 ring-1 ring-primary/10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium text-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-hero rounded-2xl p-10 md:p-14 shadow-blue-lg relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-light/10 rounded-full blur-[50px] pointer-events-none" />
          
          <div className="relative">
            <p className="text-hero-foreground/80 text-lg leading-relaxed mb-6">
              Každý žák je pro nás <span className="font-heading font-black text-2xl md:text-3xl text-gradient block mt-2">ORIGINÁL</span>
            </p>
            <p className="text-hero-foreground/60 leading-relaxed">
              Výuku přizpůsobujeme Vašim potřebám i tempu učení, abyste získali jistotu za volantem a úspěšně zvládli závěrečnou zkoušku.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
