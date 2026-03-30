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
      from: `Autoškola Kuboň <${senderEmail}>`,
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

    const htmlString = `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Přijali jsme Vaši přihlášku</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:'Inter','Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(135deg,#0b1120 0%,#131b2e 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-family:'Montserrat','Helvetica Neue',Arial,sans-serif;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                Autoškola <span style="background:linear-gradient(135deg,#2563eb,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Kuboň</span>
              </h1>
            </td>
          </tr>
          <tr><td style="height:3px;background:linear-gradient(90deg,#2563eb,#60a5fa);"></td></tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;font-family:'Montserrat','Helvetica Neue',Arial,sans-serif;font-size:20px;font-weight:700;color:#0f172a;">
                Přijali jsme Vaši přihlášku
              </h2>
              <p style="margin:0 0 24px;font-size:14px;color:#64748b;line-height:1.6;">
                Děkujeme za Váš zájem o výuku v naší autoškole. Vaši přihlášku jsme úspěšně přijali a budeme Vás kontaktovat s dalšími informacemi.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Shrnutí přihlášky</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;">
                      <tr><td style="padding:6px 0;font-size:13px;color:#94a3b8;width:90px;">Jméno:</td><td style="padding:6px 0;font-size:13px;color:#0f172a;font-weight:500;">${name}</td></tr>
                      <tr><td style="padding:6px 0;font-size:13px;color:#94a3b8;width:90px;">Email:</td><td style="padding:6px 0;font-size:13px;color:#0f172a;font-weight:500;">${email}</td></tr>
                      <tr><td style="padding:6px 0;font-size:13px;color:#94a3b8;width:90px;">Telefon:</td><td style="padding:6px 0;font-size:13px;color:#0f172a;font-weight:500;">${phone}</td></tr>
                      <tr><td style="padding:6px 0;font-size:13px;color:#94a3b8;width:90px;">Kurz:</td><td style="padding:6px 0;font-size:13px;color:#0f172a;font-weight:500;">${course}</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eff6ff;border-radius:12px;border:1px solid #bfdbfe;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#1e40af;">Nezapomeňte na lékařské potvrzení</p>
                    <p style="margin:0 0 16px;font-size:13px;color:#3b82f6;line-height:1.5;">
                      Pokud jste ještě neodevzdali lékařské potvrzení o zdravotní způsobilosti, můžete ho nahrát online přes formulář na našem webu.
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color:#2563eb;border-radius:10px;">
                          <a href="https://autoskolakubon.cz/#kontakt" style="display:inline-block;padding:12px 28px;font-family:'Montserrat','Helvetica Neue',Arial,sans-serif;font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.2px;">
                            Nahrát lékařské potvrzení →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:13px;color:#94a3b8;line-height:1.6;">
                V případě jakýchkoli dotazů nás neváhejte kontaktovat na
                <a href="mailto:autoskolakubon@gmail.com" style="color:#2563eb;text-decoration:none;font-weight:500;">autoskolakubon@gmail.com</a>
                nebo na čísle <a href="tel:+420774277865" style="color:#2563eb;text-decoration:none;font-weight:500;">774 277 865</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8fafc;padding:24px 40px;border-top:1px solid #e2e8f0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center;">
                    <p style="margin:0 0 4px;font-family:'Montserrat','Helvetica Neue',Arial,sans-serif;font-size:13px;font-weight:700;color:#0f172a;">Autoškola Kuboň</p>
                    <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6;">U Stromovky 9, Havířov · IČO: 24524948</p>
                    <p style="margin:8px 0 0;font-size:11px;color:#cbd5e1;">© 2026 Autoškola Kuboň. Všechna práva vyhrazena.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // 2. Volitelně: Odeslat potvrzení přímo zájemci
    // Lze zapnout, jakmile si odladíte šablonu
    await resend.emails.send({
      from: `Autoškola Kuboň <${senderEmail}>`,
      to: email,
      subject: `Potvrzení o přijetí přihlášky - Autoškola Kuboň`,
      html: htmlString,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Chyba při odesílání emailu:', error);
    return res.status(500).json({ error: error.message });
  }
}
