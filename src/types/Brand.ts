import type { Country } from "./Country";

export type Brand = {
  id: string;
  name: string;
  country?: Country;
  founded_year?: number;
  description?: string;
  logo_url?: string;
};