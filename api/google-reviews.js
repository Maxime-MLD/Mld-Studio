// Fonction Serverless Vercel : récupération sécurisée des avis Google Places API (New)
// La clé GOOGLE_PLACES_API_KEY reste strictement confidentielle côté serveur.

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 heure de cache mémoire par instance
let memoryCache = {
  data: null,
  timestamp: 0,
};

function formatVisitDate(visitDate) {
  if (!visitDate || !visitDate.year) return null;
  const { year, month } = visitDate;
  if (!month) return `${year}`;
  const monthNames = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const monthLabel = monthNames[month - 1] || "";
  return monthLabel ? `${monthLabel} ${year}` : `${year}`;
}

export default async function handler(request, response) {
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    return response.status(405).json({
      ok: false,
      error: "Méthode non autorisée.",
    });
  }

  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    console.warn(
      "[api/google-reviews] Variables d'environnement GOOGLE_PLACE_ID ou GOOGLE_PLACES_API_KEY non définies.",
    );
    return response.status(503).json({
      ok: false,
      configured: false,
      error: "Service d'avis Google temporairement non configuré.",
      fallbackUri: "https://www.google.com/maps/search/?api=1&query=MLD+Studio+Roanne",
    });
  }

  // Vérification du cache mémoire
  const now = Date.now();
  if (memoryCache.data && now - memoryCache.timestamp < CACHE_TTL_MS) {
    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
    return response.status(200).json(memoryCache.data);
  }

  try {
    const fieldMask = [
      "id",
      "displayName",
      "rating",
      "userRatingCount",
      "reviews",
      "googleMapsUri",
    ].join(",");

    const googleUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(
      placeId,
    )}?languageCode=fr`;

    const googleResponse = await fetch(googleUrl, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": fieldMask,
      },
    });

    if (!googleResponse.ok) {
      const errorBody = await googleResponse.text().catch(() => "");
      console.error(
        `[api/google-reviews] Erreur Google Places API (${googleResponse.status}):`,
        errorBody,
      );
      return response.status(googleResponse.status >= 500 ? 502 : 400).json({
        ok: false,
        error: "Impossible de récupérer les avis Google pour le moment.",
        fallbackUri: `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(
          placeId,
        )}`,
      });
    }

    const data = await googleResponse.json();

    const normalizedReviews = Array.isArray(data.reviews)
      ? data.reviews.map((rev, index) => ({
          id: rev.name || `google-review-${index}`,
          authorName: rev.authorAttribution?.displayName || "Client Google",
          authorPhoto: rev.authorAttribution?.photoUri || null,
          authorUri: rev.authorAttribution?.uri || null,
          rating: typeof rev.rating === "number" ? rev.rating : 5,
          text: rev.text?.text || rev.originalText?.text || "",
          publishDate: rev.relativePublishTimeDescription || "",
          publishTime: rev.publishTime || null,
          visitDate: formatVisitDate(rev.visitDate),
          googleMapsUri:
            rev.googleMapsUri ||
            data.googleMapsUri ||
            `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(
              placeId,
            )}`,
        }))
      : [];

    const payload = {
      ok: true,
      configured: true,
      displayName: data.displayName?.text || "MLD Studio",
      rating: typeof data.rating === "number" ? data.rating : 5.0,
      userRatingCount:
        typeof data.userRatingCount === "number"
          ? data.userRatingCount
          : normalizedReviews.length,
      googleMapsUri:
        data.googleMapsUri ||
        `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(
          placeId,
        )}`,
      reviews: normalizedReviews,
    };

    memoryCache = {
      data: payload,
      timestamp: now,
    };

    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
    return response.status(200).json(payload);
  } catch (error) {
    console.error(
      "[api/google-reviews] Exception:",
      error instanceof Error ? error.message : error,
    );
    return response.status(502).json({
      ok: false,
      error: "Erreur lors de la récupération des avis.",
      fallbackUri: `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(
        placeId,
      )}`,
    });
  }
}
