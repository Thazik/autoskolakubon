import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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
      {/* Top row: logo + brand */}
      <div className="container flex items-center justify-center gap-3 pt-2 pb-1">
        <a href="#uvod" className="flex items-center gap-2">
          <img src={logo} alt="Autoškola Kuboň logo" className="h-10 md:h-12 w-auto rounded-md" />
          <span className="font-heading font-bold text-lg md:text-xl tracking-wide uppercase text-primary-foreground">
            Autoškola <span className="text-gradient">Kuboň</span>
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-4 lg:hidden text-hero-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Bottom row: nav centered */}
      <nav className="hidden lg:flex items-center justify-center gap-1 pb-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 py-1 text-[13px] font-medium tracking-wide uppercase text-hero-foreground/60 hover:text-primary transition-colors rounded-md"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-hero border-t border-blue-glow/10 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium tracking-wide uppercase text-hero-foreground/60 hover:text-primary transition-colors"
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
