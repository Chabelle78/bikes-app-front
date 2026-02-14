import type { Country } from "@/types/Country";
import { brands, type Brand } from "./client";

interface BrandQuery {
  name: string;
  country?: Country;
  founded_year?: number;
  description?: string;
  logo_url?: string;
}

export async function getbrands(params?: BrandQuery): Promise<Brand[]> {
  let data = brands as Brand[];
  if (params) {
    if (params.name)
      data = data.filter(
        (b) => b.name.toLowerCase() === params.name.toLowerCase(),
      );
    if (params.country)
      data = data.filter(
        (b) =>
          b.country?.name.toLowerCase() === params.country?.name.toLowerCase(),
      );
    if (params.founded_year)
      data = data.filter((b) => b.founded_year === params.founded_year);
    if (params.description)
      data = data.filter((b) =>
        b.description
          ?.toLowerCase()
          .includes(params.description!.toLowerCase()),
      );
    if (params.logo_url)
      data = data.filter((b) => b.logo_url === params.logo_url);
  }
  return data;
}

export async function getBikeDetail(id: string): Promise<Brand | null> {
  return ((brands as Brand[]).find((b) => b.id === id) ?? null) as Brand | null;
}
