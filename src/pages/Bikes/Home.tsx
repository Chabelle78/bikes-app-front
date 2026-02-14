import { DemoCards } from "./DemoCards";
import useHome from "./useHome";

export default function Home() {
  const { bikes, loading, error } = useHome();

  return (
    <div>
      <h1>Bienvenue sur l'app Bikes</h1>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>Erreur: {error}</p>}
      <DemoCards bikes={bikes} />
    </div>
  );
}
