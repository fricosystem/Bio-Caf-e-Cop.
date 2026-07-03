"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { site, whatsappLink } from "@/lib/site";

export function ContatoSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error ?? "Erro ao enviar mensagem");
      }

      toast({
        title: "Mensagem enviada!",
        description:
          data.message ?? "Recebemos sua mensagem. Em breve entraremos em contato.",
      });
      setDone(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Não foi possível enviar agora.";
      toast({
        variant: "destructive",
        title: "Não foi possível enviar",
        description: message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-background scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-secondary-foreground">
            <MessageCircle className="size-3.5" />
            Contato
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight">
            Vamos conversar?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tire dúvidas, faça seu pedido ou deixe um recado. Respondemos rápido —
            pelo WhatsApp é ainda mais direto.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* WhatsApp card */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-primary text-primary-foreground p-6 sm:p-8 flex flex-col">
              <span className="flex items-center justify-center size-12 rounded-2xl bg-white/15">
                <MessageCircle className="size-6" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold">Fale pelo WhatsApp</h3>
              <p className="mt-2 text-primary-foreground/85 leading-relaxed">
                A forma mais rápida de falar com a gente. Faça seu pedido, consulte o
                cardápio do dia ou reserve sua mesa.
              </p>

              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-white text-primary hover:bg-white/90"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Iniciar conversa
                </a>
              </Button>

              <div className="mt-8 pt-6 border-t border-white/20 space-y-3 text-sm">
                <p className="flex items-center gap-3">
                  <Phone className="size-4 flex-shrink-0" />
                  {site.phone}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="size-4 flex-shrink-0" />
                  {site.address.street}, {site.address.district}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="size-4 flex-shrink-0" />
                  oi@biocafeco.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-card border border-border p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Seu nome"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="voce@email.com"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(11) 90000-0000"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    placeholder="Ex: Reserva, pedido, evento"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Conte para a gente como podemos ajudar..."
                  rows={5}
                  className="rounded-lg resize-none"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="rounded-full"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando...
                    </>
                  ) : done ? (
                    <>
                      <CheckCircle2 className="size-4" />
                      Enviado! Enviar outra
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Ao enviar, você concorda em ser contatado pelo Bio Café & Co.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
