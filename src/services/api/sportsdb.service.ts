export async function getTeamEquipment(teamId: number) {
  const url = `${import.meta.env.VITE_SPORTSDB_BASE_URL}/${import.meta.env.VITE_SPORTSDB_API_KEY}/lookupequipment.php?id=${teamId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des équipements");
  }

  const data = await response.json();
  return data.equipment;
}

export async function getTeams({ strLeague }: { strLeague: string }) {
  const url = `${import.meta.env.VITE_SPORTSDB_BASE_URL}/${import.meta.env.VITE_SPORTSDB_API_KEY}/search_all_teams.php?l=${strLeague}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des équipes");
  }

  const data = await response.json();
  return data.teams;
}

export async function getLeagues() {
  const url = `${import.meta.env.VITE_SPORTSDB_BASE_URL}/${import.meta.env.VITE_SPORTSDB_API_KEY}/search_all_leagues.php`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des ligues");
  }

  const data = await response.json();
  return data.leagues;
}

export async function getOneLeague({ leagueId }: { leagueId: number }) {
  const url = `${import.meta.env.VITE_SPORTSDB_BASE_URL}/${import.meta.env.VITE_SPORTSDB_API_KEY}/lookupleague.php?id=${leagueId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement de la ligue");
  }

  const data = await response.json();
  return data.leagues;
}

export async function getCountries() {
  const url = `${import.meta.env.VITE_SPORTSDB_BASE_URL}/${import.meta.env.VITE_SPORTSDB_API_KEY}/all_countries.php`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des pays");
  }

  const data = await response.json();
  return data.countries;
}
