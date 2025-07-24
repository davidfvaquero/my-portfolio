import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Configura tu cuenta de Gmail y contraseña de aplicación aquí
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // tu email de Gmail
      pass: process.env.GMAIL_PASS, // tu contraseña de aplicación
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, // tu email de Gmail
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong><br/>${message}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
  }
} 