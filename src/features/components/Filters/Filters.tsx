import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  updateFilter,
  selectFilters,
} from "@/features/bikesSlice";
import { selectAllBrands } from "@/features/brandsSlice";
import { useMemo } from "react";
import MultiOptions from "../MultiOptions/MultiOptions";

import styles from "./Filters.module.scss";

export default function Filters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const allBrands = useAppSelector(selectAllBrands);

  // Extraire les noms des marques depuis Redux
  const brands = useMemo(() => {
    return allBrands.map((brand) => brand.name).sort();
  }, [allBrands]);

  // Types de vélo disponibles
  const ridingTypes = [
    { label: "Route", value: "Road" },
    { label: "VTT", value: "VTT" },
    { label: "Gravel", value: "Gravel" },
    { label: "Ville", value: "Urban" },
    { label: "Électrique", value: "Electric" },
    { label: "Hybride", value: "Hybrid" },
    { label: "Mountain", value: "Mountain" },
    { label: "Triathlon", value: "Triathlon" },
  ];

  // Matériaux disponibles
  const materials = [
    { label: "Carbone", value: "Carbon" },
    { label: "Aluminium", value: "Aluminum" },
    { label: "Acier", value: "Steel" },
    { label: "Titane", value: "Titanium" },
    { label: "Fibre de carbone", value: "Carbon Fiber" },
  ];
  // Couleurs disponibles
  const colors = [
    { label: "Rouge", value: "Red" },
    { label: "Bleu", value: "Blue" },
    { label: "Vert", value: "Green" },
    { label: "Noir", value: "Black" },
    { label: "Blanc", value: "White" },
    { label: "Jaune", value: "Yellow" },
    { label: "Gris", value: "Gray" },
    { label: "Orange", value: "Orange" },
  ];

  const selectedBrands = filters.brand || [];
  const selectedRidingTypes = filters.riding_type || [];
  const selectedMaterials = filters.frame_material || [];
  const selectedColors = filters.color || [];

  // Handlers
  const handleBrandChange = (selected: string[]) => {
    if (selected.length > 0) {
      dispatch(updateFilter({ brand: selected }));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { brand, ...rest } = filters;
      dispatch(updateFilter(rest));
    }
  };

  const handleRidingTypeChange = (selected: string[]) => {
    if (selected.length > 0) {
      const selectedValues = selected.map(label => {
        const type = ridingTypes.find(
          (t) => t.label === label || t.value === label,
        );
        return type?.value || label;
      });
      dispatch(updateFilter({ riding_type: selectedValues }));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { riding_type, ...rest } = filters;
      dispatch(updateFilter(rest));
    }
  };

  const handleMaterialChange = (selected: string[]) => {
    if (selected.length > 0) {
      const selectedValues = selected.map(label => {
        const material = materials.find(
          (m) => m.label === label || m.value === label,
        );
        return material?.value || label;
      });
      dispatch(updateFilter({ frame_material: selectedValues }));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { frame_material, ...rest } = filters;
      dispatch(updateFilter(rest));
    }
  };

  const handleColorChange = (selected: string[]) => {
    if (selected.length > 0) {
      const selectedValues = selected.map(label => {
        const color = colors.find(
          (c) => c.label === label || c.value === label,
        );
        return color?.value || label;
      });
      dispatch(updateFilter({ color: selectedValues }));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { color, ...rest } = filters;
      dispatch(updateFilter(rest));
    }
  };

  return (
    <div className={styles.multiOptionsContainer}>
      <MultiOptions
        title="Marque"
        icon="🏷️"
        options={brands}
        selectedOptions={selectedBrands}
        onSelectionChange={handleBrandChange}
      />
      <MultiOptions
        title="Type de vélo"
        icon="🚴"
        options={ridingTypes.map((t) => t.label)}
        selectedOptions={
          selectedRidingTypes.map(value => 
            ridingTypes.find((t) => t.value === value)?.label || value
          )
        }
        onSelectionChange={handleRidingTypeChange}
      />
      <MultiOptions
        title="Matériau"
        icon="⚙️"
        options={materials.map((m) => m.label)}
        selectedOptions={
          selectedMaterials.map(value => 
            materials.find((m) => m.value === value)?.label || value
          )
        }
        onSelectionChange={handleMaterialChange}
      />
      <MultiOptions
        title="Couleur"
        icon="🎨"
        options={colors.map((c) => c.label)}
        selectedOptions={
          selectedColors.map(value => 
            colors.find((c) => c.value === value)?.label || value
          )
        }
        onSelectionChange={handleColorChange}
      />
    </div>
  );
}
