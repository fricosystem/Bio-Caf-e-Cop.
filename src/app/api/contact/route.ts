import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const subject = typeof body?.subject === "string" ? body.subject.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Por favor, preencha nome, e-mail e mensagem." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Informe um e-mail válido." },
        { status: 400 }
      );
    }

    if (message.length < 5) {
      return NextResponse.json(
        { ok: false, error: "A mensagem precisa ter ao menos 5 caracteres." },
        { status: 400 }
      );
    }

    const saved = await db.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      },
    });

    return NextResponse.json({
      ok: true,
      id: saved.id,
      message: "Recebemos sua mensagem! Em breve entraremos em contato.",
    });
  } catch (error) {
    console.error("[contact] error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Não foi possível enviar sua mensagem agora. Tente pelo WhatsApp.",
      },
      { status: 500 }
    );
  }
}
