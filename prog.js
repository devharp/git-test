/**
 * Initializes the application.
 * 
 * @returns { void }
 */
function main() {
  console.log('Following are the operations:');
  console.log('Addition of one and two.', add(1, 2));
}

/**
 * Function is used to perform subtraction operation
 * 
 * @param { number } x - First number 
 * @param { number } y - Second number
 * @returns { number } - Returns a subtraction of two numbers
 */
function subtract(x, y) {
  return x - y;
}

/**
 * Function is used to perform addition operation
 * 
 * @param { number } x - First number 
 * @param { number } y - Second number
 * @returns { number } - Returns a addition of two numbers
 */
function add(x,y) {
  return x+y;
}

// Call the main function to initialize the application
main();
