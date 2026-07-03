export const site = {
  name: "Bio Café & Co.",
  tagline: "Almoço Natural",
  area: "Pinheiros, São Paulo",
  phone: "+55 11 93327-9978",
  phoneDigits: "5511933279978",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de saber mais sobre o menu do Bio Café & Co.",
  address: {
    street: "R. Teodoro Sampaio, 2550/2534 - Loja 36",
    district: "Pinheiros",
    city: "São Paulo - SP",
    zip: "05406-200",
    full: "R. Teodoro Sampaio, 2550/2534 - Loja 36 - Pinheiros, São Paulo - SP, 05406-200",
  },
  maps: {
    // Embeddable Google Maps src (no API key needed)
    embed:
      "https://www.google.com/maps?q=Bio+Caf%C3%A9+%26+Co.+-+Almo%C3%A7o+Natural,+R.+Teodoro+Sampaio,+2550+-+Pinheiros,+S%C3%A3o+Paulo+-+SP,+05406-200&output=embed",
    link: "https://www.google.com/maps/place/Bio+Caf%C3%A9+%26+Co.+-+Almo%C3%A7o+Natural/@-23.5662834,-46.6924231,15z",
  },
  hours: [
    { day: "Segunda", time: "Fechado", closed: true },
    { day: "Terça", time: "08:00 — 19:00" },
    { day: "Quarta", time: "08:00 — 19:00" },
    { day: "Quinta", time: "08:00 — 19:00" },
    { day: "Sexta", time: "08:00 — 19:00" },
    { day: "Sábado", time: "09:00 — 17:00" },
    { day: "Domingo", time: "09:00 — 15:00" },
  ],
} as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.phoneDigits}?text=${text}`;
}
