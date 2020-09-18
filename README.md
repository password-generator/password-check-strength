# password-check-strength

A simple package to check the password strength

---

### Password Strength Algorithm

#### Password Length:
    5 Points: Less than 4 characters
    10 Points: 5 to 7 characters
    25 Points: 8 or more

#### Letters:
    0 Points: No letters
    10 Points: Letters are all lower case
    20 Points: Letters are upper case and lower case

#### Numbers:
    0 Points: No numbers
    10 Points: 1 number
    20 Points: 3 or more numbers

#### Characters:
    0 Points: No characters
    10 Points: 1 character
    25 Points: 3 or more characters

#### Bonus:
    2 Points: Letters and numbers
    3 Points: Letters, numbers, and characters
    5 Points: Mixed case letters, numbers, and characters

#### Password Text Range:
    >= 90: Very Secure
    >= 80: Secure
    >= 70: Very Strong
    >= 60: Strong
    >= 50: Average
    >= 25: Weak
    >= 0: Very Weak