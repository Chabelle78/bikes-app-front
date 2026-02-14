import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";
import type { BaseCardProps } from "./types";

export const CardInfoGroup = React.forwardRef<HTMLDivElement, BaseCardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeStyles(styles.cardInfoGroup, className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardInfoGroup.displayName = "CardInfoGroup";
