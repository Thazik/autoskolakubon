import { motion } from "framer-motion";
import { BookOpen, Car, Globe } from "lucide-react";

const TrainingSection = () => {
  return (
    <section id="vyuka" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            <span className="text-gradient">Výuka</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Teorie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-8 border border-blue-subtle shadow-blue"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Teoretická výuka</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Teoretická výuka probíhá v učebně na adrese:{" "}
              <strong className="text-foreground">U Stromovky 9, Havířov</strong>{" "}
              (4. patro – budova má výtah)
            </p>
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.5!2d18.4308!3d49.7797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e34b5e0c0001%3A0x0!2sU+Stromovky+9%2C+Hav%C3%AD%C5%99ov!5e0!3m2!1scs!2scz!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa učebny"
              />
            </div>
          </motion.div>

          {/* Praxe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-8 border border-blue-subtle shadow-blue"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Praktický výcvik</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Praktický výcvik začíná na cvičišti určeném pouze pro naši autoškolu, kde se naučíte základní ovládání vozidla. Následně pokračuje výcvik v běžném provozu.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Jízdy probíhají ve městech:</strong> Havířov, Karviná, Orlová, Český Těšín, Ostrava
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Začátek jízd je možné domluvit na místě podle individuální dohody.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Závěrečné zkoušky</strong> probíhají v Havířově.
            </p>
          </motion.div>
        </div>

        {/* Angličtina */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-card rounded-xl p-8 border border-blue-subtle shadow-blue"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">Výuka v anglickém jazyce</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Nabízíme také možnost kompletní výuky a výcviku v anglickém jazyce. V případě potřeby zajistíme tlumočníka k závěrečným zkouškám.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
