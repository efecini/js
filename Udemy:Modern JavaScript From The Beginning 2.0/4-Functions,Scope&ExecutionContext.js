// Functions

// param with default valuables
function registerUser(user = 'Bot') {
  return user + ' is registered.';
}

console.log(registerUser('Efe'));
console.log(registerUser());

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user1 = {
  id: 1,
  name: 'Mahmut',
};

console.log(loginUser(user1));

// Functions can reach the global variables.
// Global scope can't find the variables that are declared in functions.
// Variable shadowing: when there is a same named variable with the global scope variable.

// Var is block scope. You can reach it within if but can't reach if that var is within a function.
// Const and let is unreachable.
if (true) {
  const a = 400;
  let b = 500;
  var c = 600;
}
console.log(c);

// Function declaration and expression

//Expression
const addPlusSign = function (value) {
  return '+' + value;
};
console.log(addPlusSign(3));

// Function declarations are hoisted while function expressions are not.
// Master scope can use the functions even they are declared at the bottom.

// Arrow functions

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => a - b;

//Returning an object

const createObj = () => ({
  name: 'Brad',
});

// IIFE: Immediately Invoked Function Expressions

(function () {
  console.log('Wassup?');
})();

(() => {
  console.log('Wassup 2?');
})();

// Execution Context
// A special environment to handle transformation and execution of code.
// JS is single threaded and it is synchronous.

// Execution Phases
// 1. Create the global object
// 2. Create this object and bind it to the global object.
// 3. Setup memory heap for storing variables and function references.
// 4. Store functions and variables ib global execution context and set to "undefined".

// Execution Phase
// 1. Execution code line by line
// 2. Create a new execution context for each function call

// The Call Stack
// Stack of functions to be executed
// Manages execution contexts
// Stacks are LIFO
