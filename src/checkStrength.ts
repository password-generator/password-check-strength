import GetPoints from './getPoints';

interface ICheckResult {
  points: number;
  range: string;
}

interface ICheckStrength {
  (password: string, validSymbolsCharacters: string): ICheckResult;
}

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
      return null;
  }
};

const checkStrength: ICheckStrength = (password, validSymbolsCharacters) => {
  let points = 0;

  const getPoints = new GetPoints(password, validSymbolsCharacters);

  points += getPoints.length();
  points += getPoints.letters();
  points += getPoints.numbers();
  points += getPoints.characters();
  points += getPoints.bonus();

  const checkResult: ICheckResult = {
    points,
    range: getRange(points),
  };

  return checkResult;
};

export default checkStrength;
