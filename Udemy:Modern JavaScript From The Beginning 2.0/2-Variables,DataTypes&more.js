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

// Type coercion

x1 = 5 + '5';
console.log(x1, typeof x1);

x2 = 5 * '5';
console.log(x2, typeof x2);

x3 = 5 + null;
console.log(x3, typeof x3);

x4 = Number(true);
console.log(x4, typeof x4);

x5 = 5 + undefined;
console.log(x5, typeof x5);

// Strings
// Strings are primitive but it puts wrapper when we use methods with them
age2 = 33;
name2 = 'Efe';
x3 = 'Hello, my name is ' + name2 + ' and I am ' + age2 + ' years old.';
console.log(x3);

// Template Literal
x4 = `Hello, my name is ${name2} and I am ${age2} years old.`;
console.log(x4);

// String properties and methods
console.log(x4.length);
console.log(x4.toUpperCase());
console.log(x4.toLowerCase());
console.log(x4.charAt(0));
console.log(x4[0]);
console.log(x4.indexOf('e'));
console.log(x4.substring(0, 5));
console.log(x4.substring(5));
console.log(x4.slice(-11, -6));
console.log(x4.replace('name', 'isim'));
console.log(x4.includes('Hell'));
console.log(x4.valueOf());
console.log(x4.valueOf());
console.log(x4.split(' '));

const myString = 'developer';
myString[0].charAt(0);

console.log(myString[0].toUpperCase() + myString.substring(1));
console.log(`${myString[0].toUpperCase()}${myString.slice(1)}`);

// Numbers

const num12 = new Number(4.567);
let g;
g = num12.toString();
console.log(g);
g = num12.toFixed(2);
console.log(g);
g = num12.toPrecision(5);
console.log(g);
g = num12.toExponential(2);
console.log(g);
g = Number.MAX_VALUE;
console.log(g);
g = Number.MIN_VALUE;
console.log(g);

//Math Object
console.log(Math);

h = Math.sqrt(9);
console.log(h);

h = Math.abs(-5);
console.log(h);

h = Math.round(4.6);
console.log(h);

h = Math.ceil(4.3);
console.log(h);

h = Math.floor(4.3);
console.log(h);

h = Math.pow(2, 3);
console.log(h);

h = Math.min(6, 7);
console.log(h);

h = Math.random();
console.log(h);

h = Math.floor(Math.random() * 10 + 1); // Random number between 1 and 10
console.log(h);

// Date&Time. Not mandatory.
