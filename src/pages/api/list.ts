export default async function handler(req: any, res: any) {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  // Get all tx hashes from the list
  const listRes = await fetch(`${url}/lrange/txlist/0/-1`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const listData = await listRes.json();
  const hashes: string[] = listData.result || [];

  // Fetch status for each hash
  const transactions = await Promise.all(
    hashes.map(async (txHash: string) => {
      const r = await fetch(`${url}/get/tx:${txHash}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const d = await r.json();
      return { txHash, status: d.result || "unknown" };
    })
  );

  return res.json(transactions);
}
