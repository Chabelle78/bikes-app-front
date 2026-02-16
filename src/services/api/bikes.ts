import type { Bike } from "../../types/Bikes";
import { bikes } from "./client";

type BikeQuery = {
  brand?: string;
  riding_type?: string;
  frame_material?: string;
  search_term?: string;
};

export async function getBikes(params?: BikeQuery): Promise<Bike[]> {
  let data = bikes as Bike[];
  if (params) {
    if (params.brand)
      data = data.filter(
        (b) => b.brand?.name === params.brand || b.brand?.id === params.brand,
      );
    if (params.riding_type)
      data = data.filter((b) => b.riding_type === params.riding_type);
    if (params.frame_material)
      data = data.filter((b) => b.frame_material === params.frame_material);
    if (params.search_term) {
      const search_term = params.search_term.toLowerCase();
      data = data.filter(
        (b) =>
          b.name.toLowerCase().includes(search_term) ||
          (b.description && b.description.toLowerCase().includes(search_term)),
      );
    }
  }
  return data;
}

export async function getBikeDetail(id: string): Promise<Bike | null> {
  return ((bikes as Bike[]).find((b) => b.id === id) ?? null) as Bike | null;
}
