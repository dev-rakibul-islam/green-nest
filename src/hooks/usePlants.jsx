import { useEffect, useState } from "react";

export default function usePlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/data/plants.json");
        if (!res.ok) throw new Error("Failed to load plants data");
        const data = await res.json();
        if (!cancelled) {
          setPlants(data);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { plants, loading, error };
}
