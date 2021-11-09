import { getCCBrandName, luhnCheck } from './payment';

/*
  All credit card numbers are fake and were taken from a service "Adyen"
  url: https://docs.adyen.com/development-resources/test-cards/test-card-numbers
*/

describe('Test Payment methods', () => {
  describe('getCCBrandName', () => {
    it('should return "mastercard" with correct cc number', () => {
      expect(getCCBrandName('5555341244441115')).toEqual('mastercard');
      expect(getCCBrandName('2222410740360010')).toEqual('mastercard');
      expect(getCCBrandName('5100060000000002')).toEqual('mastercard');
    });

    it('should return "amex" with correct cc number', () => {
      expect(getCCBrandName('370000000000002')).toEqual('amex');
      expect(getCCBrandName('370000000100018')).toEqual('amex');
    });

    it('should return "mastercard" with correct cc number', () => {
      expect(getCCBrandName('4111111145551142')).toEqual('visa');
      expect(getCCBrandName('4988438843884305')).toEqual('visa');
      expect(getCCBrandName('4977949494949497')).toEqual('visa');
    });

    it('should return null if cc number is incorrect or doesnt match any pattern', () => {
      expect(getCCBrandName('4111')).toEqual(null);
      expect(getCCBrandName('4988438843884305513513513')).toEqual(null);
      expect(getCCBrandName('1111111111111111')).toEqual(null);
    });
  });

  describe('luhnCheck', () => {
    it('should return true for mastercard cards with correct cc number', () => {
      expect(luhnCheck('5555341244441115')).toBeTruthy();
      expect(luhnCheck('2222410740360010')).toBeTruthy();
      expect(luhnCheck('5100060000000002')).toBeTruthy();
    });

    it('should return true for amex cards with correct cc number', () => {
      expect(luhnCheck('370000000000002')).toBeTruthy();
      expect(getCCBrandName('370000000100018')).toBeTruthy();
    });

    it('should return true for visa cards with correct cc number', () => {
      expect(getCCBrandName('4111111145551142')).toBeTruthy();
      expect(getCCBrandName('4988438843884305')).toBeTruthy();
      expect(getCCBrandName('4977949494949497')).toBeTruthy();
    });

    it('should return false for incorrect correct cc number', () => {
      expect(getCCBrandName('4111')).toBeFalsy();
      expect(getCCBrandName('4988438843884305513513513')).toBeFalsy();
      expect(getCCBrandName('1111111111111111')).toBeFalsy();
    });
  });
});
