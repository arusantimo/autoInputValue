declare module 'auto-hyphen' {
  export function autoHypenPhone(value: string): string;
  export function autoHypenBirth(value: string): string;
  export const removeHypen: (value: string) => string;
};