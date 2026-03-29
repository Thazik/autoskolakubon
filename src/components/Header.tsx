import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Úvod", href: "#uvod" },
  { label: "Vedení a učitelé", href: "#tym" },
  { label: "Výuka", href: "#vyuka" },
  { label: "Vozový park", href: "#vozovy-park" },
  { label: "Ceník", href: "#cenik" },
  { label: "Další služby", href: "#sluzby" },
  { label: "Dárkový poukaz", href: "#darkovy-poukaz" },
  { label: "Opakování a opravné zkoušky", href: "#opravy" },
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
        </nav>
      )}
    </header>
  );
};

export default Header;
