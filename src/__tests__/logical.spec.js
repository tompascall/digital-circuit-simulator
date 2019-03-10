const { not, and } = require('../logical');

describe('logical', () => {
  describe('not', () => {
    it('should invert signal', () => {
      expect(not(0)).toBe(1);
      expect(not(1)).toBe(0);
    });
  });

  describe('and', () => {
    it('should return 1 if all input is 1', () => {
      expect(and(1, 1)).toBe(1);
    });

    it('should return 0 if any of inputs is 1', () => {
      expect(and(1, 0)).toBe(0);
      expect(and(0, 1)).toBe(0);
      expect(and(0, 0)).toBe(0);
    });
  });
});