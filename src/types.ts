export interface ICheckStrength {
  (password: string, validSymbolsChars?: string): {
    points: number;
    range: string;
  };
}
