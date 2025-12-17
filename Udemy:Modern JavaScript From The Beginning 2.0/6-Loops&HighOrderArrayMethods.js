//Loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Nested loops
// Break & Continue

// while & do while

// for of loop
const items = ['table', 'chair', 'book'];
for (const item of items) {
  console.log(item);
}

//for in loop
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};
for (const key in colorObj) {
  console.log(colorObj[key]);
}

//for each

const socials = ['twitter', 'linkedin', 'facebook', 'instagram'];
console.log(socials.__proto__);
socials.forEach(function (item) {
  console.log(item);
});

socials.forEach((item, index, arr) => console.log(`${index}.${item} / ${arr}`));

//Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
*/

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

//Map
const numbers2 = [5, 6, 7, 8, 9];
const doubleNumbers = numbers2.map((number) => number * 2);
console.log(doubleNumbers);

//Chaining Different Methods

//Reduce
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers3.reduce(function (accumulator, curentValue) {
  return accumulator + curentValue;
});
console.log(sum);

//or
const sum2 = numbers3.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);
