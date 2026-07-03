// Real photos of Bio Café & Co., sourced from Google Maps.
// All URLs use the =s1600-k-no variant for crisp rendering (Next.js Image
// optimizer downscales as needed per breakpoint).

export type CafePhoto = {
  src: string;
  alt: string;
  caption: string;
};

const G = "https://lh3.googleusercontent.com/gps-cs-s/";

export const cafePhotos = {
  // Interior — wide shot, great as a feature tile
  interiorWide:
    `${G}APNQkAED5BJXdCrxfPSqV3iRA6RcWntOLqNdX3EaKqRMnm-5vsjT8yDYm1dJC2qR2JKac7fcQxGrlrBQrMoT9dzsZC7dH_bQfvQQ1CZXULZ6SY7vFKbak39YhEI17xJ0tyzERz7qsGY20Q=s1600-k-no`,
  // Shelves stocked with coffee products & snacks
  shelvesProducts:
    `${G}APNQkAHyf29M4f5YbIn-sFO2Yg7C3Up9RuXP_qcqNsUtX9IXk-iSD6_D2xBgX_agozgF6i13LYCL8A7VUh-VoYYEzNmA9k5fHFLF6HHgRrT3zwMONRowjbaD3vQ6OK_JV6eJpZtM7Frsug=s1600-k-no`,
  // The physical menu board
  menuBoard:
    `${G}APNQkAHXQxksFJQvIjv9t3R6Y6GGfhZ8x3Fr0dGYmTzZVbLTC_bpyCnWZNGrHNCIR2HoIsBWkSGw309u7y_0wQ9L8r2TctqEyn1qXBRTYuLrBgNCBu12LHq0RuF5LNNfln-l0rtuKsOVNA=s1600-k-no`,
  // Interior — second angle
  interiorTwo:
    `${G}APNQkAHb2eGNkSd3JsOVXoA6K1evGLHoBdCrVNyFYfj7oUlJk-au0dPjIAJTUNsxleeF9_WoSZVaKTddXQix36D0OqYkYSS5gtXsQ79ZJWWE9JAj_vRJxAuKv3ZAX7_214ni8Vy3WhUA=s1600-k-no`,
  // Shelf displaying rows of products
  shelfRows:
    `${G}APNQkAGwP3_KkSVE1FNfT-5CKAGfzC0JTi0ucENjHUlcGK4-70j653MlSjNyVd1jkhNHveb65OrCLVAd6kGfJE2zMVcXlw-x4541XTh6EejAw5usRI7ssmE2yzAbgRdmcUZ_JY0GQO4=s1600-k-no`,
  // Hand holding the branded yellow "BIO CAFÉ & CO" cup
  brandedCup:
    `${G}APNQkAEts8sx6PEWfQWKu2MbXf3E5FF3cqxI3yAc_xW8y7Hb2aAVvp_71iP_Fr1xuNfd8PyY1I4DrUeyn7n2b_y5ySKWEWkR2Ljy5ypeLI2abRG_TcXFPtriHEJ5mY9n7ujSkTSHv06I=s1600-k-no`,
  // Gloved hand scooping dried fruits — fresh ingredients
  scoopingFruits:
    `${G}APNQkAEvzb8khj-OHib_9C6UQenQmVM3EsPj3T8cRdBvaBz26GnhPsp79KoEBDoNgtECMpS7lPRJaG5LVk0mS8K0nJOT70FR2MYcblxZQfMNw6GY4B1CHxpqOG2fFk8CpN_94sr-BHu9=s1600-k-no`,
} as const;

// Gallery layout — 6 real photos in a bento grid (1 feature 2x2 + 5 standard)
export const galleryShots: CafePhoto[] = [
  {
    src: cafePhotos.interiorWide,
    alt: "Interior amplo e iluminado do Bio Café & Co. em Pinheiros",
    caption: "Nosso salão claro e aconchegante",
  },
  {
    src: cafePhotos.brandedCup,
    alt: "Copo amarelo com a marca BIO CAFÉ & CO seguro à mão no balcão",
    caption: "O nosso copo assinatura",
  },
  {
    src: cafePhotos.menuBoard,
    alt: "Cardápio físico do Bio Café & Co. exposto no salão",
    caption: "Cardápio do dia",
  },
  {
    src: cafePhotos.shelvesProducts,
    alt: "Prateleira com produtos e snacks naturais à venda no café",
    caption: "Produtos selecionados",
  },
  {
    src: cafePhotos.interiorTwo,
    alt: "Outro ângulo do interior do Bio Café & Co.",
    caption: "Ambiente para sentar e ficar",
  },
  {
    src: cafePhotos.shelfRows,
    alt: "Estante com fileiras de produtos naturais do café",
    caption: "Tudo a postos para você",
  },
];
