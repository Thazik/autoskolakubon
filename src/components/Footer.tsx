const Footer = () => (
  <footer className="bg-hero py-10">
    <div className="container text-center">
      <p className="font-heading font-bold text-hero-foreground text-lg mb-2">
        Autoškola <span className="text-gradient">Kuboň</span>
      </p>
      <p className="text-hero-foreground/50 text-sm">
        © {new Date().getFullYear()} Autoškola Kuboň. Všechna práva vyhrazena.
      </p>
    </div>
  </footer>
);

export default Footer;
