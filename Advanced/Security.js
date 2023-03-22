/* ----------------------------------------------------
1. Security

Security is an important consideration for any software project. It is important to design and implement security measures to prevent attacks, protect user data, and ensure the integrity of your code.
*/

/* ----------------------------------------------------
2. NPM Audit

NPM Audit is a built-in tool in NPM that checks your package dependencies for known security vulnerabilities. It is important to run NPM Audit regularly and fix any vulnerabilities that are identified to keep your project secure.
*/

// Example:
// To run NPM Audit in your project, simply navigate to your project directory in the terminal and run the following command:
// npm audit

/* ----------------------------------------------------
3. Cross Site Scripting

Cross Site Scripting (XSS) is a type of attack where an attacker injects malicious code into a website, which then executes on the user's browser. To prevent XSS attacks, it is important to sanitize user input and escape any potentially dangerous characters.
*/

/* ----------------------------------------------------
4. Sanitize User Input

Sanitizing user input involves removing or escaping any potentially dangerous characters to prevent attacks like XSS. For example, if you have a form where users can enter their name, you might sanitize the input by removing any script tags or HTML elements.
*/

/* ----------------------------------------------------
5. All Your Code Is Public

When publishing code on the internet, it is important to remember that it is public and anyone can view and potentially modify it. It is important to avoid including any sensitive information in your code and to implement security measures to protect any user data that your code interacts with.
*/

// Example:
// Load the database credentials from environment variables
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

// Use the credentials to connect to the database
const db = new Database({
  host: dbHost,
  user: dbUser,
  password: dbPass,
});

/* ----------------------------------------------------
6. Never Trust The Client

When building web applications, it is important to remember that the client (i.e. the user's browser) is not trustworthy. It is important to implement server-side validation and security measures to prevent attacks like CSRF and to protect user data.
*/

/* ----------------------------------------------------
7. Cookies

Cookies are small files that are stored on a user's computer by a website. They are often used to store user preferences and login information. It is important to design and implement secure cookie handling to prevent attacks like session hijacking.
*/

// Example:
// Set a cookie named "username" with the value "johndoe"
document.cookie = "username=johndoe";

// Get all cookies
const cookies = document.cookie;

// Find the value of the "username" cookie
const username = cookies
  .split(";")
  .find((cookie) => cookie.trim().startsWith("username="))
  ?.split("=")[1];

// console.log(username); 
// Output: "johndoe"

/* ----------------------------------------------------
8. Mini Project

- Weather App Project
In a weather app project, it is important to design and implement secure API calls to retrieve weather data, and to handle user input securely to prevent attacks like XSS. It is also important to handle user authentication and session management securely to protect user data.
*/