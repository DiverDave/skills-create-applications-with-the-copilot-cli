#!/usr/bin/env node

/**
 * Calculator - A CLI and library for basic arithmetic operations
 * 
 * Supported Operations:
 * - Addition (add): a + b
 * - Subtraction (subtract): a - b
 * - Multiplication (multiply): a × b
 * - Division (divide): a ÷ b
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

// Parse command-line arguments and execute calculation
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error('Usage: node calculator.js <operation> <number1> <number2>');
    console.error('Operations: add, subtract, multiply, divide');
    console.error('Example: node calculator.js add 5 3');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  // Validate numeric input
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
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
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Supported operations: add, subtract, multiply, divide');
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
};

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}
