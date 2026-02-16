import type { Bike } from "../../types/Bikes";
import type { Brand } from "../../types/Brand";

// Base URL and mock flag
export const baseUrl = import.meta.env.VITE_API_BASE_URL ?? "/api";
export const useMock = (import.meta.env.VITE_API_MOCK === "true") || (import.meta.env.MODE === "development");

// Import mock data (used only when `useMock` is true)
// tsconfig likely has `resolveJsonModule: true`.
import bikes from "../mock/bikes.json";
import brands from "../mock/brands.json";

async function request<T>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return (await res.json()) as T;
}

export { bikes, brands, request };

export type { Bike, Brand };
