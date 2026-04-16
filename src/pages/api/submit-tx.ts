export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).end();

  const { txHash } = req.body;
  if (!txHash) return res.status(400).json({ error: "Missing txHash" });

  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  // Only add if not already present
  const getRes = await fetch(`${url}/get/tx:${txHash}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const existing = await getRes.json();
  if (!existing.result) {
    await fetch(`${url}/set/tx:${txHash}/pending`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Also push to list so /api/list can find all hashes
    await fetch(`${url}/lpush/txlist/${txHash}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  return res.json({ success: true });
}
