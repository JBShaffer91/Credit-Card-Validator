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
