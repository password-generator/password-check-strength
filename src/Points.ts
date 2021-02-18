interface ITotalOfChar {
  letters: {
    uppercase: number;
    lowercase: number;
  };
  numbers: number;
  symbols: number;
}

type THeightPoints = 25 | 10 | 5 | 0;
type TMediumPoints = 20 | 10 | 5 | 0;
type TLowPoints = 5 | 2 | 3 | 0;

interface IPoints {
  length: () => THeightPoints;
  letters: () => TMediumPoints;
  numbers: () => TMediumPoints;
  characters: () => THeightPoints;
  bonus: () => TLowPoints;
  getAll: () => number;
}

class Points implements IPoints {
  private passwordLength: number;

  private totalOfChar: ITotalOfChar;

  constructor(password: string, validSymbolsChars?: string) {
    const symbolsChar =
      validSymbolsChars || password.split(/[A-z]|[0-9]/g).join('');

    const searchNextCharacterInsteadOfUseToValidation = '\\';
    const symbolsSearchRegex: RegExp | null = symbolsChar
      ? new RegExp(
          `${searchNextCharacterInsteadOfUseToValidation}${symbolsChar
            .split('')
            .join(`|${searchNextCharacterInsteadOfUseToValidation}`)}`,
          'g'
        )
      : null;

    this.passwordLength = password.length;

    this.totalOfChar = {
      letters: {
        lowercase: password.split(/[a-z]/g).length,
        uppercase: password.split(/[A-Z]/g).length,
      },
      numbers: password.split(/[0-9]/g).length,
      symbols: symbolsSearchRegex
        ? password.split(symbolsSearchRegex).length
        : 0,
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
        return 0;
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
        return 0;

      default:
        return 0;
    }
  }

  numbers() {
    switch (true) {
      case this.totalOfChar.numbers >= 3:
        return 20;

      case this.totalOfChar.numbers >= 1:
        return 10;

      case this.totalOfChar.numbers < 1:
        return 0;

      default:
        return 0;
    }
  }

  characters() {
    switch (true) {
      case this.totalOfChar.symbols >= 3:
        return 25;

      case this.totalOfChar.symbols >= 1:
        return 10;

      case this.totalOfChar.symbols < 1:
        return 0;

      default:
        return 0;
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
        return 0;
    }
  }

  getAll() {
    let pointing = 0;

    pointing += this.length();
    pointing += this.letters();
    pointing += this.numbers();
    pointing += this.characters();
    pointing += this.bonus();

    return pointing;
  }
}

export default Points;
