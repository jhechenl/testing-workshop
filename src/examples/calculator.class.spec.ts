import { Calculator } from './calculator.class';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(async () => {
    calculator = new Calculator();
  });

  it('should be defined', () => {
    expect(calculator).toBeDefined();
  });

  describe('add', () => {
    it('should return result of add', () => {
      expect(calculator.add(5, 7)).toBe(12);
      expect(calculator.add(5, null)).toBe(5);
    });
  });

});
