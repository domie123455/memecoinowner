export default async function handler(req: any, res: any) {
  const { txHash } = req.query;
  if (!txHash) return res.json({ status: "not_found" });

  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const r = await fetch(`${url}/get/tx:${txHash}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await r.json();

  if (!data.result) return res.json({ status: "not_found" });
  return res.json({ status: data.result });
}
