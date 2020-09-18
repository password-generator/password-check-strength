interface ITotalOfChar {
  letters: {
    uppercase: number;
    lowercase: number;
  };
  numbers: number;
  symbols: number;
}

type THeightPoints = 25 | 10 | 5;
type TMediumPoints = 20 | 10 | 5;
type TLowPoints = 5 | 2 | 3;

interface IGetPoints {
  passwordLength: number;
  totalOfChar: ITotalOfChar;
  length: () => THeightPoints;
  letters: () => TMediumPoints;
  numbers: () => TMediumPoints;
  characters: () => THeightPoints;
  bonus: () => TLowPoints;
}

class GetPoints implements IGetPoints {
  passwordLength: number;

  totalOfChar: ITotalOfChar;

  constructor(password: string, validSymbolsChar: string) {
    const symbolsSearchRegex: RegExp = new RegExp(
      `${validSymbolsChar.split('').join('|\\')}`,
      'g'
    );

    this.passwordLength = password.length;

    this.totalOfChar = {
      letters: {
        lowercase: password.split(/a-z/g).length,
        uppercase: password.split(/[A-Z]/g).length,
      },
      numbers: password.split(/[0-9]/g).length,
      symbols: password.split(symbolsSearchRegex).length,
    };
  }

  length() {
    switch (true) {
      case this.passwordLength >= 8:
        return 25;

      case this.passwordLength >= 5 && this.passwordLength <= 7:
        return 10;

      case this.passwordLength < 4:
        return 5;

      default:
        return null;
    }
  }

  letters() {
    const { letters } = this.totalOfChar;

    switch (true) {
      case !!(letters.uppercase && letters.lowercase):
        return 20;

      case !!(!letters.uppercase && letters.lowercase):
        return 10;

      case !(letters.uppercase && letters.lowercase):
        return null;

      default:
        return null;
    }
  }

  numbers() {
    switch (true) {
      case this.totalOfChar.numbers >= 3:
        return 20;

      case this.totalOfChar.numbers >= 1:
        return 10;

      case this.totalOfChar.numbers < 1:
        return null;

      default:
        return null;
    }
  }

  characters() {
    switch (true) {
      case this.totalOfChar.symbols >= 3:
        return 25;

      case this.totalOfChar.symbols >= 1:
        return 10;

      case this.totalOfChar.symbols < 1:
        return null;

      default:
        return null;
    }
  }

  bonus() {
    const { letters, numbers, symbols } = this.totalOfChar;

    switch (true) {
      case !!(letters.uppercase && letters.lowercase && numbers && symbols):
        return 5;

      case !!(letters.uppercase || (letters.lowercase && numbers && symbols)):
        return 3;

      case !!(letters.uppercase || (letters.lowercase && numbers)):
        return 2;

      default:
        return null;
    }
  }
}

export default GetPoints;
