import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";
import type { CardFeatureProps } from "./types";

export const CardFeature = React.forwardRef<HTMLDivElement, CardFeatureProps>(
  ({ className, label, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeStyles(styles.cardFeature, className)}
      {...props}
    >
      <span className={styles.cardFeatureLabel}>{label}</span>
      <span className={styles.cardFeatureValue}>{children}</span>
    </div>
  )
);
CardFeature.displayName = "CardFeature";
