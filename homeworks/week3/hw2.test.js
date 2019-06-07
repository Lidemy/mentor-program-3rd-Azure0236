const alphaSwap = require('./hw2');

describe('hw2', () => {
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  it('should return correct answer when str = aBcd', () => {
    expect(alphaSwap('aBcd')).toBe('AbCD');
  });
  it('should return correct answer when str =""', () => {
    expect(alphaSwap('""')).toBe('""');
  });
  it('should return correct answer when str =123', () => {
    expect(alphaSwap('123')).toBe('123');
  });
});
