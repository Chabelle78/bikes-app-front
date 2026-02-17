import { DemoCards } from "./DemoCards";
import useHome from "./useHome";

import styles from "./Home.module.scss";
import FiltersHeader from "@/features/components/FilltersHeader/FiltersHeader";

export default function Home() {
  const { bikes, loading, error } = useHome();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiltersHeader />
      </div>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>Erreur: {error}</p>}
      <div className={styles.content}>
        <DemoCards bikes={bikes} />
      </div>
    </div>
  );
}
