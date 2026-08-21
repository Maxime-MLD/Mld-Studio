const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestsByIp = new Map();

const services = new Set([
  "monopage",
  "multipage",
  "signature",
  "google",
  "maintenance",
]);

function getClientIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return request.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );
  recent.push(now);
  requestsByIp.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Méthode non autorisée." });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return response.status(429).json({
      error: "Trop de tentatives. Merci de réessayer dans quelques minutes.",
    });
  }

  const body = request.body || {};
  if (clean(body.company, 100)) return response.status(200).json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 160).toLowerCase();
  const service = clean(body.service, 40);
  const message = clean(body.message, 3000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !services.has(service) || message.length < 10) {
    return response.status(400).json({
      error: "Merci de vérifier les champs obligatoires du formulaire.",
    });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is missing.");
    return response.status(503).json({
      error: "Le formulaire est temporairement indisponible. Écrivez-nous à contact@mld-dev.com.",
    });
  }

  try {
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "Site MLD Studio",
        subject: `Nouvelle demande MLD Studio — ${service}`,
        name,
        email,
        service,
        message,
        replyto: email,
      }),
    });
    const result = await web3Response.json().catch(() => ({}));

    if (!web3Response.ok || !result.success) {
      console.error("Web3Forms rejected the request.", web3Response.status);
      return response.status(502).json({
        error: "Le message n'a pas pu être envoyé. Réessayez ou écrivez-nous directement.",
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error.", error instanceof Error ? error.message : error);
    return response.status(502).json({
      error: "Le message n'a pas pu être envoyé. Réessayez ou écrivez-nous directement.",
    });
  }
}
