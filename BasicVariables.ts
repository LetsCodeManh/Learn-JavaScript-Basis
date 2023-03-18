/* ----------------------------------------------------
1. Variable

A variable in JavaScript is used to store a value that can be changed later in the program. It is declared using the "var", "let", or "const" keyword followed by the name of the variable.
*/

// Example:
let myName = "Manh";
const publishDate = "2023-03-18";
var date = new Date(publishDate);

// console.log(date);
// console.log(publishDate);

/* ----------------------------------------------------
2. Number Type

The number type in JavaScript represents numeric values, including integers and floating-point numbers. It also includes special numeric valiues such as "Infinity", "-Infinity", and "NaN" (Not a Number).
*/

// Example:

let num = 10;
let floatNum = 3.14;
let infinityNum = Infinity;
let nanNum = NaN;

// console.log(num);
// console.log(floatNum);
// console.log(infinityNum);
// console.log(nanNum);

/* ----------------------------------------------------
3. String Type

The string type in JavaScript represents textual data enclosed in quotes (single or double or backticks).
*/

// Example:

// prettier-ignore
let singleQuotes = 'single Quotes';
let doubleQuotes = "double Quotes";
let backticks = `this number is ${num}`;

// console.log(singleQuotes);
// console.log(doubleQuotes);
// console.log(newMessage);

/* ----------------------------------------------------
4. Boolean Type

The boolean type in JavaScript represents a logical value of either "true" or "false". It is often used in conditional statements and loops to control the flow of the program.
*/

// Example:

let isTrue = true;
let isFalse = false;

// console.log(isTrue);
// console.log(isFalse);

/* ----------------------------------------------------
5. Null and Undefined Type

The "null" and "undefined" types in JavaScript represent absence of value. "null" is assigned to a variable when the value is intentionally empty, while "undefined" is assigned when the value has not been initialized.
*/

// Example:

let emptyValue = null;
let notInitialized = undefined;

// console.log(emptyValue);
// console.log(notInitialized);

/* ----------------------------------------------------
6. Variable Comparison

In JavaScript, variables can be compared using comparison operators such as "==", "!=", "===", "!==", ">", "<", ">=", and "<=". The "==" and "!=" operators perform type coercion, while the "===" and "!==" operators do not.
*/

// Example:

let numOne = 10;
let numTwo = "10";

// true (type coercion)
// console.log(numOne == numTwo);

// false (no type coercion)
// console.log(numOne === numTwo);

// true (logical operators)
// console.log(numOne > 5 && numTwo < 20);

/* ----------------------------------------------------
7. Garbage Collection

JavaScript has automatic garbage collection, which means that it frees up memory used by objects that are no longer needed in the program. This is done by the JavaScript engine periodically checking which objects are no longer being referended by the program and then removing them from memory.
*/

/* ----------------------------------------------------
8. Comments

Comments in JavaScript are used to provide explanatory text that is ingnored by the JavaScript engine when the code is run. They can be used to explain the purpose of the code, provide context, or make notes for future reference. There are two types of comments in JavaScript.
*/

// Example:

// this is a single-line comment

/*
This is a multi-line
comment that can span
across multiple lines
*/
