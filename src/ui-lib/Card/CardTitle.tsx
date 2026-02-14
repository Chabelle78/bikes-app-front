import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={mergeStyles(styles.cardTitle, className)}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";
