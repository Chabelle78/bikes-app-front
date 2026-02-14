import useHome from "./useHome";

export default function Home() {
  const { bikes, loading, error } = useHome();

  return (
    <div>
      <h1>Bienvenue sur l'app Bikes</h1>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>Erreur: {error}</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {bikes.map((b) => (
          <li
            key={b.id}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            {b.image_url && (
              <img
                src={b.image_url}
                alt={b.name}
                style={{
                  width: 100,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: 6,
                }}
              />
            )}
            <div>
              <div style={{ fontWeight: 600 }}>{b.name}</div>
              <div style={{ fontSize: 13, color: "#555" }}>
                {b.brand?.name} — {b.riding_type}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
