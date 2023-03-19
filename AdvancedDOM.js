/* ----------------------------------------------------
1. Fetch

The Fetch API is a modern interface for fetching resources over the network. It provides a more flexible and powerful replacement for the XMLHttpRequest (XHR) object.
*/

// Example:
// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

/* ----------------------------------------------------
2. Event Loop

The event loop is the mechanism that allows JavaScript to handle multiple events and perform non-blocking I/O operations, without blocking the main thread of execution.
*/

// Example:
// console.log("Start");
// setTimeout(function () {
//   console.log("Inside timeout");
// }, 2000);
// console.log("End");

// Output:
// Start
// End
// Inside timeout

/* ----------------------------------------------------
3. Event Delegation

Event delegation is a technique where you attack a single event listener to a parent element, rather than attacking listeners to every child element. This can improve performance and reduce memory usage.
*/

// Example:
// <ul id=list>
// <li>Item 1</li>
// <li>Item 2</li>
// <li>Item 3</li>
// </ul>

// const list = document.getElementById("list");
// list.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     console.log("You clicked on:" + event.target.textContent);
//   }
// });

/* ----------------------------------------------------
4. Browser Storage

Browser storage refers to the ability of web browsers to store data locally on the user's device, either temporarily or permanently. There are two main types of brower storage: "localStorage" and "sessionStorage".
*/

// Example:
localStorage.setItem("name", "Manh");
const name = localStorage.getItem("name");
// console.log(name)
// Output: Manh

sessionStorage.setItem("age", 30);
const age = sessionStorage.getItem("age");
// console.log(age);
// Output: 30

/* ----------------------------------------------------
5. Mini Project

- Advanced Todo List:
An advanced todo list is a mroe feature-rich version of a simple todo list, with additional features like filtering, sorting, and editing.

- Expand Collapse
A typical expand/collapse implementation involves adding an event listener to a button or link, and then toggling the display of a target element based on the event. This can be accomplished using CSS classes or  inline styles.

- Google Maps Clone
A Google Map clone is a web application that provides similar functionality to Google Maps, such as searching for locations, displaying maps and satellite imagery, and providing directions. This can be accomplished using the Google Map API or other mapping libraries like Leaflet or OpenLayers.
*/