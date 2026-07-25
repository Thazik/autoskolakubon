import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-kubon.jpg";
import { hasActiveNews } from "@/lib/news";

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

const navItems = [
  { label: "Úvod", href: "#uvod" },
  // "Aktuality" se přidá jen tehdy, když je aktivní nějaká akce (viz src/lib/news.ts).
  ...(hasActiveNews() ? [{ label: "Aktuality", href: "#aktuality" }] : []),
  { label: "Vedení a učitelé", href: "#tym" },
  { label: "Výuka", href: "#vyuka" },
  { label: "Vozový park", href: "#vozovy-park" },
  { label: "Ceník", href: "#cenik" },
  { label: "Další služby", href: "#sluzby" },
  { label: "Dárkový poukaz", href: "#darkovy-poukaz" },
  { label: "Opakování a opravné zkoušky", href: "#opravy" },
  { label: "Recenze", href: "#recenze" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-primary/10 shadow-lg shadow-primary/5"
          : "bg-hero/90 backdrop-blur-sm border-b border-primary/5"
      }`}
    >
      {/* Top row: logo + brand */}
      <div className="container flex items-center justify-center gap-3 pt-3 pb-1">
        <a href="#uvod" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Autoškola Kuboň logo"
            className="h-10 md:h-12 w-auto rounded-md transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-heading font-bold text-lg md:text-xl tracking-wide uppercase text-primary-foreground">
            Autoškola <span className="text-gradient">Kuboň</span>
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-4 lg:hidden text-hero-foreground p-2 hover:text-primary transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Bottom row: nav */}
      <nav className="hidden lg:flex items-center justify-center flex-wrap gap-x-0.5 gap-y-0.5 pb-2.5 px-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative px-2.5 py-1.5 text-[12px] font-medium tracking-wide uppercase text-hero-foreground/50 hover:text-primary transition-all duration-200 rounded-md whitespace-nowrap hover:bg-primary/5"
          >
            {item.label}
          </a>
        ))}
        <span className="mx-2 h-4 w-px bg-hero-foreground/15" aria-hidden="true" />
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="p-1.5 text-hero-foreground/50 hover:text-primary transition-all duration-200 rounded-md hover:bg-primary/5"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden glass border-t border-primary/10 pb-4 animate-fade-in-up">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium tracking-wide uppercase text-hero-foreground/60 hover:text-primary hover:bg-primary/5 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center justify-center gap-2 px-6 pt-4 border-t border-primary/10 mt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-hero-foreground/10 text-hero-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
