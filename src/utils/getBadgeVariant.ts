import type { RidingType } from "@/types/Bikes";

export const getBadgeVariant = (
  type: RidingType,
): "primary" | "secondary" | "success" | "warning" | "info" | "danger" | "purple" | "cyan" => {
  const variants: Record<
    string,
    "primary" | "secondary" | "success" | "warning" | "info" | "danger" | "purple" | "cyan"
  > = {
    Road: "primary",           // Bleu
    Mountain: "success",        // Vert
    Hybrid: "cyan",             // Cyan
    Electric: "warning",        // Orange
    Gravel: "secondary",        // Gris
    Triathlon: "danger",        // Rouge
    Urban: "purple",            // Violet
    VTT: "info",                // Rose
  };
  return variants[type] || "primary";
};
