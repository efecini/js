//	LOGGING
console.log('efe');
const x = 23;
console.log(x);

//	DIFFERENT TYPES OF LOGS
console.error('Error');
console.warn('Warning');
console.table({ name: 'Brad', email: 'efe@gmail.com' });

console.group('simple');
console.warn('Warning');
console.error('Error');
console.groupEnd('');

//	COMMENTS

// Single Line Comment
/*
Multi-line
Comments
*/

// Go to a line and do Cmd+shift+7, it comments out the line

//	SHORTCUTS

// 1. Select a text and hold CMD+shift+L to change all of the instances
// 2. CMD+Option+F to find a text in the code
// 3. CMD+Shift+F to find a text in all folders

// WAYS TO DECLARE VARIABLE
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with number

let score;
score = 3;
console.log(score);

const y = 100;

// y = 122; ERROR can't reassign value to constant variables
// const z; ERROR Const must be initialized

const arr1 = [1, 2, 3, 4, 5];
// arr1 = [2, 3, 5]; can't re assign

arr1.push(6);
console.log(arr1); // That is okay

// Declare multiple values at once
let a, b, c;
const d = 10,
  e = 20,
  f = 30;

console.log(d);

// Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Non-Primitive Types: Objects, arrays, functions

// Js is a dynamically typed language.
// Ts allows static-typing

//String
const firstName1 = 'Efe';
console.log(firstName1, typeof firstName1);
//Number
const number1 = 20;
const temp1 = 63.8;
console.log(number1, typeof number1);
console.log(temp1, typeof temp1);

//Boolean
const bool1 = true;
console.log(bool1, typeof bool1);

//Null
const myvar1 = null;
console.log(myvar1, typeof myvar1);

//Undefined (You won't set variables to undefined)
// let myvar3;
// console.log(myvar2, typeof myvar3); Compiler will say that it is undefined

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt
const n = 2345234523n;
console.log(n, typeof n);

// Reference Types

const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

const person = {
  name: 'Efe',
  surname: 'Çini',
};
console.log(person, typeof person);

function sayHello() {
  console.log('Hello!');
}

console.log(sayHello, typeof sayHello);

/*
How data is stored?
Primitive Types: Stored in Stack.
Reference Types Stored in heap and accessed by reference.
*/

// Type Conversion
// To Int
let amount1 = '100';
console.log(amount1, typeof amount1);
amount1 = parseInt(amount1);
console.log(amount1, typeof amount1);
// Or
let amount2 = '200';
amount1 = Number(amount2);
console.log(amount2, typeof amount2);

// To String
console.log(amount2.toString(), typeof amount2.toString());
console.log(String(amount2), typeof String(amount2));

// To Float
console.log(parseFloat(333), typeof parseFloat(333));

// To Boolean
console.log(Boolean(1), typeof Boolean(1));

// To undefined
console.log(undefined, typeof undefined);

// OPERATORS

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(5 % 5);
console.log(3 ** 4);

console.log('Hello' + ' World');

z = 6;
z++;
console.log(z);

p = 5;
p += 6;
console.log(p);

b = 3 == 3;
console.log(b);

c = 3 !== 3;
console.log(c);
