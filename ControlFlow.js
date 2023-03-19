/* ----------------------------------------------------
1. If

The "if" statement is usde to execute a block of code only if a certain condition is true.
*/

// Example:
let x = 10;

// if (x > 5) {
//   console.log("x is greater than 5")
// }

/* ----------------------------------------------------
2. Ternary Operator

The ternary operator is a shorthand for an "if" statement with only one statement in each branch
*/

// Example:
let y = 5;
let result = y > 5 ? "x is greater than 5" : "y is less than or equal to 5";
// console.log(result);

/* ----------------------------------------------------
3. Switch Statement

The "switch" statement is used to execute different blocks of code based on different conditions.
*/

// Example:
let day = "Sunday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednessday":
//     console.log("Today is Wednessday");
//     break;
//   default:
//     console.log("Today is a great day");
// }

/* ----------------------------------------------------
4. For Loop

The "for" loop is used to execute a block of code a specific number of times.
*/

// Example:
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

/* ----------------------------------------------------
5. While Loop

The "while" loop is used to execute a block of code as long as a certain condition is true.
*/

// Example:
let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

/* ----------------------------------------------------
6. Recursion

Recursion is a technique where a function calls itself to solve a problem.
*/

// Example:
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(4));
// Output: 24 (for 4)

/* ----------------------------------------------------
7. Short Circuit Evaluation

Short circuit evaluation is a technique where a boolean expression is evaluated only until the result can be determinded.
*/

// Example:
x = 10;

if (x > 5 || y > 10) {
  console.log(x);
  console.log(y);
}

/* ----------------------------------------------------
8. Mini Project

- Midi Piano
- Quiz App
- Form Validation
*/