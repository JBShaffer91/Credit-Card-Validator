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

console.log(isValid('4111 1111 1111 1111') === true);
console.log(isValid('4111 1111 1111 1112') === false);
