/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { generatePassword, Preferences } from '@password-generator/package';

import { checkStrength } from '../index';

const preferences: Preferences = {
  length: 12,
  useChars: {
    pronounceable: false,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  },
};

const password = generatePassword(preferences);

const result = checkStrength(password);

console.log(result);
