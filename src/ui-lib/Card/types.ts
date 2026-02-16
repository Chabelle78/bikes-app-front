import * as React from "react";

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

// Types de badges avec variants spécifiques
type BrandBadgeProps = {
  type: "brand";
  variant?: "premium" | "standard" | "budget";
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  className?: string;
  children?: React.ReactNode;
};

type WheelBadgeProps = {
  type: "wheel";
  variant?: "road" | "mountain" | "hybrid" | "gravel";
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  className?: string;
  children?: React.ReactNode;
};

type RideBadgeProps = {
  type: "ride";
  variant?: "primary" | "secondary" | "success" | "warning" | "info" | "danger" | "purple" | "cyan";
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  className?: string;
  children?: React.ReactNode;
};

export type CardBadgeProps = BrandBadgeProps | WheelBadgeProps | RideBadgeProps;

export interface CardInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  className?: string;
}

export interface CardFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  className?: string;
}
