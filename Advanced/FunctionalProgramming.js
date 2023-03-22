/* ----------------------------------------------------
1. Functional Programming

Functional programming is a programming paradigm that focuses on the use of functions to solve problems. It emphasizes the use of pure functions, immutability, and higher order functions.
*/

// Example:
// An example of functional programming using the map method
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

/* ----------------------------------------------------
2. Pure Functions

A pure function is a function that always returns the same output given the same input and has no side effects. It does not modify any external state, such as global variables, and does not rely on external state that can change.
*/

// Example:
// A pure function that adds two numbers
function add(a, b) {
  return a + b;
}
// console.log(add(2, 3));
// Output: 5

/* ----------------------------------------------------
3. Immutability

Immutability is a concept in functional programming where that state of an object cannot be changed after it has been created. Instead, new objects are created with updated values when changes are needed.
*/

// Example:
// An example of immutability using the concat method
const numbersArray = [1, 2, 3];
const newNumbers = numbersArray.concat(4);
// console.log(numbersArray);
// Output: [1, 2, 3]
// console.log(newNumbers);
// Output: [1, 2, 3, 4]

/* ----------------------------------------------------
4. Higher Order Functions

A higher order function is a function that takes one or more functions as arguements and/or returns a function as its result. It allows for a more declarative and composable code.
*/

// Example:
// A higher order function that takes a function as an argument
function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const newNumbersArray = [1, 2, 3, 4, 5];
const squareNumbers = applyOperation(newNumbersArray, (num) => num * num);
// console.log(squareNumbers);
// Output: [1, 4, 9, 16, 25]

/* ----------------------------------------------------
5. Function Composition

A higher order function is a function that takes one or more functions as arguements and/or returns a function as its result. It allows for a more declarative and composable code.
*/

// Example:
// An example of function composition using the pipe method
const addNumber = (x) => x + 1;
const multiplyNumber = (x) => x * 2;
const subtractNumber = (x) => x - 3;

const result = subtractNumber(multiplyNumber(addNumber(2)));
// console.log(result);
// Output: 3

/* ----------------------------------------------------
6. Currying

Currying is a technique of transforming a function that takes multiple arguments into a function that takes a single argument and returns a new function that takes the remaining arugments.
*/

// Example:
// An example of currying using a function that adds two numbers
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
// console.log(add5(3));
// Output: 8

/* ----------------------------------------------------
7. Mini Project


- Minesweeper Functional Programming Project:
A project that involves building the game Minesweeper using functional programming principles, such as pure functions, immutability, higher order functions, and function composition.
*/
