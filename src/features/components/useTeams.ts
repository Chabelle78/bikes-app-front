import { getOneLeague, getTeams } from "@/services/api/sportsdb.service";
import { useEffect, useState } from "react";

export default function useTeams() {
  const [teams, setTeams] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError(null);

      try {
        const resultLeague = await getOneLeague({ leagueId: 4465 } as {
          leagueId: number;
        });

        const league = resultLeague?.[0];

        if (league && league.strLeague) {
          const result = await getTeams({ strLeague: league.strLeague } as {
            strLeague: string;
          });

          setTeams(result ?? []);
        } else {
          setTeams([]);
        }
      } catch (err) {
        setError(err as Error);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return {
    teams,
    loading,
    error,
  };
}
