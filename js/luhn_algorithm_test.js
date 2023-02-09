// Test 1: FAIL

describe('Luhn Algorithm', () => {
  const isValid = (cardNumber) => {
    const isValid = (cardNumber) => {
      let reversed = cardNumber.split('').reverse().join('');
      let total = 0;
      for (let i = 0; i < reversed.length; i++) {
        let digit = parseInt(reversed[i]);
        if (i % 2 === 0) {
          total += digit;
        } else {
          total += digit * 2 >= 10 ? digit * 2 - 9 : digit * 2;
        }
      }
      return total % 10 === 0;
    };
  };

  test('validates a correct credit card number', () => {
    expect(isValid('4111 1111 1111 1111')).toBe(true);
  });

  test('invalidates an incorrect credit card number', () => {
    expect(isValid('4111 1111 1111 1112')).toBe(false);
  });
});

// Test 2: FAIL


describe('Luhn Algorithm', () => {
  const isValid = (cardNumber) => {
    let reversed = cardNumber.split('').reverse().join('');
    let total = 0;
    for (let i = 0; i < reversed.length; i++) {
      let digit = parseInt(reversed[i]);
      if (i % 2 === 0) {
        total += digit;
      } else {
        total += digit * 2 >= 10 ? digit * 2 - 9 : digit * 2;
      }
    }
    return total % 10 === 0;
  };

  test('validates a correct credit card number', () => {
    expect(isValid('4111 1111 1111 1111')).toBe(true);
  });

  test('invalidates an incorrect credit card number', () => {
    expect(isValid('4111 1111 1111 1112')).toBe(false);
  });
});

// Test 3:
// BUGFIX: Jest is not recognizing file rename

describe('Luhn Algorithm', () => {
  const isValid = (cardNumber) => {
    let reversed = cardNumber.replace(/\s/g, '').split('').reverse().join('');
    let total = 0;
    for (let i = 0; i < reversed.length; i++) {
      let digit = parseInt(reversed[i]);
      if (i % 2 === 0) {
        total += digit;
      } else {
        total += digit * 2 >= 10 ? digit * 2 - 9 : digit * 2;
      }
    }
    return total % 10 === 0;
  };

  test('validates a correct credit card number', () => {
    expect(isValid('4111 1111 1111 1111')).toBe(true);
  });

  test('invalidates an incorrect credit card number', () => {
    expect(isValid('4111 1111 1111 1112')).toBe(false);
  });
});

// Test 4: Testing to see if it exports the test cases correctly and is correctly formatted according to Jest's expectations

const luhnAlgorithm = require('./luhn_algorithm');

describe('Luhn Algorithm', () => {
  test('validates credit card number', () => {
    expect(luhnAlgorithm('4111 1111 1111 1111')).toBe(true);
  });

  test('invalidates credit card number', () => {
    expect(luhnAlgorithm('4111 1111 1111 1112')).toBe(false);
  });
});
// Giving up on Jest for now. I'll come back to it later.

// Test 5 - manual test

const isValid = (cardNumber) => {
  let reversed = cardNumber.split('').reverse().join('');
  let total = 0;
  for (let i = 0; i < reversed.length; i++) {
    let digit = parseInt(reversed[i]);
    if (i % 2 === 0) {
      total += digit;
    } else {
      total += digit * 2 >= 10 ? digit * 2 - 9 : digit * 2;
    }
  }
  return total % 10 === 0;
};

const correctCardNumber = '4111 1111 1111 1111';
console.log(`isValid('${correctCardNumber}') =`, isValid(correctCardNumber));

const incorrectCardNumber = '4111 1111 1111 1112';
console.log(`isValid('${incorrectCardNumber}') =`, isValid(incorrectCardNumber));

// Test 6 - manual test for jest test #2

describe('Luhn Algorithm', () => {
  const isValid = (cardNumber) => {
    let reversed = cardNumber.split('').reverse().join('');
    let total = 0;
    for (let i = 0; i < reversed.length; i++) {
      let digit = parseInt(reversed[i]);
      if (i % 2 === 0) {
        total += digit;
      } else {
        total += digit * 2 >= 10 ? digit * 2 - 9 : digit * 2;
      }
    }
    return total % 10 === 0;
  };

  test('validates a correct credit card number', () => {
    expect(isValid('4111 1111 1111 1111')).toBe(true);
  });

  test('invalidates an incorrect credit card number', () => {
    expect(isValid('4111 1111 1111 1112')).toBe(false);
  });
});
// working...

// Test 7 - manual test: importing from scripts.js

import isValid from './scripts.js';

test('validates a correct credit card number', () => {
  expect(isValid('4111 1111 1111 1111')).toBe(true);
});

test('invalidates an incorrect credit card number', () => {
  expect(isValid('4111 1111 1111 1112')).toBe(false);
});
