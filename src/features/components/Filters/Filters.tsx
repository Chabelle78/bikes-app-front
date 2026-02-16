import MultiOptions from "../MultiOptions/MultiOptions";

import styles from "./Filters.module.scss";
import useFilters from "./useFilters";

export default function Filters() {
  const {
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
  } = useFilters();

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
        selectedOptions={selectedRidingTypes.map(
          (value) => ridingTypes.find((t) => t.value === value)?.label || value,
        )}
        onSelectionChange={handleRidingTypeChange}
      />
      <MultiOptions
        title="Matériau"
        icon="⚙️"
        options={materials.map((m) => m.label)}
        selectedOptions={selectedMaterials.map(
          (value) => materials.find((m) => m.value === value)?.label || value,
        )}
        onSelectionChange={handleMaterialChange}
      />
      <MultiOptions
        title="Couleur"
        icon="🎨"
        options={colors.map((c) => c.label)}
        selectedOptions={selectedColors.map(
          (value) => colors.find((c) => c.value === value)?.label || value,
        )}
        onSelectionChange={handleColorChange}
      />
    </div>
  );
}
