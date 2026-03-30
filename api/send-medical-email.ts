import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, file_name } = req.body;

    const adminEmail = process.env.CONTACT_EMAIL || 'autoskolakubon@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'lekarske@tvojedomena.cz';

    // Odeslání notifikace o nahrání potvrzení
    const data = await resend.emails.send({
      from: `Autoškola Kubáň <${senderEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `Lékařské potvrzení - ${name}`,
      html: `
        <h1>Nové lékařské potvrzení</h1>
        <p>Bylo nahráno lékařské potvrzení. Jméno a email jsou níže:</p>
        <ul>
          <li><strong>Jméno a příjmení:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Název souboru:</strong> ${file_name}</li>
        </ul>
        <p>Soubor samotný naleznete v aplikaci Supabase přes administrátorské rozhraní.</p>
      `,
    });

    // Potvrzení žákovi
    await resend.emails.send({
      from: `Autoškola Kubáň <${senderEmail}>`,
      to: email,
      subject: `Odeslání posudku o zdravotní způsobilosti - Autoškola Kubáň`,
      html: `
        <h1>Dobrý den, ${name},</h1>
        <p>potvrzujeme, že Váš posudek o zdravotní způsobilosti (${file_name}) byl bezpečně odeslán a zaevidován.</p>
        <p>Děkujeme.</p>
        <br />
        <p>S pozdravem,</p>
        <p>Tým Autoškola Kubáň</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Chyba při odesílání lékařského emailu:', error);
    return res.status(500).json({ error: error.message });
  }
}
