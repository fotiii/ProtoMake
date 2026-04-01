const allowedContactMethods = new Set(['phone', 'telegram', 'whatsapp']);
const allowedUrgency = new Set(['standard', 'fast', 'planning']);
const allowedSampleModes = new Set(['yes', 'no', 'model']);

function sanitizeText(value, maxLength = 1000) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function parseBody(req) {
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  return req.body ?? null;
}

function buildRequestId() {
  return `PM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function validatePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return { ok: false, message: 'Тело запроса не распознано.' };
  }

  const normalized = {
    name: sanitizeText(payload.name, 120),
    phone: sanitizeText(payload.phone, 80),
    contactMethod: sanitizeText(payload.contactMethod, 40),
    carBrand: sanitizeText(payload.carBrand, 120),
    productName: sanitizeText(payload.productName, 160),
    quantity: sanitizeText(payload.quantity, 40),
    urgency: sanitizeText(payload.urgency, 40),
    hasSample: sanitizeText(payload.hasSample, 40),
    notes: sanitizeText(payload.notes, 1500),
    sourcePage: sanitizeText(payload.sourcePage, 200),
  };

  if (!normalized.name || !normalized.phone || !normalized.productName) {
    return { ok: false, message: 'Заполните имя, телефон и описание детали.' };
  }

  if (!allowedContactMethods.has(normalized.contactMethod)) {
    normalized.contactMethod = 'phone';
  }

  if (!allowedUrgency.has(normalized.urgency)) {
    normalized.urgency = 'standard';
  }

  if (!allowedSampleModes.has(normalized.hasSample)) {
    normalized.hasSample = 'yes';
  }

  return { ok: true, payload: normalized };
}

function buildTelegramMessage(requestId, payload) {
  return [
    'Новая заявка с сайта PROTOMAKE',
    `Номер: ${requestId}`,
    '',
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Предпочтительный контакт: ${payload.contactMethod}`,
    `Марка / модель: ${payload.carBrand || 'не указано'}`,
    `Деталь: ${payload.productName}`,
    `Количество: ${payload.quantity || 'не указано'}`,
    `Срочность: ${payload.urgency}`,
    `Есть образец: ${payload.hasSample}`,
    `Источник: ${payload.sourcePage || 'site'}`,
    '',
    `Комментарий: ${payload.notes || 'нет комментария'}`,
  ].join('\n');
}

function buildEmailHtml(requestId, payload) {
  const rows = [
    ['Номер заявки', requestId],
    ['Имя', payload.name],
    ['Телефон', payload.phone],
    ['Предпочтительный контакт', payload.contactMethod],
    ['Марка / модель', payload.carBrand || 'не указано'],
    ['Деталь', payload.productName],
    ['Количество', payload.quantity || 'не указано'],
    ['Срочность', payload.urgency],
    ['Есть образец', payload.hasSample],
    ['Источник', payload.sourcePage || 'site'],
    ['Комментарий', payload.notes || 'нет комментария'],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;border-bottom:1px solid #eee;font-weight:600;">${label}</td><td style="padding:10px 14px;border-bottom:1px solid #eee;">${value}</td></tr>`,
    )
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;background:#f6f2ea;padding:24px;color:#111;">
      <div style="max-width:720px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;">
        <div style="background:#111;padding:24px 28px;color:#fff;">
          <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#f8cd02;">PROTOMAKE</div>
          <h1 style="margin:12px 0 0;font-size:28px;line-height:1.1;">Новая заявка на расчет</h1>
        </div>
        <div style="padding:24px 28px;">
          <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
        </div>
      </div>
    </div>
  `;
}

async function sendToTelegram(requestId, payload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return { skipped: true, reason: 'Telegram env vars are not configured.' };
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: buildTelegramMessage(requestId, payload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram error: ${errorText}`);
  }

  return { skipped: false };
}

async function sendEmail(requestId, payload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    return { skipped: true, reason: 'Resend env vars are not configured.' };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Новая заявка PROTOMAKE ${requestId}`,
      html: buildEmailHtml(requestId, payload),
      text: buildTelegramMessage(requestId, payload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${errorText}`);
  }

  return { skipped: false };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, message: 'Method not allowed.' });
  }

  try {
    const parsedBody = parseBody(req);
    const validation = validatePayload(parsedBody);

    if (!validation.ok) {
      return res.status(400).json({ ok: false, message: validation.message });
    }

    const requestId = buildRequestId();
    const payload = validation.payload;

    const [telegramResult, emailResult] = await Promise.allSettled([
      sendToTelegram(requestId, payload),
      sendEmail(requestId, payload),
    ]);

    const deliveredTo = [];
    const errors = [];

    if (telegramResult.status === 'fulfilled' && !telegramResult.value.skipped) {
      deliveredTo.push('telegram');
    } else if (telegramResult.status === 'rejected') {
      errors.push(telegramResult.reason?.message ?? 'Telegram delivery failed.');
    }

    if (emailResult.status === 'fulfilled' && !emailResult.value.skipped) {
      deliveredTo.push('email');
    } else if (emailResult.status === 'rejected') {
      errors.push(emailResult.reason?.message ?? 'Email delivery failed.');
    }

    if (deliveredTo.length === 0) {
      return res.status(500).json({
        ok: false,
        message: 'Не удалось доставить заявку ни в Telegram, ни на почту. Проверьте переменные окружения Vercel.',
        errors,
      });
    }

    return res.status(200).json({
      ok: true,
      requestId,
      deliveredTo,
      partialFailure: errors.length > 0,
      errors,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : 'Unexpected server error.',
    });
  }
}
