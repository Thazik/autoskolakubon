import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, Send, Upload, Download, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const [appForm, setAppForm] = useState({ name: "", email: "", phone: "", course: "B", message: "" });
  const [appConsent, setAppConsent] = useState(false);
  const [appSent, setAppSent] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  const [appError, setAppError] = useState("");

  const [medName, setMedName] = useState("");
  const [medEmail, setMedEmail] = useState("");
  const [medFile, setMedFile] = useState<File | null>(null);
  const [medConsent, setMedConsent] = useState(false);
  const [medSent, setMedSent] = useState(false);
  const [medLoading, setMedLoading] = useState(false);
  const [medError, setMedError] = useState("");

  const handleAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appConsent) {
      setAppError("Pro odeslání přihlášky musíte souhlasit s podmínkami.");
      return;
    }
    setAppLoading(true);
    setAppError("");
    const { error } = await supabase.from("applications").insert({
      name: appForm.name,
      email: appForm.email,
      phone: appForm.phone,
      course: appForm.course,
      message: appForm.message || null,
    });
    setAppLoading(false);
    if (error) {
      setAppError("Nepodařilo se odeslat přihlášku. Zkuste to prosím znovu.");
      return;
    }
    setAppSent(true);

    // Odeslat potvrzovací email (na pozadí, nečekáme na výsledek)
    fetch("/api/send-application-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: appForm.name,
        email: appForm.email,
        phone: appForm.phone,
        course: appForm.course,
      }),
    }).catch(() => {});
  };

  const handleMedSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!medFile) return;
    if (!medConsent) {
      setMedError("Pro odeslání potvrzení musíte souhlasit s podmínkami.");
      return;
    }
    setMedLoading(true);
    setMedError("");

    const ext = medFile.name.split(".").pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("medical-files")
      .upload(fileName, medFile);

    if (uploadError) {
      setMedLoading(false);
      setMedError("Nepodařilo se nahrát soubor. Zkuste to prosím znovu.");
      return;
    }

    const { data: urlData } = supabase.storage
      .from("medical-files")
      .getPublicUrl(fileName);

    const { error } = await supabase.from("medical_certificates").insert({
      name: medName,
      email: medEmail,
      file_url: urlData.publicUrl,
      file_name: medFile.name,
    });

    setMedLoading(false);
    if (error) {
      setMedError("Nepodařilo se odeslat potvrzení. Zkuste to prosím znovu.");
      return;
    }
    setMedSent(true);

    // Odeslat potvrzovací email (na pozadí)
    fetch("/api/send-medical-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: medName,
        email: medEmail,
        file_name: medFile.name,
      }),
    }).catch(() => {});
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-section-alt border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 font-body text-sm transition-all duration-200";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const btnClass = "w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-xl shadow-blue hover:brightness-110 hover:scale-[1.01] transition-all duration-200 disabled:opacity-50";

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-section-alt section-decoration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">Ozvěte se nám</span>
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
          className="max-w-2xl mx-auto mb-14 bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue gradient-border text-center"
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">Otevírací doba</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Navštivte nás v naší kanceláři na adrese U Stromovky 9, Havířov. Mimo uvedené hodiny je možná domluva telefonicky.
          </p>
          <div className="max-w-sm mx-auto text-left">
            <table className="w-full">
              <tbody className="divide-y divide-border/30">
                {[
                  { day: "Pondělí", hours: "10:00 \u2013 12:00 | 14:30 \u2013 16:00" },
                  { day: "Úterý", hours: "14:30 \u2013 18:45" },
                  { day: "Středa", hours: "10:00 \u2013 12:00 | 14:30 \u2013 16:00" },
                  { day: "Čtvrtek", hours: "14:30 \u2013 18:45" },
                  { day: "Pátek", hours: "dle domluvy" },
                  { day: "Sobota", hours: "zavřeno" },
                  { day: "Neděle", hours: "zavřeno" },
                ].map((row) => (
                  <tr key={row.day}>
                    <td className="py-2.5 pr-4 font-heading font-bold text-sm text-foreground">{row.day}</td>
                    <td className="py-2.5 text-sm text-muted-foreground text-right">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              className="text-center p-6 bg-card rounded-2xl border border-blue-subtle card-hover gradient-border"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-3 ring-1 ring-primary/10">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
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
        <div className="max-w-3xl mx-auto mb-16 rounded-2xl overflow-hidden border border-blue-subtle shadow-blue">
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

        {/* Forms grid – 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Přihláška */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue gradient-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center ring-1 ring-primary/10">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">Online přihláška</h3>
            </div>

            <a
              href="/documents/zadost-o-prijeti.pdf"
              download
              className="flex items-center gap-2 mb-6 px-4 py-3 rounded-xl bg-primary/5 border border-primary/15 text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Stáhnout žádost o přijetí (PDF)
            </a>

            {appSent ? (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                <p className="text-primary font-medium text-sm">✓ Přihláška byla úspěšně odeslána. Brzy se vám ozveme.</p>
              </div>
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
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={appConsent}
                    onChange={e => setAppConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-border/50 text-primary focus:ring-primary/40 accent-primary"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Souhlasím se{" "}
                    <Link to="/ochrana-soukromi" target="_blank" className="text-primary hover:underline">
                      zpracováním osobních údajů
                    </Link>.
                  </span>
                </label>
                {appError && <p className="text-red-500 text-sm">{appError}</p>}
                <button type="submit" disabled={appLoading || !appConsent} className={btnClass}>
                  {appLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Odeslat přihlášku
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
            className="bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue gradient-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center ring-1 ring-primary/10">
                <Upload className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">Lékařské potvrzení</h3>
            </div>

            <a
              href="/documents/posudek-o-zdravotni-zpusobilosti.pdf"
              download
              className="flex items-center gap-2 mb-6 px-4 py-3 rounded-xl bg-primary/5 border border-primary/15 text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Stáhnout formulář posudku
            </a>

            {medSent ? (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                <p className="text-primary font-medium text-sm">✓ Lékařské potvrzení bylo úspěšně odesláno.</p>
              </div>
            ) : (
              <form onSubmit={handleMedSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>Jméno a příjmení</label>
                  <input className={inputClass} required maxLength={100} value={medName} onChange={e => setMedName(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" className={inputClass} required maxLength={255} value={medEmail} onChange={e => setMedEmail(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Soubor</label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className={inputClass}
                    onChange={e => setMedFile(e.target.files?.[0] || null)}
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    PDF, JPG nebo PNG (max 10 MB)
                  </p>
                </div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={medConsent}
                    onChange={e => setMedConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-border/50 text-primary focus:ring-primary/40 accent-primary"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Souhlasím se{" "}
                    <Link to="/ochrana-soukromi" target="_blank" className="text-primary hover:underline">
                      zpracováním osobních údajů
                    </Link>.
                  </span>
                </label>
                {medError && <p className="text-red-500 text-sm">{medError}</p>}
                <button type="submit" disabled={medLoading || !medConsent} className={btnClass}>
                  {medLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  Odeslat potvrzení
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
