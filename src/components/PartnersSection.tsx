import { motion } from "framer-motion";

const partners = [
  {
    name: "Autoškola eTesty",
    description: "Online testy autoškoly pro přípravu na závěrečnou zkoušku",
    logo: "/images/logo-etesty.jpg",
    url: "https://www.autoskola-testy.cz",
  },
  {
    name: "MOJE AUTOŠKOLA",
    description: "Moderní elektronická evidence – aplikace pro žáky autoškoly",
    logo: "/images/logo-moje-autoskola.jpg",
    url: "https://www.moje-autoskola.cz",
  },
];

const PartnersSection = () => {
  return (
    <section id="partneri" className="py-20 md:py-24 section-decoration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-primary mb-4 inline-block">Spolupracujeme</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Naši <span className="text-gradient">partneři</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Využíváme moderní nástroje pro přípravu a evidenci našich žáků
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue card-hover gradient-border flex flex-col items-center text-center group"
            >
              <div className="h-20 flex items-center justify-center mb-5">
                <img
                  src={partner.logo}
                  alt={`${partner.name} – logo`}
                  loading="lazy"
                  className="max-h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
