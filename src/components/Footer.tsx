import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.92a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.35z"/>
  </svg>
);

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576465690122", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/autoskolakubon/", icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@autoskola.kubon", icon: TikTokIcon },
];

const Footer = () => (
  <footer className="bg-hero relative overflow-hidden">
    {/* Decorative top border */}
    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    {/* Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

    <div className="container relative py-12">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <p className="font-heading font-bold text-hero-foreground text-xl mb-2">
            Autoškola <span className="text-gradient">Kuboň</span>
          </p>
          <p className="text-hero-foreground/40 text-sm leading-relaxed mb-4">
            Profesionální výuka řízení s individuálním přístupem ke každému žákovi.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-hero-foreground/10 text-hero-foreground/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2.5">
          <p className="font-heading font-semibold text-hero-foreground/70 text-xs uppercase tracking-wider mb-3">Kontakt</p>
          <a href="mailto:autoskolakubon@gmail.com" className="flex items-center gap-2 text-sm text-hero-foreground/50 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" /> autoskolakubon@gmail.com
          </a>
          <a href="tel:+420774277865" className="flex items-center gap-2 text-sm text-hero-foreground/50 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" /> 774 277 865
          </a>
          <p className="flex items-center gap-2 text-sm text-hero-foreground/50">
            <MapPin className="w-3.5 h-3.5" /> U Stromovky 9, Havířov
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-heading font-semibold text-hero-foreground/70 text-xs uppercase tracking-wider mb-3">Navigace</p>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { label: "Ceník", href: "#cenik" },
              { label: "Výuka", href: "#vyuka" },
              { label: "Služby", href: "#sluzby" },
              { label: "Kontakt", href: "#kontakt" },
            ].map(link => (
              <a key={link.href} href={link.href} className="text-sm text-hero-foreground/50 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-6 border-t border-hero-foreground/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-hero-foreground/30 text-xs">
            © {new Date().getFullYear()} Autoškola Kuboň. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/ochrana-soukromi"
              className="text-hero-foreground/30 hover:text-hero-foreground/60 text-xs transition-colors"
            >
              Ochrana soukromí
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/admin"
            className="w-8 h-8 flex items-center justify-center rounded-full text-hero-foreground/[0.08] hover:text-hero-foreground/30 hover:bg-hero-foreground/5 text-[10px] transition-all duration-300"
            aria-label="Administrace"
            title=""
          >
            ●
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
