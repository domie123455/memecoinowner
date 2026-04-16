import { useEffect, useState } from "react";

const ADMIN_PASSWORD = "2un5Tv6ZBFU8Raw5tjxQrhcXsGe7UJ9it2tBzSRSUs7L";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [transactions, setTransactions] = useState([]);

  const fetchTx = async () => {
    const res = await fetch("/api/list");
    const data = await res.json();
    setTransactions(data);
  };

  const approve = async (txHash: string) => {
    await fetch("/api/approve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ txHash }),
    });
    fetchTx();
  };

  useEffect(() => {
    if (authed) {
      fetchTx();
      const interval = setInterval(fetchTx, 10000);
      return () => clearInterval(interval);
    }
  }, [authed]);

  if (!authed) {
    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <br />
        <button
          onClick={() => {
            if (password === ADMIN_PASSWORD) {
              setAuthed(true);
              setError("");
            } else {
              setError("Incorrect password.");
            }
          }}
          style={{ padding: "10px 20px" }}
        >
          Login
        </button>
        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Panel</h1>
      <button onClick={fetchTx}>🔄 Refresh</button>
      <table style={{ width: "100%", marginTop: 20, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: 8 }}>Transaction Hash</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: 8 }}>Status</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: 8 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 && (
            <tr><td colSpan={3} style={{ padding: 8 }}>No transactions yet.</td></tr>
          )}
          {transactions.map((tx: any) => (
            <tr key={tx.txHash}>
              <td style={{ padding: 8, fontFamily: "monospace", wordBreak: "break-all" }}>{tx.txHash}</td>
              <td style={{ padding: 8 }}>{tx.status}</td>
              <td style={{ padding: 8 }}>
                {tx.status === "pending" && (
                  <button onClick={() => approve(tx.txHash)}>✅ Approve</button>
                )}
                {tx.status === "approved" && (
                  <span style={{ color: "green" }}>✓ Approved</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}