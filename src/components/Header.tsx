import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Úvod", href: "#uvod" },
  { label: "Vedení a učitelé", href: "#tym" },
  { label: "Výuka", href: "#vyuka" },
  { label: "Vozový park", href: "#vozovy-park" },
  { label: "Ceník", href: "#cenik" },
  { label: "Další služby", href: "#sluzby" },
  { label: "Opakování a opravné zkoušky", href: "#opravy" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-blue-glow/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#uvod" className="font-heading font-extrabold text-xl md:text-2xl text-primary-foreground tracking-tight">
          Autoškola <span className="text-gradient">Kuboň</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-hero-foreground/70 hover:text-primary transition-colors rounded-md"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-hero-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-hero border-t border-blue-glow/10 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-hero-foreground/70 hover:text-primary transition-colors"
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
