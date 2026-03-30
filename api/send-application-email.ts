import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Omezit pouze na metodu POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, course } = req.body;

    const adminEmail = process.env.CONTACT_EMAIL || 'autoskolakubon@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'prihlasky@tvojedomena.cz';

    // 1. Odeslat notifikaci Adminovi / Autoškole
    const data = await resend.emails.send({
      from: `Autoškola Kubáň <${senderEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `Nová přihláška do kurzu: ${name}`,
      html: `
        <h1>Nová přihláška z webu</h1>
        <p>Byla odeslána nová přihláška. Detaily níže:</p>
        <ul>
          <li><strong>Jméno a příjmení:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefon:</strong> ${phone}</li>
          <li><strong>Vybraný kurz:</strong> ${course}</li>
        </ul>
      `,
    });

    // 2. Volitelně: Odeslat potvrzení přímo zájemci
    // Lze zapnout, jakmile si odladíte šablonu
    await resend.emails.send({
      from: `Autoškola Kubáň <${senderEmail}>`,
      to: email,
      subject: `Potvrzení o přijetí přihlášky - Autoškola Kubáň`,
      html: `
        <h1>Dobrý den, ${name},</h1>
        <p>děkujeme za Vaši přihlášku do kurzu ${course}.</p>
        <p>Vaši žádost jsme v pořádku přijali a v co nejkratší době Vás budeme kontaktovat na telefonním čísle ${phone} pro domluvení dalších podrobností.</p>
        <br />
        <p>S pozdravem,</p>
        <p>Tým Autoškola Kubáň</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Chyba při odesílání emailu:', error);
    return res.status(500).json({ error: error.message });
  }
}
