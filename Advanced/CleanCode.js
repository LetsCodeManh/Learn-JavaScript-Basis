/* ----------------------------------------------------
1. Clean Code Basisc

Writing code that is easy to read, understand and maintain.
*/

// Example 1: Clear and Descriptive Naming
// Bad example
function c(a) {
  return Math.cos(a);
}

// Good example
function calculateCosine(angleInRadians) {
  return Math.cos(angleInRadians);
}

// Example 2: Consistent Formatting
// Bad example
function someFunction(){
  var x=3;
  var y=4;
  return x + y;
  }
  
// Good example
function someFunction() {
  const x = 3;
  const y = 4;
  return x + y;
}

/* ----------------------------------------------------
2. Code Order

Writing code in a logical order that makes sense to the reader.
*/

// Example 1: Logical Order
// Bad example
function calculateRectangleArea(width, height) {
  const area = width * height;
  return area;
}

function printRectangleArea(width, height) {
  const area = calculateRectangleArea(width, height);
  console.log(`The area of the rectangle is ${area}`);
}

// Good example
function calculateRectangleArea(width, height) {
  const area = width * height;
  return area;
}

function printRectangleArea(width, height) {
  const area = calculateRectangleArea(width, height);
  console.log(`The area of the rectangle is ${area}`);
}

// Example 2: Imports at the Top
// Bad example
function someFunction() {
  const lodash = require('lodash');
  lodash.someMethod();
}

// Good example
import lodash from 'lodash';

function someFunction() {
  lodash.someMethod();
}

/* ----------------------------------------------------
3. When To Use Comments

Using comments to explain complex code or to document the code's behavior.
*/

// Example 1: Explain Why
// Bad example
function calculateSquareArea(side) {
  return side * side; // Multiply side by side to get the area
}

// Good example
function calculateSquareArea(side) {
  // The formula for the area of a square is side * side
  return side * side;
}

// Example 2: Document Complex Logic
// Bad example
function someFunction(a, b, c, d) {
  // Complicated logic involving a, b, c, and d
  return result;
}

// Good example
function someFunction(a, b, c, d) {
  // This function does XYZ, using a, b, c, and d as inputs.
  // The logic is complicated, but it can be broken down into the following steps:
  // Step 1: do X with a and b
  // Step 2: do Y with c and d
  // Step 3: do Z with the results of Step 1 and Step 2
  return result;
}

/* ----------------------------------------------------
4. Coupling And Cohesion

Coupling refers to how much one module or component depends on another. The goal is to minimize coupling to make code more modular and easier to maintain.

Cohesion refers to how much a single module or component is focused on a single responsibility. The goal is to maximize cohesion to make code more readable and easier to reason about.
*/

// Example:
// High coupling and low cohesion
function calculateTotal(order) {
  const taxRate = 0.15;
  const shippingCost = 10;
  const total = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return total + total * taxRate + shippingCost;
}

// Low coupling and high cohesion
function calculateTotal(order, taxRate, shippingCost) {
  const subtotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const shipping = shippingCost;
  const total = subtotal + tax + shipping;
  return total;
}

/*
The first example has high coupling because it depends on hard-coded tax and shipping values that are defined outside of the function. It also has low cohesion because it is calculating the total, tax, and shipping all in one function.

The second example has low coupling because it takes in tax and shipping as parameters, so they can be easily changed without affecting the function. It also has high cohesion because it separates the responsibility of calculating the total, tax, and shipping into separate variables and expressions.
*/

/* ----------------------------------------------------
5. Facade Pattern

The Facade pattern is a design pattern that provides a simplified interface to a larger and more complex system.
*/

// Example:
class UserService {
  async getUser(id) {
    // complex logic to retrieve user from database
  }

  async updateUser(id, data) {
    // complex logic to update user in database
  }

  async deleteUser(id) {
    // complex logic to delete user from database
  }
}

class UserFacade {
  constructor() {
    this.userService = new UserService();
  }

  async getUser(id) {
    const user = await this.userService.getUser(id);
    // simplify user object by removing unnecessary properties
    return { id: user.id, name: user.name, email: user.email };
  }

  async updateUser(id, data) {
    // validate user data before updating
    if (!data.name || !data.email) {
      throw new Error('Name and email are required');
    }
    await this.userService.updateUser(id, data);
  }

  async deleteUser(id) {
    await this.userService.deleteUser(id);
    // perform other cleanup tasks related to deleting a user
  }
}

/*
In this example, the UserService class contains complex logic for retrieving, updating, and deleting a user from a database. The UserFacade class provides a simplified interface to this functionality by exposing only the necessary properties and performing additional validation or cleanup tasks as needed.
*/

/* ----------------------------------------------------
6. Guard Clauses

Guard clauses are used to handle special cases or error scenarios early in a function to avoid nesting the main logic.
*/

// Example:
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  return a / b;
}

/*
In this example, we're using a guard clause to check if the divisor b is zero. If it is, we throw an error immediately instead of proceeding with the division operation.
*/

/* ----------------------------------------------------
7. Composition Vs Inheritance

Composition and inheritance are two ways to achieve code reuse in object-oriented programming. Composition is preferred over inheritance in most cases because it allows for greater flexibility and modularity. 
*/

// Example:
// Composition example
function withLogging(obj) {
  obj.log = function(msg) {
    console.log(msg);
  };
  return obj;
}

const user = withLogging({
  name: 'John Doe',
  age: 30
});

user.log('User created');

// Inheritance example
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog('Fido', 'Labrador');
console.log(dog.name, dog.breed);

/*
In this example, we're using composition to add a logging feature to an object. We create a withLogging function that takes an object and adds a log method to it. We then use this function to add logging to a user object.

In the second example, we're using inheritance to create a Dog class that extends an Animal class. This allows the Dog class to inherit the properties and methods of the Animal class, such as the name property.
*/

/* ----------------------------------------------------
8. Don't Repeat Yourself

The DRY (Don't Repeat Yourself) principle states that duplication in code should be avoided. 
*/

// Example:
// Without DRY
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

// With DRY
function greet(name, greeting) {
  console.log(`${greeting}, ${name}!`);
}

greet('John', 'Hello');
greet('Jane', 'Goodbye');


/*
In this example, we have two functions (greetUser and sayGoodbye) that are very similar in structure. We can avoid duplication by creating a single greet function that takes both the name and the greeting as arguments.
*/

/* ----------------------------------------------------
9. Mini Project

- Color Game:
The Color Game is a popular web development project that involves creating a simple game that challenges the user to match a given color to its RGB value. 
*/