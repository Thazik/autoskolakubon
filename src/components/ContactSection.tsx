import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, Send, Upload, CalendarDays } from "lucide-react";

const ContactSection = () => {
  // Přihláška
  const [appForm, setAppForm] = useState({ name: "", email: "", phone: "", course: "B", message: "" });
  const [appSent, setAppSent] = useState(false);

  // Lékařské potvrzení
  const [medFile, setMedFile] = useState<File | null>(null);
  const [medName, setMedName] = useState("");
  const [medSent, setMedSent] = useState(false);

  // Rezervace
  const [resForm, setResForm] = useState({ name: "", email: "", phone: "", date: "", time: "", type: "kondic" });
  const [resSent, setResSent] = useState(false);

  const handleAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Přihláška do kurzu – ${appForm.name}`);
    const body = encodeURIComponent(
      `Jméno: ${appForm.name}\nEmail: ${appForm.email}\nTelefon: ${appForm.phone}\nKurz: ${appForm.course}\nZpráva: ${appForm.message}`
    );
    window.open(`mailto:autoskolakubon@gmail.com?subject=${subject}&body=${body}`);
    setAppSent(true);
  };

  const handleMedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Lékařské potvrzení – ${medName}`);
    const body = encodeURIComponent(
      `Lékařské potvrzení od: ${medName}\n\nProsím, přiložte soubor k tomuto e-mailu.`
    );
    window.open(`mailto:autoskolakubon@gmail.com?subject=${subject}&body=${body}`);
    setMedSent(true);
  };

  const handleResSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = "Kondiční jízda";
    const subject = encodeURIComponent(`Rezervace – ${typeLabel} – ${resForm.name}`);
    const body = encodeURIComponent(
      `Jméno: ${resForm.name}\nEmail: ${resForm.email}\nTelefon: ${resForm.phone}\nDatum: ${resForm.date}\nČas: ${resForm.time}\nTyp: ${typeLabel}`
    );
    window.open(`mailto:autoskolakubon@gmail.com?subject=${subject}&body=${body}`);
    setResSent(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-section-alt border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const btnClass = "w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-lg shadow-blue hover:brightness-110 transition-all disabled:opacity-50";

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            <span className="text-gradient">Kontakt</span>
          </h2>
        </motion.div>

        {/* Otevírací doba */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-14 bg-card rounded-xl p-8 border border-blue-subtle shadow-blue text-center"
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">Otevírací doba</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Navštivte nás v naší kanceláři na adrese U Stromovky 9, Havířov. Mimo uvedené hodiny je možná domluva telefonicky.
          </p>
          <img
            src="/images/oteviraci-doba.jpeg"
            alt="Otevírací doba autoškoly Kuboň"
            className="mx-auto rounded-lg max-w-md w-full"
          />
        </motion.div>

        {/* Kontaktní info */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { icon: Mail, label: "Email", value: "autoskolakubon@gmail.com", href: "mailto:autoskolakubon@gmail.com" },
            { icon: Phone, label: "Telefon", value: "774 277 865", href: "tel:+420774277865" },
            { icon: Building2, label: "IČO", value: "24524948" },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 bg-card rounded-xl border border-blue-subtle"
            >
              <c.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="font-medium text-foreground hover:text-primary transition-colors text-sm">
                  {c.value}
                </a>
              ) : (
                <p className="font-medium text-foreground text-sm">{c.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mapa */}
        <div className="max-w-3xl mx-auto mb-16 rounded-xl overflow-hidden border border-blue-subtle shadow-blue">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.5!2d18.4308!3d49.7797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e34b5e0c0001%3A0x0!2sU+Stromovky+9%2C+Hav%C3%AD%C5%99ov!5e0!3m2!1scs!2scz!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa autoškoly"
          />
        </div>

        {/* Forms grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Přihláška */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-8 border border-blue-subtle shadow-blue"
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-lg text-foreground">Online přihláška</h3>
            </div>
            {appSent ? (
              <p className="text-primary font-medium">E-mailový klient byl otevřen. Odešlete prosím e-mail.</p>
            ) : (
              <form onSubmit={handleAppSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>Jméno a příjmení</label>
                  <input className={inputClass} required maxLength={100} value={appForm.name} onChange={e => setAppForm(p => ({...p, name: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" className={inputClass} required maxLength={255} value={appForm.email} onChange={e => setAppForm(p => ({...p, email: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Telefon</label>
                  <input type="tel" className={inputClass} required maxLength={20} value={appForm.phone} onChange={e => setAppForm(p => ({...p, phone: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Kurz</label>
                  <select className={inputClass} value={appForm.course} onChange={e => setAppForm(p => ({...p, course: e.target.value}))}>
                    <option value="B">Skupina B</option>
                    <option value="B-L17">Skupina B – L17</option>
                    <option value="B-student">Studentská sleva</option>
                    <option value="B-rychlo">Rychlokurz</option>
                    <option value="B-en">Výuka v angličtině</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Zpráva</label>
                  <textarea className={inputClass} rows={3} maxLength={1000} value={appForm.message} onChange={e => setAppForm(p => ({...p, message: e.target.value}))} />
                </div>
                <button type="submit" className={btnClass}>
                  <Send className="w-4 h-4" /> Odeslat přihlášku
                </button>
              </form>
            )}
          </motion.div>

          {/* Lékařské potvrzení */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-8 border border-blue-subtle shadow-blue"
          >
            <div className="flex items-center gap-3 mb-6">
              <Upload className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-lg text-foreground">Lékařské potvrzení</h3>
            </div>

            {/* Stáhnout formulář */}
            <a
              href="/documents/posudek-o-zdravotni-zpusobilosti.pdf"
              download
              className="flex items-center gap-2 mb-6 px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Stáhnout formulář posudku
            </a>

            {medSent ? (
              <p className="text-primary font-medium">E-mailový klient byl otevřen. Připojte prosím soubor a odešlete.</p>
            ) : (
              <form onSubmit={handleMedSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>Jméno a příjmení</label>
                  <input className={inputClass} required maxLength={100} value={medName} onChange={e => setMedName(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Soubor (připojte v e-mailu)</label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className={inputClass}
                    onChange={e => setMedFile(e.target.files?.[0] || null)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Soubor bude nutné přiložit ručně v otevřeném e-mailovém klientu.
                  </p>
                </div>
                <button type="submit" className={btnClass}>
                  <Upload className="w-4 h-4" /> Odeslat potvrzení
                </button>
              </form>
            )}
          </motion.div>

          {/* Rezervace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-8 border border-blue-subtle shadow-blue"
          >
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-lg text-foreground">Rezervační systém</h3>
            </div>
            {resSent ? (
              <p className="text-primary font-medium">E-mailový klient byl otevřen. Odešlete prosím e-mail k potvrzení rezervace.</p>
            ) : (
              <form onSubmit={handleResSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>Jméno a příjmení</label>
                  <input className={inputClass} required maxLength={100} value={resForm.name} onChange={e => setResForm(p => ({...p, name: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" className={inputClass} required maxLength={255} value={resForm.email} onChange={e => setResForm(p => ({...p, email: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Telefon</label>
                  <input type="tel" className={inputClass} required maxLength={20} value={resForm.phone} onChange={e => setResForm(p => ({...p, phone: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Typ</label>
                  <select className={inputClass} value={resForm.type} onChange={e => setResForm(p => ({...p, type: e.target.value}))}>
                    <option value="kondic">Kondiční jízda</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Datum</label>
                    <input type="date" className={inputClass} required value={resForm.date} onChange={e => setResForm(p => ({...p, date: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Čas</label>
                    <input type="time" className={inputClass} required value={resForm.time} onChange={e => setResForm(p => ({...p, time: e.target.value}))} />
                  </div>
                </div>
                <button type="submit" className={btnClass}>
                  <CalendarDays className="w-4 h-4" /> Rezervovat
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
