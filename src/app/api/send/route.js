import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jananisankar21419@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        Name: body.Name || "empty",
        Email: body.Email || "empty",
        Message: body.Message || "empty",
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
