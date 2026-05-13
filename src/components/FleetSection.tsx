import { motion } from "framer-motion";
import fleet1 from "@/assets/fleet-1.jpg";
import fleet2 from "@/assets/fleet-2.jpg";
import fleet3 from "@/assets/fleet-3.jpg";
import fleet4 from "@/assets/fleet-4.jpg";

const cars = [
  { src: fleet1, alt: "Autoškola Kuboň – Škoda Karoq a Škoda Fabia", name: "Škoda Karoq & Fabia" },
  { src: fleet2, alt: "Autoškola Kuboň – Škoda Fabia a Škoda Karoq", name: "Vozový park" },
  { src: fleet3, alt: "Autoškola Kuboň – pohled zezadu", name: "Naše vozidla" },
  { src: fleet4, alt: "Autoškola Kuboň – Škoda Karoq a Fabia", name: "Profesionální vozy" },
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
            Výcvik probíhá na moderních vozidlech značky Škoda – Škoda Fabia a Škoda Karoq
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cars.map((car, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-blue-subtle shadow-blue group card-hover gradient-border"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
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
