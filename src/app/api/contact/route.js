import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email vers toi
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_EMAIL,
      subject: `Message du portfolio de ${name}`,
      text: message,
    });

    // Email de confirmation
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: `Merci pour votre message, ${name}`,
      text: `Bonjour ${name},\n\nMerci pour votre message ! Je vous répondrai dès que possible.\n\n— GBOKO Amara`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur mail:", error);
    return new Response(JSON.stringify({ error: "Erreur lors de l’envoi" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
