// Fichier non utilisé. Les avis clients sont gérés localement dans src/data/avis-clients.js
export default function handler(req, res) {
  return res.status(404).json({ ok: false, error: "Not found" });
}

