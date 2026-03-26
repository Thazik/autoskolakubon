import { motion } from "framer-motion";

const items = [
  { name: "Opakování výcviku", price: "16 000 Kč" },
  { name: "Opakování teorie", price: "4 000 Kč" },
  { name: "Opravné testy", price: "100 Kč", note: "povinný poplatek magistrátu" },
  { name: "Opravná jízda", price: "400 Kč", note: "povinný poplatek magistrátu" },
  { name: "Správní poplatek u první zkoušky", price: "700 Kč", note: "stanoven zákonem" },
];

const RetakeSection = () => {
  return (
    <section id="opravy" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Opakování a opravné <span className="text-gradient">zkoušky</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center justify-between p-4 rounded-lg bg-section-alt border border-blue-subtle"
            >
              <div>
                <span className="font-medium text-foreground">{item.name}</span>
                {item.note && <span className="text-xs text-muted-foreground ml-2">({item.note})</span>}
              </div>
              <span className="font-heading font-bold text-primary">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetakeSection;
