import { motion } from "framer-motion";
import { Download } from "lucide-react";

const services = [
  { name: "Doplňková jízda", desc: "Určeno pro studenty naší autoškoly jako doplnění výcviku", price: "600 Kč / 45 min" },
  { name: "Kondiční jízda", desc: "Určeno pro držitele řidičského oprávnění", price: "700 Kč / 45 min" },
  { name: "Balíček 4 kondičních jízd", desc: "", price: "2 500 Kč" },
  { name: "Vrácení řidičského oprávnění", desc: "2× 45 min jízdy", price: "4 500 Kč" },
  { name: "Kurz mentora (L17)", desc: "2× 45 min s instruktorem", price: "1 800 Kč" },
];

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-24 md:py-32 bg-section-alt section-decoration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">Rozšířená nabídka</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Další <span className="text-gradient">služby</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-between p-5 bg-card rounded-xl border border-blue-subtle card-hover gradient-border"
            >
              <div>
                <h3 className="font-heading font-bold text-foreground">{s.name}</h3>
                {s.desc && <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>}
              </div>
              <span className="font-heading font-bold text-primary whitespace-nowrap ml-4 text-lg">{s.price}</span>
            </motion.div>
          ))}
        </div>

        {/* Dárkový poukaz */}
        <motion.div
          id="darkovy-poukaz"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-16 bg-card rounded-2xl border border-blue-subtle shadow-blue-lg p-8 md:p-10 text-center relative overflow-hidden gradient-border"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative">
            <span className="badge-primary mb-4 inline-block">Tip na dárek</span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Dárkový <span className="text-gradient">poukaz</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Darujte svým blízkým řidičský průkaz! Dárkový poukaz na kurz autoškoly je skvělý dárek k narozeninám, Vánocům nebo jiné příležitosti. Poukaz je platný 12 měsíců od zakoupení.
            </p>
            <img
              src="/documents/darkovy-poukaz.png"
              alt="Dárkový poukaz Autoškola Kuboň"
              className="w-full max-w-md mx-auto rounded-xl border border-blue-subtle mb-6 shadow-blue"
            />
            <a
              href="/documents/darkovy-poukaz.png"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-xl shadow-blue hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Stáhnout dárkový poukaz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
