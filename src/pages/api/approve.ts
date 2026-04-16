export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).end();

  const { txHash } = req.body;
  if (!txHash) return res.status(400).json({ error: "Missing txHash" });

  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  await fetch(`${url}/set/tx:${txHash}/approved`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json({ success: true });
}
