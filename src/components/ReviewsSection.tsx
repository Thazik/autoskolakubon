import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://share.google/aiAKhSCBpzAKvZuHX";

const ReviewsSection = () => {
  return (
    <section id="recenze" className="py-24 md:py-32 bg-section-alt section-decoration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">Spokojení žáci</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            <span className="text-gradient">Google</span> recenze
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-10 md:p-12 border border-blue-subtle shadow-blue-lg gradient-border text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-light/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative">
            {/* Google logo + hodnocení */}
            <div className="flex flex-col items-center mb-6">
              <div className="font-heading font-black text-2xl mb-3">
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="font-heading font-black text-5xl md:text-6xl text-foreground mb-2">
                5,0
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Hodnocení na Google
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
              Naši žáci nás hodnotí těmi nejlepšími slovy. Přečtěte si jejich recenze
              přímo na Google nebo nám napište vlastní zkušenost s naší autoškolou.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-xl shadow-blue hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Zobrazit recenze
              </a>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-primary/30 text-primary font-heading font-bold text-sm rounded-xl hover:bg-primary/5 transition-all duration-200"
              >
                <Star className="w-4 h-4" />
                Napsat recenzi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
