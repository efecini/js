// Logic & Control Flow

if (true) {
  console.log('This is true.');
}

const x = 10;
const y = 5;
if (x > y) {
  console.log('X>Y');
}

if (x < 10) {
  console.log('x is less than 10');
} else if (x > 10) {
  console.log('x is less than 10');
} else {
  console.log('x is 10');
}

const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();

switch (month) {
  case 1:
    console.log('It is January.');
    break;
  case 2:
    console.log('It is February.');
    break;
  case 3:
    console.log('It is March.');
    break;
  default:
    console.log('It is not Jan, Feb, March.');
    break;
}

// Truthy and falsy values
// Falsy: null, undefined, Nan, "", false, 0
// Truthy: all other values

// One liner condition
const posts = [];
posts.length > 0 && console.log(posts[0]);

// || will return the first trthy value or the last value

b = 10 || 20;
console.log(b);
c = 0 || 20;
console.log(c);
e = 0 || null || '' || undefined;
console.log(e);

// ?? returns the right side operand when the left is null or undefined
f = 10 ?? 20;
console.log(f);

const auth = 0;
const msg = auth ? 'welcome to the site' : 'Please login first';
console.log(msg);

const auth1 = 1;
auth1 && console.log('Welcome to the dashboard');
