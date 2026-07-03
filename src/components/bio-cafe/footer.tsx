import Link from "next/link";
import { Leaf, MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "#menu", label: "Menu Saudável" },
  { href: "#filosofia", label: "Filosofia Bio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-9 rounded-full bg-primary text-primary-foreground">
                <Leaf className="size-5" />
              </span>
              <div className="leading-none">
                <p className="font-serif text-lg font-semibold">{site.name}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-background/60">
                  {site.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Almoço natural, cafés especiais e comida de verdade no coração de
              Pinheiros. Feito com ingredientes frescos e orgânicos.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-serif text-base font-semibold">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.district}, {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 flex-shrink-0 text-primary" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="size-4" />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-base font-semibold flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              Horários
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              {site.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between gap-3 text-background/70"
                >
                  <span>{h.day}</span>
                  <span className={h.closed ? "text-destructive/80" : "text-background/90"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/55">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Feito com
            <Leaf className="size-3 text-primary" />
            em Pinheiros, São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
}
