export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { phone, audio } = req.body;
  // Здесь сохраняешь в БД или файл
  res.json({ ok: true });
}
