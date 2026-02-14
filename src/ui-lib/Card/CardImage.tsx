import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";
import type { CardImageProps } from "./types";

export const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, src, alt, ...props }, ref) => (
    <div className={styles.cardImageWrapper}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={mergeStyles(styles.cardImage, className)}
        {...props}
      />
    </div>
  )
);
CardImage.displayName = "CardImage";
