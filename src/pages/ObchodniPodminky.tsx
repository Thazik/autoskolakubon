import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ObchodniPodminky = () => (
  <div className="min-h-screen bg-background">
    <div className="container max-w-3xl py-12 px-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Zpět na hlavní stránku
      </Link>

      <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
        Obchodní podmínky
      </h1>

      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p className="text-foreground/60 text-sm">
          Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}
        </p>

        <div className="p-6 rounded-2xl bg-card border border-blue-subtle">
          <p className="text-foreground/50 text-center text-sm">
            Obsah obchodních podmínek bude doplněn.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ObchodniPodminky;
