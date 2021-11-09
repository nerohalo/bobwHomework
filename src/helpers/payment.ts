/* eslint-disable no-cond-assign,no-bitwise,no-plusplus,@typescript-eslint/ban-ts-comment,func-names */
import c from 'helpers/constants';

export const getCCBrandName = (input: string) => {
  if (input.match(c.REGEX.CCBRAND_REGEX.VISA)) {
    return 'visa';
  }

  if (input.match(c.REGEX.CCBRAND_REGEX.MASTERCARD)) {
    return 'mastercard';
  }

  if (input.match(c.REGEX.CCBRAND_REGEX.AMEX)) {
    return 'amex';
  }

  return null;
};

/*
 Fastest Luhn algorithm that i could find, made by ShirtlessKirk
*/

export const luhnCheck = (function (arr) {
  // @ts-ignore
  return function (ccNum) {
    let len = ccNum.length;
    let bit = 1;
    let sum = 0;
    let val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));
