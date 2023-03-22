/* ----------------------------------------------------
1. Prototypes

In JavaScript, every object has a prototype. A prototype is an object that provides properties and methods that are inherited by the object. Prototypal inheritance is one of the core concepts in JavaScript. When you create an object in JavaScript, it is linked to a prototype object, which provides it with a set of default properties and methods.
*/

// Example:
// Create a new object using an object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Access the fullName property using dot notation
// console.log(person.fullName());
// Output: "John Doe"

// Access the __proto__ property to see the object's prototype
// console.log(person.__proto__);
// Output: Object.prototype

/* ----------------------------------------------------
2. Classes

ES6 introduced the class syntax to JavaScript, which allows developers to write object-oriented code more easily. A class is a blueprint for creating objects that share a set of properties and methods. In other words, a class is like a template for creating objects.
*/

// Example:
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving a ${this.year} ${this.make} ${this.model}`);
  }
}

const myCar = new Car("Honda", "Civic", 2020);
// myCar.drive();
// Output: "Driving a 2020 Honda Civic"

/* ----------------------------------------------------
3. Class Inheritance

Inheritance is a fundamental concept in object-oriented programming that allows you to create new classes based on existing classes. In JavaScript, you can use the "extends" keyword to create a subclass that inherits from a superclass.
*/

// Example:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Rufus");
// myDog.speak();
// Output: "Rufus barks."

/* ----------------------------------------------------
4. Public, Private, and Protected Properties

In object-oriented programming, it's often desirable to encapsulate data and functionality to protect it from accidental modification or exposure. In JavaScript, you can use various techniques to create public, private, and protected properties and methods.

Public properties and methods are accessible from outsied the class, private properties and methods are only accessible from inside the class, and protected properties and methods are only accessible from inside the class and its subclasses.
*/

// Example:
class Person {
  #age = 30; // private property
  _firstName = "John"; // protected property
  lastName = "Doe"; // public property

  get fullName() {
    return `${this._firstName} ${this.lastName}`;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    this.#age = value;
  }
}

const newPerson = new Person();
// console.log(newPerson.fullName);
// Output: "John Doe"
// console.log(newPerson.age);
// Output: 30
person.age = 40;
// console.log(newPerson.age);
// Output: 40

/* ----------------------------------------------------
5. Mini Project


- ATM CLI Project:
An ATM CLI (Command-Line Interface) project is a great way to practice your JavaScript skills. The project involves creating a simple command-line interface for an ATM machine. Users should be able to enter their account number and PIN, check their account balance, withdraw money, and deposit money.

- Calculator Project Introduction:
A calculator project is a classis programming exercise that can be used to practice various programming concepts, including functions, user input, and arithmetic operations. The project involves creating a calculator that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. More advanced calculator projects may include mroe compley operations, such as exponentiation, logarithms, and trigonometric functions.
*/