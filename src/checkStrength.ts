import Points from './Points';
import { CheckStrengthResult } from './types';

const getRange = (points: number) => {
  switch (true) {
    case points >= 90:
      return 'Very Secure';
    case points >= 80:
      return 'Secure';
    case points >= 70:
      return 'Very Strong';
    case points >= 60:
      return 'Strong';
    case points >= 50:
      return 'Average';
    case points >= 25:
      return 'Weak';
    case points >= 0:
      return 'Very Weak';
    default:
      return '';
  }
};

interface ICheckStrength {
  (password: string, validSymbolsChars?: string): CheckStrengthResult;
}

const checkStrength: ICheckStrength = (password, validSymbolsChars) => {
  const points = new Points(password, validSymbolsChars).getAll();

  const range = getRange(points);

  return { points, range };
};

export default checkStrength;
