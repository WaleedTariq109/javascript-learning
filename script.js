'use strict';

// Arrays

// Method #1
// Literal Syntax
const companines = ['Google', 'Apple', 'Microsoft', 'Amazon'];

// Method #2
// Constructor Function
const persons = new Array('Waleed', 'Usama', 'Muzammil', 'Samad');

// Retriving value/element from array
// Syntax: companines[index]

// console.log(companines[0]);

// console.log(companines);
// console.log(persons);

// Excercise
const years = [2000, 1992, 2015];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

// console.log(ages);

function calcAge(birthYear) {
  return 2022 - birthYear;
}

////////////////////////////////////////////////

// Objects

// We define Objects with key value pairs

// Method #1
// Literal Syntax
const waleed = {
  firstName: 'Waleed',
  lastName: 'Tariq',
  birthYear: 2001,
  job: 'Web Developer',
};

// Method #2
// Constructor Function
const foods = new Object({
  food1: 'Siri Payee',
  food2: 'Butter Chicken',
});

// console.log(waleed);
// console.log(foods);

// Retrive Value from Objects

// Retrive value with dot notation
// console.log(waleed.firstName);

// Retrive value with bracket notation
// console.log(waleed['firstName']);

// With bracket notation we can also retrive value with some expression

const key = 'Name';

// console.log(waleed['first' + key]);
// console.log(waleed['last' + key]);

////////////////////////////////////////////////////

// Data structures and modern operators

// Array Destructuring

const resturant = {
  name: 'BBQ Tonight',
  location: 'Near Askari park',
  categories: ['fast food', 'Pakistani', 'Chineese', 'Vegetarian'],
  starterMenu: ['Mint Margarita', 'Fruit Triffel', 'Garlic Bread'],
  mainMenu: ['Beaf Steak', 'Chicken Karahi', 'Egg fried rice'],
};

//

const arr = [1, 2, 3];

// Retriving Element without Array Destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Retriving Element with Array Destructuring
const [x, y, z] = arr;

console.log(a, b, c);
console.log(x, y, z);
