"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryShots, type CafePhoto } from "@/lib/cafe-photos";

export function GaleriaSection() {
  const [active, setActive] = useState<CafePhoto | null>(null);

  // First shot is the feature tile (spans 2 cols x 2 rows); the rest are standard tiles.
  const [feature, ...rest] = galleryShots;

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
            Fotos reais do nosso salão, dos nossos produtos e do dia a dia no
            Bio Café & Co. Clique para ampliar.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 auto-rows-[170px] sm:auto-rows-[230px] gap-3 sm:gap-4">
          {/* Feature tile */}
          <button
            onClick={() => setActive(feature)}
            className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-colors col-span-2 row-span-2"
            aria-label={`Ampliar imagem: ${feature.caption}`}
          >
            <Image
              src={feature.src}
              alt={feature.alt}
              fill
              sizes="(max-width: 640px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-3 left-3 right-3 text-left text-sm font-medium text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              {feature.caption}
            </span>
          </button>

          {/* Standard tiles */}
          {rest.map((shot) => (
            <button
              key={shot.src}
              onClick={() => setActive(shot)}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-colors"
              aria-label={`Ampliar imagem: ${shot.caption}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
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
