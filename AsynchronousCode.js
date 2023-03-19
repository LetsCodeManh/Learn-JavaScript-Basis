/* ----------------------------------------------------
1. Asynchronous Code

Asynchronous code is code that runs independently of the main program flow, allowing other tasks to run while waiting for a response.
*/

// Example:
setTimeout(function () {
  console.log("Hello, World!");
}, 2000);

/* ----------------------------------------------------
2. Callbacks

A callback is a function that is passed as an argument to another function and is executed when a certain event occurs or a certain condition is met.
*/

// Example:
// function getData(callback) {
//   // get data from server
//   const data = { name: "Manh", age: 24 };
//   callback(data);
// }

// getData(function (data) {
//   console.log(data);
// });

/* ----------------------------------------------------
3. Promises

A promise is an object that represents the eventual completion or failure of an asynchronous operation, and its resulting value.
*/

// Example:
function getData() {
  return new Promise(function (resolve, reject) {
    // get data from server
    const data = { name: "Manh", age: 24 };
    const dataEmpty = "";
    if (data) {
      resolve(data);
    } else {
      reject("Error: could not get data");
    }
  });
}

// getData()
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/* ----------------------------------------------------
4. Async Await

"async" and "await" are keywords that were introduced in ES2017 to make working with promises easier and more intuitive.
*/

// Example:
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// getData().then(function (data) {
//   console.log(data);
// });
