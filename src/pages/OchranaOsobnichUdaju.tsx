import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OchranaOsobnichUdaju = () => (
  <div className="min-h-screen bg-background">
    <div className="container max-w-3xl py-12 px-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Zpět na hlavní stránku
      </Link>

      <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
        Zásady ochrany osobních údajů
      </h1>

      <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">
        <p className="text-foreground/60 text-sm">
          Platné a účinné od: 30. 3. 2026
        </p>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">I. Základní ustanovení</h2>
          <p>
            1. Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „<strong>GDPR</strong>”) je podnikající fyzická osoba <strong>IČO: 24524948</strong> se sídlem U Stromovky 9, Havířov, podnikající pod názvem Autoškola Kuboň (dále jen: „<strong>správce</strong>“).
          </p>
          <p>
            2. Kontaktní údaje správce jsou:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Adresa:</strong> U Stromovky 9, Havířov</li>
            <li><strong>Email:</strong> autoskolakubon@gmail.com</li>
            <li><strong>Telefon:</strong> +420 774 277 865</li>
          </ul>
          <p className="mt-4">
            3. Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">II. Zdroje a kategorie zpracovávaných osobních údajů</h2>
          <p>
            Správce zpracovává osobní údaje, které jste mu poskytl/a, nebo osobní údaje, které správce získal na základě plnění Vaší objednávky/přihlášky. Jedná se především o:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Jméno a příjmení,</li>
            <li>Kontaktní údaje (e-mail, telefonní číslo),</li>
            <li>Údaje požadované zákonem pro přihlášení do autoškoly (např. věk/datum narození, údaje o zdravotní způsobilosti),</li>
            <li>Případné další údaje předané v rámci komunikace nebo zprávy.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">III. Zákonný důvod a účel zpracování osobních údajů</h2>
          <p>Zákonným důvodem zpracování osobních údajů je:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>plnění smlouvy (nástup do výcviku) mezi Vámi a správcem podle čl. 6 odst. 1 písm. b) GDPR,</li>
            <li>plnění právních povinností správce (vyplývajících zejména ze zákona č. 247/2000 Sb., o získávání a zdokonalování odborné způsobilosti k řízení motorových vozidel) podle čl. 6 odst. 1 písm. c) GDPR,</li>
            <li>oprávněný zájem správce na poskytování přímého marketingu (zejména pro zasílání odpovědí a obchodních sdělení) podle čl. 6 odst. 1 písm. f) GDPR,</li>
            <li>Váš souhlas se zpracováním pro účely evidence lékařských posudků podle čl. 9 odst. 2 písm. a) GDPR.</li>
          </ul>
          <p className="mt-4">Účelem zpracování osobních údajů je:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>vyřízení Vaší přihlášky a výkon s tím spojených práv a povinností,</li>
            <li>zajištění komunikace ze strany autoškoly,</li>
            <li>splnění zákonných ohlašovacích a evidenčních povinností vůči státním úřadům (např. obci s rozšířenou působností).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">IV. Doba uchovávání údajů</h2>
          <p>
            Správce uchovává osobní údaje:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem a uplatňování nároků z těchto smluvních vztahů,</li>
            <li>po dobu, kterou správci ukládají příslušné zákony pro evidenci a archivaci (zpravidla 5 let u dokumentace z výcviku dle zákona č. 247/2000 Sb., pokud zvláštní předpis nestanoví jinak),</li>
            <li>po dobu, než je odvolán souhlas se zpracováním osobních údajů, je-li zpracování založeno na souhlasu.</li>
          </ul>
          <p className="mt-2">Po uplynutí doby uchovávání osobních údajů správce osobní údaje bezpečně vymaže nebo anonymizuje.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">V. Příjemci osobních údajů</h2>
          <p>
            Příjemci osobních údajů jsou osoby:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>podílející se na dodání služeb (instruktoři, administrativní pracovníci),</li>
            <li>státní orgány a zkušební komisaři za účelem přihlášení k závěrečným zkouškám a vedení zákonné evidence,</li>
            <li>zajišťující provoz webu a odesílání e-mailů (poskytovatelé hostingových a e-mailingových služeb – např. Supabase, Vercel, Resend).</li>
          </ul>
          <p className="mt-2">Správce nemá v úmyslu předat osobní údaje do třetí země (mimo EU) nebo mezinárodní organizaci nesplňující podmínky GDPR.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">VI. Vaše práva</h2>
          <p>Za podmínek stanovených v GDPR máte:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>právo na přístup ke svým osobním údajům dle čl. 15 GDPR,</li>
            <li>právo na opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR,</li>
            <li>právo na výmaz osobních údajů dle čl. 17 GDPR,</li>
            <li>právo vznést námitku proti zpracování dle čl. 21 GDPR,</li>
            <li>právo na přenositelnost údajů dle čl. 20 GDPR,</li>
            <li>právo odvolat souhlas se zpracováním písemně nebo elektronicky na adresu nebo email správce.</li>
          </ul>
          <p className="mt-2">Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domníváte, že bylo porušeno Vaše právo na ochranu osobních údajů. Správce neprovádí automatizované individuální rozhodování ani profilování ve smyslu čl. 22 GDPR.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">VII. Podmínky zabezpečení osobních údajů</h2>
          <p>
            Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů. Veškerá data v elektronické podobě jsou uchovávána na zabezpečených serverech s odpovídajícím šifrováním. K osobním údajům mají přístup pouze jím pověřené osoby.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">VIII. Závěrečná ustanovení</h2>
          <p>
            Odesláním přihlášky nebo lékařského potvrzení z internetového objednávkového formuláře potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.
          </p>
          <p className="mt-2">
            Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých internetových stránkách.
          </p>
        </section>

      </div>
    </div>
  </div>
);

export default OchranaOsobnichUdaju;
