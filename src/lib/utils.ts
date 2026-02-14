/**
 * Utility function to merge CSS module classes
 * Filters out undefined/null values and joins the remaining strings
 */
export function mergeStyles(...styles: (string | undefined | null | false)[]) {
  return styles.filter(Boolean).join(" ");
}

type ClassValue = string | number | boolean | undefined | null | ClassArray | ClassDict;
type ClassArray = ClassValue[];
type ClassDict = Record<string, boolean | undefined | null>;

/**
 * Utility function to merge CSS classes (similar to clsx)
 * Handles strings, arrays, and objects
 */
export function cn(...inputs: ClassValue[]) {
  const classes: string[] = [];
  
  inputs.forEach(input => {
    if (!input) return;
    
    if (typeof input === 'string') {
      classes.push(input);
    } else if (Array.isArray(input)) {
      const result = cn(...input);
      if (result) classes.push(result);
    } else if (typeof input === 'object') {
      Object.keys(input).forEach(key => {
        if (input[key]) classes.push(key);
      });
    }
  });
  
  return classes.join(' ');
}
