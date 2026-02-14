import type { Bike } from "../../types/Bikes";
import { mockData } from "./client";

type BikeQuery = {
  brand?: string;
  riding_type?: string;
  frame_material?: string;
  q?: string;
};

export async function getBikes(params?: BikeQuery): Promise<Bike[]> {
  let data = mockData as Bike[];
  if (params) {
    if (params.brand)
      data = data.filter(
        (b) => b.brand?.name === params.brand || b.brand?.id === params.brand,
      );
    if (params.riding_type)
      data = data.filter((b) => b.riding_type === params.riding_type);
    if (params.frame_material)
      data = data.filter((b) => b.frame_material === params.frame_material);
    if (params.q) {
      const q = params.q.toLowerCase();
      data = data.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          (b.description && b.description.toLowerCase().includes(q)),
      );
    }
  }
  return data;
}

export async function getBikeDetail(id: string): Promise<Bike | null> {
  return ((mockData as Bike[]).find((b) => b.id === id) ?? null) as Bike | null;
}
