"use client";

import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/lib/site";

function isToday(dayName: string) {
  // Map Portuguese day names to JS getDay() (0 = Sunday)
  const map: Record<string, number> = {
    Domingo: 0,
    Segunda: 1,
    Terça: 2,
    Quarta: 3,
    Quinta: 4,
    Sexta: 5,
    Sábado: 6,
  };
  const today = new Date().getDay();
  return map[dayName] === today;
}

export function LocalizacaoSection() {
  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-secondary/60 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary border border-border">
            <MapPin className="size-3.5" />
            Localização & Horário
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight">
            Venha nos visitar em Pinheiros
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Estamos na Teodoro Sampaio, pertinho do metro Vila Madalena.
            Um almoço tranquilo te espera.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-border shadow-sm min-h-[320px] lg:min-h-[460px]">
            <iframe
              title={`Mapa: ${site.name}`}
              src={site.maps.embed}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="rounded-2xl bg-background border border-border p-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold">Endereço</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.district}, {site.address.city}
                    <br />
                    CEP {site.address.zip}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-4 rounded-full">
                    <a
                      href={site.maps.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="size-4" />
                      Como chegar
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-background border border-border p-6 flex-1">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-semibold">Horário de funcionamento</h3>
                  <ul className="mt-3 space-y-1.5">
                    {site.hours.map((h) => {
                      const today = isToday(h.day);
                      return (
                        <li
                          key={h.day}
                          className={`flex items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 text-sm ${
                            today
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {h.day}
                            {today && (
                              <span className="text-[10px] uppercase tracking-wide bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                                Hoje
                              </span>
                            )}
                          </span>
                          <span className={h.closed ? "text-destructive" : ""}>
                            {h.time}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick contact */}
            <div className="rounded-2xl bg-primary text-primary-foreground p-6 flex items-center gap-4">
              <span className="flex-shrink-0 flex items-center justify-center size-10 rounded-xl bg-white/15">
                <Phone className="size-5" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wider text-primary-foreground/80">
                  Reservas e pedidos
                </p>
                <p className="font-serif text-lg font-semibold break-words">{site.phone}</p>
              </div>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="rounded-full bg-white text-primary hover:bg-white/90"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
