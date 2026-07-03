"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 px-4 py-3 sm:py-3.5 transition-all duration-300 hover:bg-[#1ebe5d] hover:scale-105 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle className="size-6" />
      <span className="hidden sm:inline text-sm font-semibold">Fale conosco</span>
    </a>
  );
}
