import { motion } from "framer-motion";
import car2 from "@/assets/car2.jpg";
import car3 from "@/assets/car3.jpg";

const cars = [
  { src: car2, alt: "Autoškola Kuboň – Škoda Fabia", name: "Škoda Fabia" },
  { src: car3, alt: "Autoškola Kuboň – Škoda Karoq", name: "Škoda Karoq" },
];

const FleetSection = () => {
  return (
    <section id="vozovy-park" className="py-24 md:py-32 section-decoration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">Naše vozy</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Vozový <span className="text-gradient">park</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Výcvik probíhá na moderních vozidlech značky Škoda
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cars.map((car, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-blue-subtle shadow-blue group card-hover gradient-border"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={car.src}
                  alt={car.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-hero/80 to-transparent p-6">
                  <p className="font-heading font-bold text-hero-foreground text-lg">{car.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
