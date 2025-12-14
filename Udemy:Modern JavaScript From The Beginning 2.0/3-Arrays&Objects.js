// Arrays
// Special type of objects

const arr = [2342, 623, 73];
const arr2 = [93.2, 'efe', true];
console.log(arr, arr2);

const fruits = new Array('Apple', 'Banana', 'Orange');
console.log(fruits);

x = fruits[0];

y = `My favourite fruit is ${fruits[2]}`;
console.log(y);
console.log(fruits.length);
fruits[2] = 'Grape';

// Add a new itemn to the end
fruits[fruits.length] = 'Blueberry';
console.log(fruits);

const arr3 = [12, 23, 34, 45];
arr3.push(100);
console.log(arr3);
arr3.pop();
console.log(arr3);
arr3.unshift(100);
console.log(arr3);
arr3.shift(100);
console.log(arr3);
arr3.reverse(100);
console.log(arr3);

console.log(arr3.indexOf(525)); // when index is Out of bounds

// Slice
// Doesn't change the original array
console.log(arr3.slice(2));
console.log(arr3.slice(1, 2));
console.log(arr3); // Array didn't change

// Splice
// changes the original array
console.log(arr3.splice(1, 2));
console.log(arr3); // Array changed

const arr4 = [1, 2, 3, 4, 5, 6];
console.log(arr4.splice(1, 4).reverse().toString());

// Nseting, Concat, Spread
const arr5 = ['efe', 'ece', 'ege'];
const arr6 = ['Ahmet', 'Mehmet', 'Fiseyin'];

//arr5.push(arr6)
// y = arr5[3][2] // Fiseyin

const allNames = [arr5, arr6];
console.log(allNames);

// Makes it like a single array
//console.log(arr5.concat(arr6));

// Spread
xx = [...arr5, ...arr6];
console.log(xx);

const arr7 = [1, 2, [3, 6], 7, [8, 9]];
console.log(arr7.flat());

console.log(Array.isArray(arr7));

console.log(Array.from('123456'));

// Objects

// Object Literal

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
console.log(x);
x = person['age'];
console.log(x);
x = person.address.state;
console.log(x);

x = person;
console.log(x);
delete person.age;
person.hasChildren = true;
console.log(x);

person.greet = function () {
  console.log('Hello, my name is ${this.name}');
};
console.log(x);

const todo = new Object();

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];
x = Object.keys(todos[0]);
console.log(x);

x = Object.values(todos[0]);
console.log(x);

x = Object.keys(todos[0]);
console.log(x);

x = todos[0].hasOwnProperty('age');
console.log(x);

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person1 = {
  firstName,
  lastName,
  age,
};
console.log(person1);

// JSON

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is a body',
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str);
console.log(str.length);

// Parse JSON
const obj33 = JSON.parse(str);
console.log(obj33);
console.log(obj33.title);

const library = [
  {
    title: 'asdf',
    author: 'fasdfa',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'hshasd',
    author: 'asdgasd',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'hashasd',
    author: 'hasdfa',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
const { title: firstbook } = library[0];

console.log(firstbook);
