import { useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { updateFilter } from "@/features/bikes/bikesSlice";
import { selectFilters } from "@/features/bikes/bikes.selector";
import { selectAllBrands } from "@/features/brandsSlice";
import { selectRidingTypes } from "@/features/ridingTypesSlice";
import { selectFrameMaterials } from "@/features/frameMaterialSlice";

import { colorLabels, materialLabels, ridingTypeLabels } from "@/utils/labels";

import { selectColors } from "@/features/colorSlice";

export default function useFilters(): {
  brands: string[];
  selectedBrands: string[];
  handleBrandChange: (selected: string[]) => void;
  ridingTypes: { label: string; value: string }[];
  selectedRidingTypes: string[];
  handleRidingTypeChange: (selected: string[]) => void;
  materials: { label: string; value: string }[];
  selectedMaterials: string[];
  handleMaterialChange: (selected: string[]) => void;
  colors: { label: string; value: string }[];
  selectedColors: string[];
  handleColorChange: (selected: string[]) => void;
} {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const allBrands = useAppSelector(selectAllBrands);
  const allRidingTypes = useAppSelector(selectRidingTypes);
  const allFrameMaterials = useAppSelector(selectFrameMaterials);
  const allColors = useAppSelector(selectColors);

  const brands = useMemo(() => {
    return allBrands.map((brand) => brand.name).sort();
  }, [allBrands]);

  const ridingTypes = useMemo(() => {
    return allRidingTypes.map((type) => ({
      label: ridingTypeLabels[type] || type,
      value: type,
    }));
  }, [allRidingTypes]);

  const materials = useMemo(() => {
    return allFrameMaterials.map((material) => ({
      label: materialLabels[material] || material,
      value: material,
    }));
  }, [allFrameMaterials]);

  const colors = useMemo(() => {
    return allColors.map((color) => ({
      label: colorLabels[color] || color,
      value: color,
    }));
  }, [allColors]);

  const selectedBrands = filters.brand || [];
  const selectedRidingTypes = filters.riding_type || [];
  const selectedMaterials = filters.frame_material || [];
  const selectedColors = filters.color || [];

  // Handlers
  const handleBrandChange = (selected: string[]) => {
    dispatch(updateFilter({ brand: selected.length > 0 ? selected : [] }));
  };

  const handleRidingTypeChange = (selected: string[]) => {
    const selectedValues = selected.map((label) => {
      const type = ridingTypes.find(
        (t) => t.label === label || t.value === label,
      );
      return type?.value || label;
    });
    dispatch(updateFilter({ riding_type: selectedValues }));
  };

  const handleMaterialChange = (selected: string[]) => {
    const selectedValues = selected.map((label) => {
      const material = materials.find(
        (m) => m.label === label || m.value === label,
      );
      return material?.value || label;
    });
    dispatch(updateFilter({ frame_material: selectedValues }));
  };

  const handleColorChange = (selected: string[]) => {
    const selectedValues = selected.map((label) => {
      const color = colors.find((c) => c.label === label || c.value === label);
      return color?.value || label;
    });
    dispatch(updateFilter({ color: selectedValues }));
  };

  return {
    brands,
    selectedBrands,
    handleBrandChange,
    ridingTypes,
    selectedRidingTypes,
    handleRidingTypeChange,
    materials,
    selectedMaterials,
    handleMaterialChange,
    colors,
    selectedColors,
    handleColorChange,
  };
}
