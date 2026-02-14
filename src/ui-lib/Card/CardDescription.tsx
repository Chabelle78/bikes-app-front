import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={mergeStyles(styles.cardDescription, className)}
      {...props}
    >
      {children}
    </p>
  )
);
CardDescription.displayName = "CardDescription";
