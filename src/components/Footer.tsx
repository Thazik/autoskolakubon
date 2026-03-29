import { Mail, Phone, MapPin } from "lucide-react";

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
          <p className="text-hero-foreground/40 text-sm leading-relaxed">
            Profesionální výuka řízení s individuálním přístupem ke každému žákovi.
          </p>
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
      <div className="pt-6 border-t border-hero-foreground/10 text-center">
        <p className="text-hero-foreground/30 text-xs">
          © {new Date().getFullYear()} Autoškola Kuboň. Všechna práva vyhrazena.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
