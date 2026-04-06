export default async function handler(req, res) {
  // Permitir CORS desde cualquier origen
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const url = req.query.category
    ? `https://tienda.mercadona.es/api/categories/${req.query.category}/`
    : "https://tienda.mercadona.es/api/categories/";

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: "Error al contactar Mercadona" });
  }

  const data = await response.json();
  res.status(200).json(data);
}