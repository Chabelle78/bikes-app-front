import type { Brand } from "./Brand";

export enum RidingType {
  Road = "Road",
  Mountain = "Mountain",
  Hybrid = "Hybrid",
  Electric = "Electric",
  Gravel = "Gravel",
  Triathlon = "Triathlon",
  Urban = "Urban",
  VTT = "VTT",
}

export enum FrameMaterial {
  Aluminum = "Aluminum",
  Carbon = "Carbon",
  CarbonFiber = "Carbon Fiber",
  Steel = "Steel",
  Titanium = "Titanium",
}

export enum WheelType {
  Standard = "Standard",
  Aero = "Aero",
  OffRoad = "Off-Road",
  Carbon = "Carbon",
  Aluminum = "Aluminum",
  Disc = "Disc",
}

export type Bike = {
  id: string;
  name: string;
  brand: Brand;
  riding_type: RidingType;
  description?: string;
  frame_material?: FrameMaterial;
  wheel_type?: WheelType;
  weight?: string;
  color?: string;
  features?: string[];
  image_url?: string;
};
