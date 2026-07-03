"use client";

import Image from "next/image";
import { Leaf, Sprout, Wheat, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { whatsappLink } from "@/lib/site";

type Dietary = "vegano" | "vegetariano" | "sem-gluten" | "sem-lactose";

const dietaryLabel: Record<Dietary, string> = {
  vegano: "Vegano",
  vegetariano: "Vegetariano",
  "sem-gluten": "Sem glúten",
  "sem-lactose": "Sem lactose",
};

type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
  dietary: Dietary[];
};

const pratos: Dish[] = [
  {
    name: "Bowl Bio da Casa",
    description:
      "Quinoa, grão-de-bico assado, batata-doce, abacate, kale e tomate-cereja com finalizado de tahine.",
    price: "R$ 34",
    image: "/images/menu-buddha-bowl.png",
    dietary: ["vegano", "sem-gluten"],
  },
  {
    name: "Quinoa Colorida",
    description:
      "Salada de quinoa tricolor com pepino, tomate, cebola roxa, salsinha e vinagrete de limão siciliano.",
    price: "R$ 29",
    image: "/images/menu-quinoa-salad.png",
    dietary: ["vegano", "sem-gluten", "sem-lactose"],
  },
];

const vegetarianos: Dish[] = [
  {
    name: "Sanduíche Natural",
    description:
      "Pão integral com abacate, brotos, tomate, alface e homus. Acompanha saladinha da estação.",
    price: "R$ 26",
    image: "/images/menu-sandwich.png",
    dietary: ["vegetariano"],
  },
  {
    name: "Bolo Vivo de Frutas Vermelhas",
    description:
      "Cheesecake vegano de castanha-cashew com frutas vermelhas frescas, sem açúcar refinado.",
    price: "R$ 18",
    image: "/images/menu-vegan-cake.png",
    dietary: ["vegano", "sem-gluten", "sem-lactose"],
  },
];

const bebidas: Dish[] = [
  {
    name: "Latte Especial",
    description:
      "Café de torra especial com leite vaporizado e arte na xícara. Opções de leites vegetais.",
    price: "R$ 13",
    image: "/images/menu-latte.png",
    dietary: ["vegetariano"],
  },
  {
    name: "Suco Detox Verde",
    description:
      "Maçã verde, aipo, gengibre, hortelã e limão. Prensado a frio para manter os nutrientes.",
    price: "R$ 15",
    image: "/images/menu-juice.png",
    dietary: ["vegano", "sem-gluten", "sem-lactose"],
  },
];

const dietaryIcon: Record<Dietary, React.ElementType> = {
  vegano: Sprout,
  vegetariano: Leaf,
  "sem-gluten": Wheat,
  "sem-lactose": Leaf,
};

function DishCard({ dish }: { dish: Dish }) {
  return (
    <Card className="group overflow-hidden border-border/70 hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center justify-center rounded-full bg-background/95 backdrop-blur px-3 py-1 text-sm font-semibold text-primary shadow-sm">
            {dish.price}
          </span>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-serif text-xl font-semibold leading-snug">{dish.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {dish.dietary.map((d) => {
            const Icon = dietaryIcon[d];
            return (
              <Badge
                key={d}
                variant="secondary"
                className="bg-secondary text-secondary-foreground gap-1 font-normal"
              >
                <Icon className="size-3" />
                {dietaryLabel[d]}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function DishGrid({ items }: { items: Dish[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((dish) => (
        <DishCard key={dish.name} dish={dish} />
      ))}
    </div>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-background scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-secondary-foreground">
            <Leaf className="size-3.5" />
            Menu Saudável
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight">
            Pratos que nutrem o corpo e o dia
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nosso cardápio muda com as estações e o que chega mais fresco das hortas.
            Confira uma seleção dos queridinhos da casa.
          </p>
        </div>

        <Tabs defaultValue="pratos" className="mt-10 sm:mt-14 w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 h-auto rounded-full bg-secondary p-1.5">
            <TabsTrigger value="pratos" className="rounded-full py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Pratos do Dia
            </TabsTrigger>
            <TabsTrigger value="vegetarianos" className="rounded-full py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Veg & Veganos
            </TabsTrigger>
            <TabsTrigger value="bebidas" className="rounded-full py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Bebidas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pratos" className="mt-8 sm:mt-10 focus-visible:outline-none">
            <DishGrid items={pratos} />
          </TabsContent>
          <TabsContent value="vegetarianos" className="mt-8 sm:mt-10 focus-visible:outline-none">
            <DishGrid items={vegetarianos} />
          </TabsContent>
          <TabsContent value="bebidas" className="mt-8 sm:mt-10 focus-visible:outline-none">
            <DishGrid items={bebidas} />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            O cardápio do dia muda diariamente. Consulte as opções de hoje direto no WhatsApp.
          </p>
          <Button asChild size="lg" className="mt-4 rounded-full">
            <a
              href={whatsappLink("Olá! Gostaria de ver o cardápio do dia do Bio Café & Co.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver cardápio do dia
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
