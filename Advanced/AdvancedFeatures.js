/* ----------------------------------------------------
1. Destructuring

Destructuring is a JavaScript feature that allows you to extract values from arrays or objects and assign them to variables in a concise and easy-to-read syntax. This can be useful when working with complex data structures or when you want to extract specific properties from an object or an array.
*/

// Example:
// Destructuring an array
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
// console.log(first, second);
// Output: 1 2

// Destructuring an object
const person = { name: "John", age: 30 };
const { name, age } = person;
// console.log(name, age);
// Output: John 30

/* ----------------------------------------------------
2. Spread and Rest Operators

The spread operator allows you to expand an array or an object into individual elements, while the rest operator allows you to collect multiple arguments into an array. These operators can be useful when working with functions that expect a variable number of arguments or when merging multiple arrays or objects.
*/

// Example:
// Using the spread operator to concatenate arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];
// console.log(allNumbers);
// Output: [1, 2, 3, 4, 5, 6]

// Using the rest operator to collect arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3));
// Output: 6

/* ----------------------------------------------------
3. Enhanced Object Literals

Enhanced object literals are a set of features that allow you to create more concise and expressive object literals. This includes shorthand notation for object properties, computed property names, and methods.
*/

// Example:
// Shorthand property notation
const myName = "Manh";
const myAge = 30;
const myPerson = { myName, myAge };
// console.log(myPerson);
// Output: { name: 'John', age: 30 }

// Computed property names
const propertyName = "name";
const newPerson = {
  [propertyName]: "Moon",
  age: 30,
};
// console.log(newPerson);
// Output: { name: 'John', age: 30 }

// Method definition shorthand
const anotherPerson = {
  name: "John",
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
// anotherPerson.sayHello();
// Output: "Hello, my name is John"

/* ----------------------------------------------------
4. Default Paramenters

Default parameters allow you to specify default values for function parameters in case they are not provided by the caller. This can simplify your code and make your functions more robust.
*/

// Example:
function greet(name = "world") {
  console.log(`Hello, ${name}!`);
}
// greet();
// Output: "Hello, world!"
// greet("Manh");
// Output: "Hello, Manh!"

/* ----------------------------------------------------
5. Null Coallescing

Null coalescing is a JavaScript operator that allows you to specify a default value for a variable or expression in case it is null or undefined. This can be useful when you want to avoid errors or when you want to provide a fallback value for optional parameters.
*/

// Example:
const newName = null;
const displayName = newName ?? "Anonymous";
// console.log(displayName);
// Output: "Anonymous"

const newAge = undefined;
const displayAge = age ?? 18;
// console.log(displayAge);
// Output: 18

/* ----------------------------------------------------
6. Optional Chaining

The optional chaining operator (`?.`) allows you to access nested properties of an object without checking if each property in the chain exists. If any property in the chain is undefined, the entire experession will evaluate to undefined.
*/

// Example:
const anotherExample = {
  name: "Manh",
  address: {
    city: "Munich",
    state: "Bavaria",
  },
};
// console.log(anotherExample?.address?.zipCode);
// Output: undefined
// console.log(anotherExample?.address?.city);
// Output: Munich

/* ----------------------------------------------------
7. Maps

The "Map" object is a colleciton of key-value pairs where both the keys and values can be of any type.
*/

// Example:
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

// console.log(map.get("key1"));
// Output: "value1"

// console.log(map.has("key3"));
// Output: false

// console.log(map)
// Output: Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

/* ----------------------------------------------------
8. Sets

The "Set" object is a colleciton of unique values where each value can be of any type.
*/

// Example:
const set = new Set();
set.add("value1");
set.add("value2");

// console.log(set.has("value1"));
// Output: true

// console.log(set.size);
// Output: 2

// console.log(set);
// Output: Set(2) { 'value1', 'value2' }

/* ----------------------------------------------------
9. Symbols

A "Symbol" is a unique and immutable data type that can be used as an object property key.
*/

// Example:
const sym = Symbol("description");
const obj = { [sym]: "value" };

// console.log(obj[sym]);
// Output: "value"

// console.log(obj);
// Output: { [Symbol(description)]: 'value' }

/* ----------------------------------------------------
10. Generators and Iterators

Generators are functions that can be paused and resumed later, allowing you to create iterable object using the "yield" keyword. Iterators are objects that have a "next()" method that returns the next value in a sequence. 
*/

// Example:
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generator();

// console.log(iterator.next());
// Output: { value: 1, done: false }

// console.log(iterator.next());
// Output: { value: 2, done: false }

// console.log(iterator.next());
// Output: { value: 3, done: false }

// console.log(iterator.next());
// Output: { value: undefined, done: true }

/* ----------------------------------------------------
11. Object Getters and Setters

Getters and setters are special methods that allow you to define how properties are accessed and modified on an object.
*/

// Example:
const personOne = {
  firstName: "Midnight",
  lastName: "Scralet",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

// console.log(personOne.fullName);
// Output: "Midnight Scralet"

personOne.fullName = "Sunrise Doom";

// console.log(personOne.firstName);
// Output: "Sunrise"

// console.log(personOne.lastName);
// Output: "Doom"

// console.log(personOne.fullName);
// Output: "Sunrise Doom"

/* ----------------------------------------------------
12. Bind, Call, and Apply

These are methods that allow you to set the "this" value when calling a function. "bind" returns a new function with the "this" value set, while "call()" and "apply()" call the function with the "this" value set.
*/

// Example:
const person1 = { name: "John" };
const person2 = { name: "Jane" };

function sayHello() {
  console.log(`Hello, my name is ${this.name}`);
}

const boundFn = sayHello.bind(person1);
boundFn(); 
// Output: "Hello, my name is John"

sayHello.call(person2); 
// Output: "Hello, my name is Jane"

sayHello.apply(person2); 
// Output: "Hello, my name is Jane"

/* ----------------------------------------------------
13. Mini Project

- Minesweeper Project

- Math Solver
*/