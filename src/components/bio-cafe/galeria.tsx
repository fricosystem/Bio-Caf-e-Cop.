"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Shot = {
  src: string;
  alt: string;
  caption: string;
  span?: string;
};

const shots: Shot[] = [
  {
    src: "/images/gallery-interior.png",
    alt: "Ambiente claro e arejado do café com plantas",
    caption: "Ambiente claro e cheio de plantas",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/gallery-plated.png",
    alt: "Prato saudável montado com cuidado",
    caption: "Pratos montados com cuidado",
  },
  {
    src: "/images/gallery-coffee.png",
    alt: "Estação de café especial do Bio Café",
    caption: "Café especial tirado na hora",
  },
  {
    src: "/images/gallery-ingredients.png",
    alt: "Ingredientes frescos e orgânicos sobre a bancada",
    caption: "Ingredientes frescos e orgânicos",
  },
  {
    src: "/images/menu-latte.png",
    alt: "Xícara de latte com arte",
    caption: "Latte com arte na xícara",
  },
];

export function GaleriaSection() {
  const [active, setActive] = useState<Shot | null>(null);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-background scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-secondary-foreground">
            Galeria
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight">
            Um cantinho para respirar e saborear
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Conheça o ambiente, os ingredientes e os pratos que tornam cada visita
            ao Bio Café & Co. um momento especial.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {shots.map((shot) => (
            <button
              key={shot.src}
              onClick={() => setActive(shot)}
              className={`group relative overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-colors ${shot.span ?? ""}`}
              aria-label={`Ampliar imagem: ${shot.caption}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 right-3 text-left text-sm font-medium text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                {shot.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">{active?.caption ?? "Imagem da galeria"}</DialogTitle>
          {active && (
            <div className="relative">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
                <p className="font-serif text-lg sm:text-xl">{active.caption}</p>
                <button
                  onClick={() => setActive(null)}
                  className="flex-shrink-0 flex items-center justify-center size-9 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Fechar imagem"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
