import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";
import type { CardBadgeProps } from "./types";

export const CardBadge = React.forwardRef<HTMLDivElement, CardBadgeProps>(
  ({ className, type, variant, children, ...props }, ref) => {
    // Définir le variant par défaut selon le type
    const defaultVariant = variant || 
      (type === "brand" ? "standard" : 
       type === "wheel" ? "road" : 
       "primary");

    return (
      <div
        ref={ref}
        className={mergeStyles(
          styles.cardBadge,
          styles[`cardBadge--${type}`],
          defaultVariant && styles[`cardBadge--${defaultVariant}`],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardBadge.displayName = "CardBadge";
