import type { BikeFilters } from "@/features/bikesSlice";
import type { BrandFilters } from "@/features/brandsSlice";
import type { Bike } from "@/types/Bikes";
import type { Brand } from "@/types/Brand";

export const applyFiltersBikes = (
  bikes: Bike[],
  filters: BikeFilters,
): Bike[] => {
  let filtered = [...bikes];

  if (filters.brand && filters.brand.length > 0) {
    filtered = filtered.filter(
      (b) =>
        filters.brand!.includes(b.brand?.name || "") ||
        filters.brand!.includes(b.brand?.id || ""),
    );
  }

  if (filters.riding_type && filters.riding_type.length > 0) {
    filtered = filtered.filter((b) =>
      filters.riding_type!.includes(b.riding_type || ""),
    );
  }

  if (filters.frame_material && filters.frame_material.length > 0) {
    filtered = filtered.filter((b) =>
      filters.frame_material!.includes(b.frame_material || ""),
    );
  }

  if (filters.color && filters.color.length > 0) {
    filtered = filtered.filter((b) => filters.color!.includes(b.color || ""));
  }

  if (filters.search_term) {
    const search_term = filters.search_term.toLowerCase();
    filtered = filtered.filter(
      (b) =>
        b.name.toLowerCase().includes(search_term) ||
        (b.description && b.description.toLowerCase().includes(search_term)),
    );
  }

  return filtered;
};

export const applyBrandFilters = (
  brands: Brand[],
  filters: BrandFilters,
): Brand[] => {
  return brands.filter((brand) => {
    if (
      filters.name &&
      !brand.name.toLowerCase().includes(filters.name.toLowerCase())
    ) {
      return false;
    }
    if (
      filters.country &&
      brand.country?.name.toLowerCase() !== filters.country.toLowerCase()
    ) {
      return false;
    }
    if (filters.founded_year && brand.founded_year !== filters.founded_year) {
      return false;
    }
    return true;
  });
};
