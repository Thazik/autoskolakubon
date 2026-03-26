import { motion } from "framer-motion";
import car2 from "@/assets/car2.jpg";
import car3 from "@/assets/car3.jpg";

const cars = [
  { src: car2, alt: "Autoškola Kuboň – Škoda Fabia" },
  { src: car3, alt: "Autoškola Kuboň – Škoda Karoq" },
];

const FleetSection = () => {
  return (
    <section id="vozovy-park" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Vozový <span className="text-gradient">park</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Výcvik probíhá na moderních vozidlech značky Škoda
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cars.map((car, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-blue-subtle shadow-blue group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={car.src}
                  alt={car.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
