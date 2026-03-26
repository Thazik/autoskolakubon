import { motion } from "framer-motion";
import { Car, GraduationCap, Zap, Globe, Sparkles } from "lucide-react";

const plans = [
  {
    icon: Car,
    title: "Skupina B",
    subtitle: "Manuální převodovka",
    description: "Motorová vozidla do 3 500 kg, možnost připojení přívěsu do 750 kg",
    price: "18 000",
    note: "Možnost zahájení kurzu již od 17 let",
  },
  {
    icon: Sparkles,
    title: "Skupina B – L17",
    subtitle: "",
    description: "Možnost přihlášení rok a půl před dovršením 17 let",
    price: "18 000",
  },
  {
    icon: GraduationCap,
    title: "Studentská sleva skupiny B",
    subtitle: "",
    description: "Sleva pro studenty po předložení potvrzení o studiu. Sleva se vztahuje na standardní kurz skupiny B",
    price: "17 000",
  },
  {
    icon: Zap,
    title: "Rychlokurz skupiny B",
    subtitle: "",
    description: "Intenzivní kurz dokončený přibližně do 30 dnů",
    price: "23 000",
    highlight: true,
  },
  {
    icon: Globe,
    title: "Skupina B – Výuka v angličtině",
    subtitle: "",
    description: "Výuka i praktický výcvik v angličtině. Tlumočník ke zkoušce zajištěn",
    price: "23 000",
  },
];

const PricingSection = () => {
  return (
    <section id="cenik" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            <span className="text-gradient">Ceník</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-xl p-8 border transition-shadow hover:shadow-blue ${
                plan.highlight
                  ? "bg-hero border-primary shadow-blue"
                  : "bg-card border-blue-subtle"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  plan.highlight ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.highlight ? "text-blue-light" : "text-primary"}`} />
                </div>
                <h3 className={`font-heading font-bold text-lg ${
                  plan.highlight ? "text-hero-foreground" : "text-foreground"
                }`}>
                  {plan.title}
                </h3>
              </div>
              {plan.subtitle && (
                <p className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                  plan.highlight ? "text-blue-light" : "text-primary"
                }`}>
                  {plan.subtitle}
                </p>
              )}
              <p className={`text-sm leading-relaxed mb-6 ${
                plan.highlight ? "text-hero-foreground/70" : "text-muted-foreground"
              }`}>
                {plan.description}
              </p>
              <div className={`font-heading font-black text-3xl ${
                plan.highlight ? "text-hero-foreground" : "text-foreground"
              }`}>
                {plan.price} <span className="text-base font-medium">Kč</span>
              </div>
              {plan.note && (
                <p className={`mt-3 text-xs ${
                  plan.highlight ? "text-hero-foreground/60" : "text-muted-foreground"
                }`}>
                  {plan.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
