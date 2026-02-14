import { useEffect, useState } from "react";
import { getBikes } from "../../services/api/bikes";
import type { Bike } from "../../types/Bikes";

export default function useHome() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    // setLoading(true); <-- removed to avoid synchronous setState in effect
    getBikes()
      .then((data) => {
        if (!mounted) return;
        setBikes(data.slice(0, 10));
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message ?? String(err));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return { bikes, loading, error };
}
