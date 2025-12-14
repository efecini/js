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
