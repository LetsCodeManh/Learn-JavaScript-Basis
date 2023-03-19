/* ----------------------------------------------------
1. ES6 Modules

ES6 Modules is a standard for organizing and sharing JavaScript code. It allows you to create reusable modules that can be imported into other files using the "import" statement.
*/

// Example:
// file: math.js
// export function add(a, b) {
//   return a + b;
// }

// file: main.js
// import { add } from "./math.js";
// console.log(add(2, 3));
// Output: 5

/* ----------------------------------------------------
2. Node Modules

Node.js is a JavaScript runtime environment that allows you to run JavaScript code outsied of a web browser. Node.js uses a module system called CommonJS, which allows you to export and import modules using the "require" function.
*/

// Example:
// file: math.js
// function add(a, b) {
//   return a + b;
// }
// module.exports = { add }

// file: main.js
// const { add } = require("./math.js");
// console.log(add(2, 3));
// Output: 5

/* ----------------------------------------------------
3. NPM

NPM is a package manager for Node.js, which allows you to install and manage third-party libraries and packages. You can install packages using the "npm install" command, and manage dependencies using the "package.json" file.
*/

// Example:
// file: package.json
// {
//   "name": "my-app",
//   "version": "1.0.0",
//   "dependencies": {
//     "lodash": "^4.17.21"
//   }
// }

// file: main.js
// import _ from "lodash"
// console.log(_.add(2,3))
// Output: 5

/* ----------------------------------------------------
3. Parcel

Parcel us a web application bundler that can automatically optimize and bundle your code for production. It supports modern web features like ES6 modules, async/await, and hot module replacement.
*/

/* ----------------------------------------------------
4. Mini Project

- Date Picker
A date picker is a user interface element that allows users to select a date from a calendar. There are many libraries and plugins available for implementing date picjkers in web applications, sucha as jQuery UI Datepicker, Flatpickr, and Pikaday.

- Shopping Cart:
A shopping cart is a common feature in e-commerce web applications that allows users to add products to a virtual cart, and then proceed to checkout to purchase those products. A shopping cart typically involves managing product quantities, calculating subtotals and totals, and storing cart data in a session or database.
*/

// Example for Shopping Cart:
// Create a new cart
const cart = [];

// Add a product to the cart
function addToCart(product, quantity) {
  const item = { product, quantity };
  cart.push(item);
  console.log(`Added ${quantity} ${product}(s) to the cart`);
}

// Remove a product from the cart
function removeFromCart(product) {
  const index = cart.findIndex(item => item.product === product);
  if (index !== -1) {
    const item = cart.splice(index, 1)[0];
    console.log(`Removed ${item.quantity} ${item.product}(s) from the cart`);
  }
}

// Calculate the total cost of the cart
function calculateTotal() {
  const total = cart.reduce((sum, item) => {
    return sum + (item.quantity * item.product.price);
  }, 0);
  console.log(`Total cost: $${total.toFixed(2)}`);
}

// Example usage
const product1 = { name: 'Widget', price: 9.99 };
const product2 = { name: 'Gadget', price: 19.99 };
addToCart(product1, 2);
addToCart(product2, 1);
calculateTotal();
removeFromCart(product1);
calculateTotal();
