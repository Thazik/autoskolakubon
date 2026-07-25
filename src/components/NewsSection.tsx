import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { getActiveNews } from "@/lib/news";

const NewsSection = () => {
  const news = getActiveNews();

  // Žádná aktivní aktualita → sekce se vůbec nevykreslí (např. po skončení akce).
  if (news.length === 0) return null;

  return (
    <section id="aktuality" className="py-20 md:py-28 section-decoration scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-primary mb-4 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Aktuality
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Co je u nás <span className="text-gradient">nového</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {news.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-card border border-blue-subtle rounded-3xl p-6 md:p-10 shadow-blue-lg gradient-border"
            >
              {/* Obrázek akce */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text + tlačítko */}
              <div className="text-center md:text-left">
                <span className="badge-primary mb-4 inline-block">{item.eyebrow}</span>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {item.description}
                </p>
                <a
                  href={item.ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-xl shadow-blue-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
                >
                  {item.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
