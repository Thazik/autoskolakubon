import { motion } from "framer-motion";

const services = [
  { name: "Doplňková jízda", desc: "Určeno pro studenty naší autoškoly jako doplnění výcviku", price: "600 Kč / 45 min" },
  { name: "Kondiční jízda", desc: "Určeno pro držitele řidičského oprávnění", price: "700 Kč / 45 min" },
  { name: "Balíček 4 kondičních jízd", desc: "", price: "2 500 Kč" },
  { name: "Vrácení řidičského oprávnění", desc: "2× 45 min jízdy", price: "4 500 Kč" },
  { name: "Kurz mentora (L17)", desc: "2× 45 min s instruktorem", price: "1 800 Kč" },
];

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Další <span className="text-gradient">služby</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between p-5 bg-card rounded-xl border border-blue-subtle hover:shadow-blue transition-shadow"
            >
              <div>
                <h3 className="font-heading font-bold text-foreground">{s.name}</h3>
                {s.desc && <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>}
              </div>
              <span className="font-heading font-bold text-primary whitespace-nowrap ml-4">{s.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
