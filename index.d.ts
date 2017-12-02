declare module 'auto-hyphen' {
  export function autoHyphenPhone(value: string): string;
  export function autoHyphenBirth(value: string): string;
  export const removeHyphen: (value: string) => string;
}