/**
 * Unit Tests for Calculator Functions
 * Tests all arithmetic operations: addition, subtraction, multiplication, division
 * Includes edge cases and error handling
 */

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive integers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add from example: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
      expect(add(-10, 4)).toBe(-6);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
      expect(add(1.1, 2.2)).toBeCloseTo(3.3, 5);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive integers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract from example: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(-3, -5)).toBe(2);
    });

    test('should subtract positive and negative numbers', () => {
      expect(subtract(10, -5)).toBe(15);
      expect(subtract(-10, 5)).toBe(-15);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 4.2)).toBeCloseTo(6.3, 5);
      expect(subtract(5.5, 5.5)).toBe(0);
    });

    test('should subtract zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive integers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply from example: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 100)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 100)).toBe(100);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 2.5)).toBeCloseTo(3.75, 5);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive integers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide from example: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 4)).toBe(2.5);
      expect(divide(15, 3)).toBe(5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, 2)).toBe(-5);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2)).toBeCloseTo(5.25, 5);
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should divide by one', () => {
      expect(divide(5, 1)).toBe(5);
      expect(divide(100, 1)).toBe(100);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
      expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
      expect(divide(0, -3)).toBe(-0);
    });

    test('should handle very small divisions', () => {
      expect(divide(1, 2)).toBe(0.5);
      expect(divide(1, 1000)).toBeCloseTo(0.001, 5);
    });
  });

  describe('Mixed Operations', () => {
    test('should perform all operations on example set', () => {
      expect(add(2, 3)).toBe(5);
      expect(subtract(10, 4)).toBe(6);
      expect(multiply(45, 2)).toBe(90);
      expect(divide(20, 5)).toBe(4);
    });

    test('should chain operations', () => {
      let result = add(5, 5);      // 10
      result = multiply(result, 2); // 20
      result = divide(result, 4);   // 5
      result = subtract(result, 2); // 3
      expect(result).toBe(3);
    });
  });
});
