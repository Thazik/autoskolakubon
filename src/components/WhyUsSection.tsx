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
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Proč si vybrat právě <span className="text-gradient">nás</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-section-alt border border-blue-subtle hover:shadow-blue transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
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
          className="max-w-3xl mx-auto text-center bg-hero rounded-2xl p-10 md:p-14 shadow-blue"
        >
          <p className="text-hero-foreground/80 text-lg leading-relaxed mb-6">
            Každý žák je pro nás <span className="font-heading font-black text-2xl md:text-3xl text-gradient block mt-2">ORIGINÁL</span>
          </p>
          <p className="text-hero-foreground/70 leading-relaxed">
            Výuku přizpůsobujeme Vašim potřebám i tempu učení, abyste získali jistotu za volantem a úspěšně zvládli závěrečnou zkoušku.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
