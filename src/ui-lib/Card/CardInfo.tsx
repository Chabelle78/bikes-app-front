import * as React from "react";
import styles from "./Card.module.scss";
import { mergeStyles } from "@/lib/utils";
import type { CardInfoProps } from "./types";

export const CardInfo = React.forwardRef<HTMLDivElement, CardInfoProps>(
  ({ className, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeStyles(styles.cardInfo, className)}
      {...props}
    >
      {icon && <span className={styles.cardInfoIcon}>{icon}</span>}
      <span className={styles.cardInfoText}>{children}</span>
    </div>
  )
);
CardInfo.displayName = "CardInfo";
