import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-massage.jpg";
import athletesImg from "@/assets/athletes.jpg";
import recoveryImg from "@/assets/recovery.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/34667026112?text=Hola%20Cris%2C%20quiero%20reservar%20una%20sesi%C3%B3n%20en%20ORUM";

const services = [
  { name: "Descarga Profunda", desc: "Tren superior o tren inferior", price: "50€" },
  { name: "Orum Express Detox", desc: "20' masaje + 20' cryo-compresión", price: "40€" },
  { name: "Pack Pre/Post Competición", desc: "Antes y después de una prueba", price: "70€" },
  { name: "Orum Premium", desc: "Diatermia + presoterapia / cryo", price: "75€" },
];

const sectors = ["Opositores", "Fuerzas y Cuerpos de Seguridad", "Gym", "Running", "Hyrox", "CrossFit", "Atletas"];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.671 5.522l-.999 3.648 3.817-.869zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full border border-gold flex items-center justify-center">
        <span className="font-display text-xl text-gold leading-none">Ø</span>
        <span className="absolute -inset-1 rounded-full border border-gold/30" />
      </div>
      <div className="leading-tight">
        <div className="font-display text-xl tracking-[0.4em] text-gold">ORUM</div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">by Cris Carmona</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-deep text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#servicios" className="hover:text-gold transition">Servicios</a>
            <a href="#para-quien" className="hover:text-gold transition">Para quién</a>
            <a href="#contacto" className="hover:text-gold transition">Contacto</a>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-primary-foreground transition">
            <WhatsAppIcon className="h-4 w-4" /> Reservar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Sesión de masaje deportivo profundo" width={1920} height={1080} className="h-full w-full object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.035_220)] via-[oklch(0.15_0.035_220/0.7)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.035_220)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.4em] text-gold">Granada · Motril</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] font-medium">
              Para personas <br/>
              que <span className="gold-gradient-text italic">entrenan</span> <br/>
              <span className="text-gold">fuerte.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Prevención, recuperación y masaje deportivo por <span className="text-foreground font-medium">Cris Carmona</span>. Diseñado para atletas que exigen más a su cuerpo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold hover:scale-[1.02] transition">
                <WhatsAppIcon /> Reserva por WhatsApp
              </a>
              <a href="#servicios" className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition">
                Ver servicios →
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-5 hidden md:block">
            <div className="relative aspect-[3/4] max-w-sm ml-auto">
              <div className="absolute -inset-4 border border-gold/40 rounded-sm" />
              <div className="absolute inset-0 rounded-sm overflow-hidden shadow-deep">
                <img src={recoveryImg} alt="Cryo-compresión y recuperación" width={1080} height={1440} loading="eager" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.035_220)] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-gold/30 px-5 py-3 backdrop-blur shadow-deep">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tecnología</div>
                <div className="text-gold font-display text-lg">Diatermia · Cryo · Presoterapia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sector ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gold/20 bg-[oklch(0.15_0.035_220/0.6)] backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {sectors.map(s => <span key={s}><span className="text-gold mr-2">◆</span>{s}</span>)}
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section id="para-quien" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] order-2 md:order-1">
            <div className="absolute -inset-6 border border-gold/30" />
            <img src={athletesImg} alt="Atleta entrenando al amanecer" width={1536} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Para quién es ORUM</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Si tu cuerpo es tu <span className="italic gold-gradient-text">herramienta</span>,
              cuídalo como un profesional.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Trabajamos con quien no entiende de pausas: opositores en preparación física, fuerzas y cuerpos de seguridad, atletas de CrossFit, Hyrox, running y gimnasio. Tratamos sobrecargas reales con técnicas reales.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {sectors.map(s => (
                <li key={s} className="flex items-center gap-3 border border-gold/20 bg-card/40 px-4 py-3 text-sm">
                  <span className="text-gold">◆</span>{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="relative py-32 bg-[oklch(0.18_0.035_220)]">
        <div className="absolute inset-x-0 top-0 hairline" />
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Servicios principales</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              Tratamientos a la <span className="italic gold-gradient-text">medida</span> del esfuerzo.
            </h2>
            <p className="mt-5 text-muted-foreground">Cada sesión combina manos expertas y tecnología avanzada para devolverte al entrenamiento más fuerte que ayer.</p>
          </div>

          <div className="mt-16 border border-gold/30 bg-card/30 backdrop-blur-sm shadow-deep">
            <div className="border-b border-gold/20 px-8 py-5 flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Carta de servicios</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Granada · Motril</div>
            </div>
            <ul className="divide-y divide-gold/10">
              {services.map((s, i) => (
                <li key={s.name} className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 px-6 sm:px-10 py-7 hover:bg-[oklch(0.82_0.13_85/0.04)] transition">
                  <span className="font-display text-gold text-2xl w-8">0{i+1}</span>
                  <div>
                    <div className="font-display text-2xl md:text-3xl">{s.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-gold tabular-nums">{s.price}</div>
                </li>
              ))}
            </ul>
            <div className="border-t border-gold/20 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-muted-foreground">¿Dudas sobre qué tratamiento elegir?</span>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-gold hover:scale-[1.02] transition">
                <WhatsAppIcon className="h-4 w-4" /> Pregunta a Cris
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Dónde encontrarnos</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">Dos sedes. <span className="italic">Una misma exigencia.</span></h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[
              { city: "Granada", line: "Atención con cita previa", note: "Centro de prevención y recuperación deportiva" },
              { city: "Motril", line: "Atención con cita previa", note: "Sesiones individualizadas para deportistas" },
            ].map(loc => (
              <div key={loc.city} className="relative border border-gold/30 bg-card/40 p-10 group hover:border-gold transition">
                <div className="absolute top-0 left-0 h-px w-16 bg-gold" />
                <div className="text-xs uppercase tracking-[0.4em] text-gold">Sede</div>
                <div className="mt-3 font-display text-5xl">{loc.city}</div>
                <div className="mt-4 text-muted-foreground">{loc.note}</div>
                <div className="mt-6 text-sm uppercase tracking-[0.2em] text-foreground/80">{loc.line}</div>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gold hover:gap-3 transition-all">
                  Reservar sesión →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="relative py-28 border-t border-gold/20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Tu próxima sesión</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-tight">
            Entrena fuerte. <br/>
            <span className="italic gold-gradient-text">Recupera mejor.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Reserva directamente por WhatsApp con Cris Carmona. Respuesta rápida y agenda flexible para deportistas.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground shadow-gold hover:scale-[1.02] transition">
            <WhatsAppIcon /> WhatsApp 667 026 112
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-[oklch(0.15_0.035_220)]">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="mt-5 text-sm text-muted-foreground max-w-xs">Prevención · Recuperación · Masaje Deportivo. Para quien entrena fuerte.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Sedes</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Granada</li>
              <li>Motril</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Contacto</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-gold transition">WhatsApp · 667 026 112</a></li>
              <li className="text-muted-foreground">Cita previa</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/10 py-5 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} ORUM · By Cris Carmona
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="Reservar por WhatsApp"
         className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-gold hover:scale-110 transition">
        <WhatsAppIcon className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold animate-ping" />
      </a>
    </div>
  );
}
