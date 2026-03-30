import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { LogOut, Trash2, ExternalLink, RefreshCw, ArrowLeft, ShieldAlert } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "admin@kubon.cz";
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minut

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string | null;
  status: string;
  created_at: string;
}

interface MedicalCertificate {
  id: string;
  name: string;
  file_url: string | null;
  file_name: string | null;
  status: string;
  created_at: string;
}

const courseLabels: Record<string, string> = {
  B: "Skupina B",
  "B-L17": "Skupina B L17",
  "B-student": "Studentská sleva",
  "B-rychlo": "Rychlokurz",
  "B-en": "Výuka v angličtině",
};

const statusOptions = ["nová", "kontaktován", "přijat", "zamítnuta"];
const medStatusOptions = ["nové", "ověřeno", "zamítnuto"];

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(true);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState<number | null>(null);

  const [apps, setApps] = useState<Application[]>([]);
  const [certs, setCerts] = useState<MedicalCertificate[]>([]);
  const [tab, setTab] = useState<"apps" | "certs">("apps");

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      // Ověření, že přihlášený uživatel je admin
      if (currentUser && currentUser.email !== ADMIN_EMAIL) {
        supabase.auth.signOut();
        setUser(null);
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      if (currentUser && currentUser.email !== ADMIN_EMAIL) {
        supabase.auth.signOut();
        setUser(null);
      } else {
        setUser(currentUser);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  // Auto-logout po 30 min nečinnosti
  useEffect(() => {
    if (!user) return;
    let timeout: ReturnType<typeof setTimeout>;
    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        supabase.auth.signOut();
        setUser(null);
      }, 30 * 60 * 1000);
    };
    const events = ["mousedown", "keydown", "scroll", "touchstart"];
    events.forEach(e => window.addEventListener(e, resetTimer));
    resetTimer();
    return () => {
      clearTimeout(timeout);
      events.forEach(e => window.removeEventListener(e, resetTimer));
    };
  }, [user]);

  const fetchData = async () => {
    const [appsRes, certsRes] = await Promise.all([
      supabase.from("applications").select("*").order("created_at", { ascending: false }),
      supabase.from("medical_certificates").select("*").order("created_at", { ascending: false }),
    ]);
    if (appsRes.data) setApps(appsRes.data);
    if (certsRes.data) setCerts(certsRes.data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    // Rate limiting
    if (lockedUntil && Date.now() < lockedUntil) {
      const remaining = Math.ceil((lockedUntil - Date.now()) / 1000);
      setLoginError(`Příliš mnoho pokusů. Zkuste to za ${remaining} sekund.`);
      return;
    }

    // Ověření emailu před odesláním
    if (email !== ADMIN_EMAIL) {
      setLoginAttempts(prev => {
        const next = prev + 1;
        if (next >= MAX_LOGIN_ATTEMPTS) {
          setLockedUntil(Date.now() + LOCKOUT_DURATION);
        }
        return next;
      });
      setLoginError("Nesprávný email nebo heslo.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoginAttempts(prev => {
        const next = prev + 1;
        if (next >= MAX_LOGIN_ATTEMPTS) {
          setLockedUntil(Date.now() + LOCKOUT_DURATION);
        }
        return next;
      });
      setLoginError("Nesprávný email nebo heslo.");
      return;
    }
    setLoginAttempts(0);
    setLockedUntil(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  const updateAppStatus = async (id: string, status: string) => {
    await supabase.from("applications").update({ status }).eq("id", id);
    setApps(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  const deleteApp = async (id: string) => {
    if (!confirm("Opravdu smazat tuto přihlášku?")) return;
    await supabase.from("applications").delete().eq("id", id);
    setApps(prev => prev.filter(a => a.id !== id));
  };

  const updateCertStatus = async (id: string, status: string) => {
    await supabase.from("medical_certificates").update({ status }).eq("id", id);
    setCerts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  };

  const deleteCert = async (id: string) => {
    if (!confirm("Opravdu smazat toto potvrzení?")) return;
    await supabase.from("medical_certificates").delete().eq("id", id);
    setCerts(prev => prev.filter(c => c.id !== id));
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("cs-CZ", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  // Login screen
  if (!user) {
    const isLocked = lockedUntil && Date.now() < lockedUntil;

    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm">
          <div className="bg-card rounded-2xl p-8 border border-blue-subtle shadow-blue">
            <h1 className="font-heading font-bold text-2xl text-foreground mb-1 text-center">Administrace</h1>
            <p className="text-muted-foreground text-sm text-center mb-6">Autoškola Kuboň</p>

            {isLocked ? (
              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/15 text-center">
                <ShieldAlert className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-red-500 font-medium text-sm">Účet dočasně zablokován</p>
                <p className="text-muted-foreground text-xs mt-1">Příliš mnoho neúspěšných pokusů. Zkuste to za 5 minut.</p>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-section-alt border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Heslo</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-section-alt border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                    autoComplete="off"
                  />
                </div>
                {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-xl shadow-blue hover:brightness-110 transition-all"
                >
                  Přihlásit se
                </button>
              </form>
            )}

            <Link to="/" className="flex items-center justify-center gap-1 mt-4 text-muted-foreground hover:text-primary text-sm transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Zpět na web
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-heading font-bold text-lg text-foreground">
              Autoškola <span className="text-gradient">Kuboň</span> <span className="text-muted-foreground font-normal text-sm">Admin</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchData} className="p-2 rounded-lg hover:bg-section-alt transition-colors text-muted-foreground hover:text-foreground" title="Obnovit">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-section-alt hover:bg-red-500/10 text-muted-foreground hover:text-red-500 text-sm transition-all">
              <LogOut className="w-4 h-4" /> Odhlásit
            </button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("apps")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              tab === "apps" ? "bg-primary text-primary-foreground shadow-blue" : "bg-section-alt text-muted-foreground hover:text-foreground"
            }`}
          >
            Přihlášky ({apps.length})
          </button>
          <button
            onClick={() => setTab("certs")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              tab === "certs" ? "bg-primary text-primary-foreground shadow-blue" : "bg-section-alt text-muted-foreground hover:text-foreground"
            }`}
          >
            Lékařská potvrzení ({certs.length})
          </button>
        </div>

        {/* Applications */}
        {tab === "apps" && (
          <div className="space-y-4">
            {apps.length === 0 && (
              <p className="text-muted-foreground text-sm py-8 text-center">Zatím žádné přihlášky.</p>
            )}
            {apps.map(app => (
              <div key={app.id} className="bg-card rounded-2xl p-6 border border-blue-subtle shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{app.name}</h3>
                    <p className="text-muted-foreground text-sm">{formatDate(app.created_at)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={app.status}
                      onChange={e => updateAppStatus(app.id, e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-section-alt border border-border/50 text-sm text-foreground"
                    >
                      {statusOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <button onClick={() => deleteApp(app.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Email: </span>
                    <a href={`mailto:${app.email}`} className="text-primary hover:underline">{app.email}</a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Telefon: </span>
                    <a href={`tel:${app.phone}`} className="text-primary hover:underline">{app.phone}</a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Kurz: </span>
                    <span className="text-foreground">{courseLabels[app.course] || app.course}</span>
                  </div>
                </div>
                {app.message && (
                  <div className="mt-3 p-3 rounded-xl bg-section-alt text-sm text-foreground">
                    {app.message}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Medical certificates */}
        {tab === "certs" && (
          <div className="space-y-4">
            {certs.length === 0 && (
              <p className="text-muted-foreground text-sm py-8 text-center">Zatím žádná lékařská potvrzení.</p>
            )}
            {certs.map(cert => (
              <div key={cert.id} className="bg-card rounded-2xl p-6 border border-blue-subtle shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{cert.name}</h3>
                    <p className="text-muted-foreground text-sm">{formatDate(cert.created_at)}</p>
                    {cert.file_url && (
                      <a
                        href={cert.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-primary hover:underline text-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {cert.file_name || "Zobrazit soubor"}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={cert.status}
                      onChange={e => updateCertStatus(cert.id, e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-section-alt border border-border/50 text-sm text-foreground"
                    >
                      {medStatusOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <button onClick={() => deleteCert(cert.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
