/* eslint-disable no-useless-escape */
export default {
  ACTION_TYPES: {
    BOOKING_SET: 'BOOKING_SET',
    BOOKING_UPDATE: 'BOOKING_UPDATE',
  },
  REGEX: {
    CCBRAND_REGEX: {
      VISA: '^4[0-9]{12}(?:[0-9]{3})?$',
      AMEX: '^3[47][0-9]{13}$',
      MASTERCARD: '^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$',
    },
    NUMBER_INPUT: /^(\s*|\d+)$/,
  },
} as const;
