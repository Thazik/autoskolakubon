import akceLeto2026 from "@/assets/akce-leto-2026.jpg";

/**
 * AKTUALITY (novinky / akce) na hlavní stránce.
 *
 * Jak přidat / vyměnit aktualitu:
 *  1. Nahrajte obrázek do složky `src/assets/`.
 *  2. Nahoře ho naimportujte (viz `akceLeto2026`).
 *  3. Přidejte / upravte položku v poli `newsItems` níže.
 *
 * Pole `until` = poslední den, kdy se aktualita zobrazuje (formát "RRRR-MM-DD").
 * Po tomto datu se aktualita sama přestane zobrazovat.
 * Např. letní akce platí do 31. 8. 2026, takže od 1. 9. 2026 zmizí.
 * Chcete-li aktualitu zobrazovat trvale, nechte `until: null`.
 */
export interface NewsItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  /** Poslední den zobrazení ve formátu "RRRR-MM-DD", nebo null pro trvalé zobrazení. */
  until: string | null;
}

export const newsItems: NewsItem[] = [
  {
    id: "akce-leto-2026",
    eyebrow: "Letní akce 2026",
    title: "U nás začínají prázdniny dřív!",
    description:
      "Kompletní kurz skupiny B jen za 16 500 Kč. Přihlaste se do letního kurzu a získejte řidičák za zvýhodněnou cenu. Akce platí od 1. 6. do 31. 8. 2026.",
    image: akceLeto2026,
    imageAlt: "Letní akce 2026 – kompletní kurz skupiny B za 16 500 Kč",
    ctaLabel: "Přihlásit se do kurzu",
    ctaHref: "#kontakt",
    until: "2026-08-31",
  },
];

/** Vrátí pouze aktuality, které jsou k dnešnímu dni stále platné. */
export function getActiveNews(now: Date = new Date()): NewsItem[] {
  return newsItems.filter((item) => {
    if (!item.until) return true;
    // Platí do konce dne uvedeného v `until` (23:59:59.999).
    const end = new Date(`${item.until}T23:59:59.999`);
    return now.getTime() <= end.getTime();
  });
}

/** Je aktuálně alespoň jedna aktualita k zobrazení? */
export function hasActiveNews(now: Date = new Date()): boolean {
  return getActiveNews(now).length > 0;
}
