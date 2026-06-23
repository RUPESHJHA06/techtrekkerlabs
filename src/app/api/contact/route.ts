import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: 'TechTrekker Labs <onboarding@resend.dev>',
      to: 'contact@techtrekkerlabs.com',
      replyTo: email,
      subject: subject?.trim() || `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e293b">
          <h2 style="color:#3b82f6;margin-bottom:20px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:600;width:100px">Name</td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Subject</td><td style="padding:8px 0">${subject?.trim() || '(not provided)'}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #3b82f6">
            <p style="margin:0;font-weight:600;margin-bottom:8px">Message</p>
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:20px;color:#64748b;font-size:12px">Sent via techtrekkerlabs.com contact form</p>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact-form]', err);
    return NextResponse.json({ error: 'Failed to send. Please try WhatsApp or email directly.' }, { status: 500 });
  }
}
