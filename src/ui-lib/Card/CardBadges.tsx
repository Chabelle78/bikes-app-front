import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";
import type { BaseCardProps } from "./types";

export const CardBadges = React.forwardRef<HTMLDivElement, BaseCardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeStyles(styles.cardBadges, className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardBadges.displayName = "CardBadges";
