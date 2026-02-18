// Mapping des valeurs techniques vers des labels lisibles --> la traduction de l'application arrivera dans une V2
const RIDING_TYPE_LABELS: Record<string, string> = {
  Road: "Route",
  VTT: "VTT",
  Mountain: "Mountain",
  Gravel: "Gravel",
  Urban: "Ville",
  Electric: "Électrique",
  Hybrid: "Hybride",
  Triathlon: "Triathlon",
};

const MATERIAL_LABELS: Record<string, string> = {
  Carbon: "Carbone",
  Aluminum: "Aluminium",
  Steel: "Acier",
  Titanium: "Titane",
  "Carbon Fiber": "Fibre de carbone",
};

export const getDisplayValue = (key: string, value: string): string => {
  if (key === "riding_type") {
    return RIDING_TYPE_LABELS[value] || value;
  }
  if (key === "frame_material") {
    return MATERIAL_LABELS[value] || value;
  }
  if (key === "weight_min" || key === "weight_max") {
    return `${value} kg`;
  }
  return value;
};
