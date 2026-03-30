import { motion } from "framer-motion";
import { BookOpen, Car, Globe, MapPin, CheckCircle2 } from "lucide-react";
import ucebnaImg from "@/assets/ucebna.jpg";

const TrainingSection = () => {
  return (
    <section id="vyuka" className="py-24 md:py-32 bg-section-alt section-decoration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">Jak to funguje</span>
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
            className="bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue card-hover gradient-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center ring-1 ring-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Teoretická výuka</h3>
            </div>
            <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-section-alt border border-border/50">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">U Stromovky 9, Havířov</strong>{" "}
                (4. patro, budova má výtah)
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/50 mb-4">
              <img src={ucebnaImg} alt="Budova učebny U Stromovky 9, Havířov" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border/50">
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
            className="bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue card-hover gradient-border flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center ring-1 ring-primary/10">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Praktický výcvik</h3>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Výcvik začíná na cvičišti určeném pouze pro naši autoškolu a následně pokračuje v běžném provozu.
            </p>

            <div className="space-y-2 mb-4">
              {[
                { label: "Jízdy ve městech", value: "Havířov, Karviná, Orlová, Č. Těšín, Ostrava" },
                { label: "Závěrečné zkoušky", value: "Havířov" },
                { label: "Místo vyzvednutí", value: "dle individuální dohody" },
                { label: "Čas jízd", value: "přizpůsobíme vašemu rozvrhu" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-section-alt/80 border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{item.label}:</span>{" "}
                    <span className="text-muted-foreground">{item.value}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80000!2d18.38!3d49.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e34b5e0c0001%3A0x0!2sHav%C3%AD%C5%99ov!5e0!3m2!1scs!2scz!4v1"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oblast jízd"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Angličtina */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue card-hover gradient-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center ring-1 ring-primary/10">
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
