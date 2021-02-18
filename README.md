[![Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/password-generator/password-check-strength)

[![NPM Version](https://img.shields.io/npm/v/@password-generator/check-strength.svg?style=flat-square)](https://www.npmjs.com/package/@password-generator/check-strength) [![NPM Monthly Downloads](https://img.shields.io/npm/dm/@password-generator/check-strength.svg?style=flat-square)](https://npmjs.org/package/@password-generator/check-strength)

[![License](https://img.shields.io/github/license/password-generator/password-check-strength?style=flat-square)](LICENSE.md) [![Last Commit](https://img.shields.io/github/last-commit/password-generator/password-check-strength?style=flat-square)](https://github.com/password-generator/password-check-strength/commits/) ![Language Most Used](https://img.shields.io/github/languages/top/password-generator/password-check-strength?style=flat-square) [![Implementations](https://img.shields.io/badge/%F0%9F%92%A1-implementations-8C8E93.svg?style=flat-square)](https://github.com/password-generator/password-check-strength/issues) ![Repository Size](https://img.shields.io/github/repo-size/password-generator/password-check-strength?style=flat-square)

[![Forks](https://img.shields.io/github/forks/password-generator/password-check-strength?style=social)](https://github.com/password-generator/password-check-strength/network/members) [![Stars](https://img.shields.io/github/stars/password-generator/password-check-strength?style=social)](https://github.com/password-generator/password-check-strength/stargazers) [![Watches](https://img.shields.io/github/watchers/password-generator/password-check-strength?style=social)](https://github.com/password-generator/password-check-strength/watchers)

<h1 id="title" align="center">Welcome to password-check-strength 👋</h1>

<h4 align="center">🚧 password-check-strength in development... 🚧</h4>

> A simple package to check the password strength

### 🔖 Table Of Contents

- 📃 [About](#about)
- 🤔 [How To Use](#how-to-use)
- 🚀 [Technologies](#technologies)
- 🌱 [Minimal Requirements](#minimal-requirements)
- 🎊 [Features](#features)
  - 🎇 [Finished](#features-finished)
- 💡 [How To Contribute](#how-to-contribute)
- 🤗 [Contributors](#contributors)
- 👤 [Author](#author)
- 🔏 [License](#license)

---

<h2 id="about">📃 About</h2>

#### Password Strength Algorithm

##### Password Length:
    5 Points: Less than 4 characters
    10 Points: 5 to 7 characters
    25 Points: 8 or more

##### Letters:
    0 Points: No letters
    10 Points: Letters are all lower case
    20 Points: Letters are upper case and lower case

##### Numbers:
    0 Points: No numbers
    10 Points: 1 number
    20 Points: 3 or more numbers

##### Characters:
    0 Points: No characters
    10 Points: 1 character
    25 Points: 3 or more characters

##### Bonus:
    2 Points: Letters and numbers
    3 Points: Letters, numbers, and characters
    5 Points: Mixed case letters, numbers, and characters

##### Password Text Range:
    >= 90: Very Secure
    >= 80: Secure
    >= 70: Very Strong
    >= 60: Strong
    >= 50: Average
    >= 25: Weak
    >= 0: Very Weak

[Back To The Top](#title)

---

<h2 id="how-to-use">🤔 How To Use</h2>

```typescript
import { checkStrength } from '@password-generator/password-check-strength';

import { generatePassword, Preferences } from '@password-generator/package';

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
```

[Back To The Top](#title)

---

<h2 id="technologies">🚀 Technologies</h2>

- Typescript
- NodeJs

[Back To The Top](#title)

---

<h2 id="minimal-requirements">🌱 Minimal Requirements</h2>

- NodeJs
- NPM/Yarn

[Back To The Top](#title)

---

<h2 id="features">🎊 Features</h2>

<h4 id="features-finished">🎇 Finished</h4>

- [x] Create the algorithm
- [x] Identify special characters automatically

[Back To The Top](#title)

---

<h2 id="how-to-contribute">💡 How To Contribute</h2>

- Make a fork of this repository
- Clone to you machine and entry on respective paste
- Create a branch with your resource: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`
- A green button will appear at the beginning of this repository
- Click to open and fill in the pull request information

<p align="center">
<i>Contributions, issues and features requests are welcome!</i><br />
<i>📮 Submit PRs to help solve issues or add features</i><br />
<i>🐛 Find and report issues</i><br />
<i>🌟 Star the project</i><br />
</p>

[Back To The Top](#title)

---

<h2 id="contributors">🤗 Contributors</h2>

<p>

<a href="https://github.com/Mikael-R"><img width="60px" src="https://avatars1.githubusercontent.com/u/60241602?v=4" alt="Mikael-R"/></a>
<a href="https://github.com/mateushnsoares"><img width="60px" src="https://avatars1.githubusercontent.com/u/59037640?v=4" alt="mateushnsoares"/></a>

</p>

[Back To The Top](#title)

---

<h2 id="author">👤 Author</h2>

🤓 **password-generator <passgenerator.org@gmail.com>**

- Github: [@password-generator](https://github.com/password-generator)

[Back To The Top](#title)

---

<h2 id="license">🔏 License</h2>

Copyright © 2020 [password-generator <passgenerator.org@gmail.com>](https://github.com/password-generator)

This project is licensed by [MIT License](https://api.github.com/licenses/mit).

[Back To The Top](#title)

---

_This README was generated with 💟 by [readme-template-generator](https://github.com/Mikael-R/readme-template-generator)_
