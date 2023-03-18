/* ----------------------------------------------------
1. Async vs Defer

When loading external scripts in HTML, the "async" and "defer" attributes can be used to control when the scripts are loaded and executed relative to the rest of the page's content.
*/

// Example:
/* 
<p>...content before script</p>

<script defer src=""></script>

<p>...content after script</p>
*/
/* Independent
<script async src=""></script>
*/

/* ----------------------------------------------------
2. Window

The "window" object is a global object that represents the browser window that the JavaScript code is running in. It provides many useful properties and methodes for working with the browser, such as "alert", "prompt", and "confirm".
*/

// Example:
window.alert("Hello World!");

/* ----------------------------------------------------
3. Document

The "document" object represents the web page that the JavaScript code is running in. It provides access to the HTML content of the page and allows for manipulation of the DOM.
*/

// Example:
// <h1 id="headingOne"></h1>

let heading = document.getElementById("headingOne");
heading.innerHTML = "New Heading";

/* ----------------------------------------------------
4. ID and Class Selectors

ID and class selectors are a way to target specific elements in the DOM using CSS selectors. In JavaScript, these selectors can be used with the "getElementById" and "getElementByClassName" methods.
*/

// Example:
// <div id="myId" class="myClass"></div>

let element = document.getElementById("myId");
let elements = document.getElementsByClassName("myClass");

/* ----------------------------------------------------
5. Query Selectors

Query selectors are a more powerful way to target elements in the DOM using CSS-like selectors. In JavaScript, these selectors can be used with the "querySelector" and "querySelectorAll" methods.
*/

// Example:
// <div id="myId" class="myClass"></div>

let elementId = document.querySelector("#myId");
let elementClass = document.querySelectorAll(".myClass");

/* ----------------------------------------------------
6. Event Listeners

Event listeners are used to listen for specific events on DOM elements, such as clicks, key presses, and mouse movements. They can be added to elements using the "addEventListener" method.
*/

// Example:
// <button id="button">Click Me!</button>

let button = document.querySelector("#button");
button.addEventListener("click", function () {
  console.log("Button clicked");
});

/* ----------------------------------------------------
7. Additional Differences Between Arrow and Normal Functions

Arrow functions:
- Use the arrow syntax (=>) to define the function.
- Do not have their own 'this' keyword. Instead, they inherit the 'this' value from the enclosing context, which is usually the outer function or global scope.
- Cannot be used as constructors or with the 'new' keyword.
- Do not have the 'arguments' object, but can access the arguments using the 'rest' parameter syntax.

Normal functions:
- Use the 'function' keyword to define the function.
- Have their own 'this' keyword, which refers to the object that the function is a method of or the global object if it is not a method of any object.
- Can be used as constructors with the 'new' keyword.
- Have the 'arguments' object, which is an array-like object containing all the arguments passed to the function.
*/

/* ----------------------------------------------------
8. Data Attributes

Data attributes are a way to store custom data on HTML elements using attributes that start with "data-". They can be accessed in JavaScript using the "dataset" property.
*/

// Example:
// <div data-id="123">Element with custom data</div>

let dataElement = document.querySelector("[data-id='123']");
// console.log(element.dataset.id);
// Output: "123"

/* ----------------------------------------------------
9. DOM Traversal

DOM traversal refers to the process of navigating the DOM tree to find and manipulate specific elements. It can be done using methods such as "parentNode", "childNodes", and "nextSibling"
*/

// Example:
/*
  <ul id="my-list">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
*/

let list = document.getElementById("my-list");
let firstItem = list.childNodes[1];
let secondItem = firstItem.nextSibling;

/* ----------------------------------------------------
10. Easy Project for beginners to understand the DOM a little bit more
*/

// Simple Todo List:
// Your Code

// Modal:
// Your Code