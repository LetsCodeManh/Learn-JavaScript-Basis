/* ----------------------------------------------------
1. Normal Functions

Normal functions in JavaScript are defined using the "function" keyword followed by the function name, parameters (if any), and the function body
*/

// Example:
function greetOne(name) {
  console.log(`Hello ${name}`);
}

// greetOne("Manh");
// Output: Hello Manh

/* ----------------------------------------------------
2. Passing Functions as Arguments

In JavaScript, functions can be passed as arguments to other functions. This allows for more flexibility and abstraction in programming.
*/

// Example:
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operators) {
  return operators(a, b);
}

// console.log(calculate(2, 3, add));
// console.log(calculate(2, 3, multiply));

/* ----------------------------------------------------
3. Arrow Functions

Arrow functions are a shorthand way to define functions in JavaScript. They are defined using the "=>" syntax, and do not have their own "this" context.
*/

// Example:
let greetTwo = (name) => {
  console.log(`Hello ${name}`);
};

// greetTwo("Manh");
// Output: Hello Manh

/* ----------------------------------------------------
4. Stack Trace and Call Stack

The call stack is a data structure used by JavaScript to keep track of function calls. When a functions is called, it is added to the top of the call stack, and when it returns, it is removed from the top of the call stack.

The stack trace is a list of function calls that shows the order in which they were called. It is used to debug errors and understand the flow of the program.
*/

/* ----------------------------------------------------
5. Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their respective scopes. This means that variables and functions can be used before they are declared. However only the declarations are hoisted, not the values.
*/

// Example:
// console.log(x);
// Output: undefined
let x = 10;

// hello();
// Output: "Hello World"
function hello() {
  console.log("Hello World");
}

/* ----------------------------------------------------
6. Scoping

Scoping in JavaScript refers to the visibility of variables and functions within a program. Variables and functions can be either global (visible throughout the entire program) or local (visible only within a particular function or block)
*/

// Example:
let newVariable = 10; // Global variable

function foo() {
  let newVariable = 20; // Local variable
  console.log(newVariable); // Output: 20
}

// foo();
// Output: 20

// console.log(x);
// Output: 10

/* ----------------------------------------------------
7. Closures

Closures in JavaScript are created when a function returns another function. The inner function has access to the variables and parameters of the outer function, even after the outer function has returned. This allows for powerful and flexible programming patterns
*/

// Example:
function newAdd(a) {
  return function (b) {
    return a + b;
  };
}

let addFive = newAdd(5);
// console.log(addFive(3));
// console.log(newAdd(5)(3))
