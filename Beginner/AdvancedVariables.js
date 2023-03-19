/* ----------------------------------------------------
1. Advanced Variables

In addition to the basic variable types (number, string, boolean, null and undefined), JavaScript also supports more complex types like arrays and objects. These variables can store multiple values or key-value pairs.
*/

/* ----------------------------------------------------
2. Const

"const" is a keyword in JavaScript that is used to declare a constant variable, whose value cannot be changed once it has been assigned.
*/

// Example:
const PI = 3.14;
// PI = 3 // error

// console.log(PI);

/* ----------------------------------------------------
3. Var & Let

"var" and "let" are keywords in JavaScript that is used to declare a variable. Unlike "const", the value of "var" and "let" variable can be reassigned later in the code. 
*/

// Example:
var firstName = "Manh";
// console.log(firstName)
firstName = "Moon";
// console.log(firstName)

let secondName = "Nguyen";
// console.log(secondName)
secondName = "Light";
// console.log(secondName)
// console.log(firstName + secondName)

/* ----------------------------------------------------
4. Type Coercion

Type coercion is the process of converting one data type to another. In JavaScript, type coercion can occur implicitly (automatically) or explicitly (manually).
*/

// Example:
// console.log("5" + 1)
// Output: 51

// console.log("5" - 1)
// Output: 4

// console.log("Manh" + 1)
// Output: Manh1

// console.log("Manh" - 1)
// Output: NaN

/* ----------------------------------------------------
5. == vs ===

The "==" operator checks for equality between two values, but it performs type coercion if necessary. The "===" operator checks for equality betwee two values, but it does not perform type coercion.
*/

// Example:
// console.log(5 == "5");
// Output: true

// console.log(5 === "5");
// Output: false

/* ----------------------------------------------------
6. NaN

"NaN" is a special value in JavaScript that stand for "Not a Number". It is returned when a mathematical operation does not result a meaningful value
*/

// Example:
// console.log(0 / 0)
// Output: NaN

/* ----------------------------------------------------
7. Arrays

Arrays in JavaScript are used to store collections of values. They are declared using square brackets "[]" and each value is sperated by a coma.
*/

// Example:
let numbers = [1, 2, 3, 4, 5];
let arraysOfObjects = [{ object: 1 }, { object: 2 }, { object: 3 }];
let arraysOfEverything = [1, "string", { object: 1 }, true];

// console.log(numbers);
// console.log(arraysOfObjects);
// console.log(arraysOfEverything);

/* ----------------------------------------------------
8. Objects

Objects in JavaScript are used to store collection of key-value pairs. They are declared using curly braces "{}" and each key-value pair is separated by a coma.
*/

// Example:
let person = { name: "Manh", age: 24, location: "Germany" };

// console.log(person);

/* ----------------------------------------------------
9. Reference vs Value

In JavaScript, variables can store either a primitive value (like a number or string) or a reference to an object. When a variable stores a primitive value, the value is copied to a new variable when it is assigned or passed as an arguemtn to a function. When a variable stores a reference to an object, the variable stores a pointer to the object in memory, and any changes amde to the object are refleceted in all variables that reference the same object.
*/

// Example:
let a = 10;
let b = a; // b is assigned a copy of the value of a
a = 20;

// console.log(b)
// Output: 10

let objectOne = { name: "Manh" };
let objectTwo = objectOne;
objectOne.name = "Moon";

// console.log(objectTwo.name)
// Output: "Moon"

/* ----------------------------------------------------
10. Array Methods

JavaScript provides many built-in methods for working with arrays, such as "push", "pop", "shift", "unshift", "slice", "splice", "join", "indexOf", "forEach". "map", "filter", "reduce","concat", etc...

All Methods link below:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Example:
let newNumber = [1, 2, 3, 4, 5];

newNumber.push(6);
// console.log(newNumber);
// Output: [1, 2, 3, 4, 5, 6]

let doubleNumber = newNumber.map((num) => num * 2);
// console.log(doubleNumber);
// Output: [ 2, 4, 6, 8, 10, 12 ]

/* ----------------------------------------------------
11. String Template Literals

Template literals are a way to create strings in JavaScript that allow for easy interpolation of variables and expressions. They are denoted by backticks `` and variables and expressions can be embedded inside them using `${}`
*/

// Example:
let newName = "LetCodeManh";
let greeting = `Hello, ${newName}!`;

// console.log(greeting);
// Output: "Hello, LetCodeManh!"

/* ----------------------------------------------------
12. New and This

In JavaScript, the "new" keyword is used to create new objects based on a constructor function. The "this" keyword is used inside the constructor function to refer to the newly created object.
*/

// Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let personOne = new Person("LetsCodeManh", 1);
// console.log(personOne.name);
// Output: LetsCodeManh

// console.log(personOne.age);
// Output: 1
