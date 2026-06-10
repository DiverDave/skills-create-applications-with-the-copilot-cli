#!/usr/bin/env node

/**
 * Calculator - A CLI and library for arithmetic operations
 * 
 * Supported Operations:
 * - Addition (add): a + b
 * - Subtraction (subtract): a - b
 * - Multiplication (multiply): a × b
 * - Division (divide): a ÷ b
 * - Modulo (modulo): a % b (remainder of division)
 * - Exponentiation (power): a ^ b (a raised to power b)
 * - Square root (sqrt): √a (square root of a)
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo operation (remainder of division)
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero divisor');
  }
  return a % b;
}

// Exponentiation operation (power)
function power(a, b) {
  return Math.pow(a, b);
}

// Square root operation
function sqrt(a) {
  if (a < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(a);
}

// Parse command-line arguments and execute calculation
function main() {
  const args = process.argv.slice(2);

  // Check minimum arguments for two-operand operations
  const twoOperandOps = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power'];
  const oneOperandOps = ['sqrt'];

  if (args.length < 2 || (twoOperandOps.includes(args[0].toLowerCase()) && args.length < 3)) {
    console.error('Usage: node calculator.js <operation> <number1> [number2]');
    console.error('Two-operand operations: add, subtract, multiply, divide, modulo, power');
    console.error('One-operand operations: sqrt');
    console.error('Examples:');
    console.error('  node calculator.js add 5 3');
    console.error('  node calculator.js power 2 8');
    console.error('  node calculator.js sqrt 16');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const num1 = parseFloat(args[1]);
  let num2;

  if (twoOperandOps.includes(operation)) {
    num2 = parseFloat(args[2]);
  }

  // Validate numeric input
  if (isNaN(num1)) {
    console.error('Error: First argument must be a valid number');
    process.exit(1);
  }

  if (twoOperandOps.includes(operation) && isNaN(num2)) {
    console.error('Error: Second argument must be a valid number');
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case 'add':
        result = add(num1, num2);
        break;
      case 'subtract':
        result = subtract(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        result = divide(num1, num2);
        break;
      case 'modulo':
        result = modulo(num1, num2);
        break;
      case 'power':
        result = power(num1, num2);
        break;
      case 'sqrt':
        result = sqrt(num1);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Supported operations: add, subtract, multiply, divide, modulo, power, sqrt');
        process.exit(1);
    }

    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for use as a library
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  sqrt,
};

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}
