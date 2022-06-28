'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// // Array Destructuring

// const arr = [1, 2, 3, 4];

// // const [a, b, c, d] = arr;
// // console.log(a, b, c, d);

// const [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const [starterItem, mainItem] = restaurant.order(1, 2);

// console.log(starterItem, mainItem);

// // Destructuring Nested Array

// const nested = [1, 2, [3, 4]];
// const [x, , [y, z]] = nested;

// console.log(x, y, z);

// // Spread Operator

// const copyMenu = [...restaurant.mainMenu]; // Shallow Copy of an Array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]; // Merge two Arrays

// console.log(copyMenu);
// console.log(menu);

// // Rest Pattern and Parameter

// // Rest Pattern
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// // Rest Parameter

// function add(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(2, 3, 4, 5, 6, 7);

// Short Circuiting
// numGuest dosen't exist in resturant object
// Without short circuiting
// console.log('---- OR ----');

// restaurant.numGuest = 2;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// With short circuiting
// const guest2 = restaurant.numGuest || 20;
// console.log(guest2);

// console.log('---- AND ----');

// console.log(0 && 10);
// console.log('' && 'Waleed');
// console.log(10 && 'waleed');
// console.log('Waleed' && 10 && null && 'hello');

// Without short circuiting
// if (restaurant.order) {
// console.log(restaurant.order(2, 1));
// }

// With short circuiting
// console.log(restaurant.order && restaurant.order(2, 1));

// Nullish Coalescing Operator

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 20;
// console.log(guest);

// const guest2 = restaurant.numGuest ?? 20;
// console.log(guest2);

// The For of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Normal For loop
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// For of Loop
// console.log('------');
// for (const item of menu) {
//   console.log(item);
// }

// Get Element index with for of loop (GIGSOON) june 24 2022 - 3:50AM

// for (const [index, item] of menu.entries()) {
//   console.log(index);
//   console.log(`${index + 1}: ${item}`);
// }

// Enhance Object Literals

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 2}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// console.log(openingHours);

// Looping Objects

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Object.keys() return key inside the object
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// Object.values() return value inside the object
// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }

// Object.entries() return value and keys of object
// for (const [key, day] of Object.entries(openingHours)) {
//   console.log(key, day);
// }

// Using Object Destructuring
// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Sets

// const orderSet = new Set([
//   'Pizza',
//   'Pizza',
//   'Pasta',
//   'Coffee',
//   'Shake',
//   'Pasta',
// ]);

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.add('Rice'));
// console.log(orderSet.delete('Pizza'));
// orderSet.clear();
// console.log(orderSet);
// Looping over Sets

// for (const item of orderSet) console.log(item);

// Example
// const staff = [
//   'Manager',
//   'Chef',
//   'Janitor',
//   'Waiter',
//   'Janitor',
//   'Chef',
//   'Waiter',
// ];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Maps

// const restaurant1 = new Map();

// restaurant1.set('name', 'Al-kaif');
// restaurant1
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', '20');

// console.log(restaurant1);

// Getting values from Map

// console.log(restaurant1.get('name'));
// console.log(restaurant1.get('open'));
// console.log(restaurant1.has('open'));
// console.log(restaurant1.delete('open'));
// console.log(restaurant1.size);
// restaurant1.clear();

// Map Iteration

// const question = new Map([
//   ['question', 'What is the best programming language'],
//   [1, 'C++'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Right Answer'],
//   [false, 'Wrong Answer'],
// ]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your Answer'));
// const answer = 3;
// console.log(question.get(question.get('correct') === answer));

// Working with strings

// const airline = 'Fly Emirates'; // length starts from 1 and index start from 0
// const plane = 'A380';
// console.log(airline.indexOf('y'));
// console.log(airline.lastIndexOf('e'));
// console.log(airline.indexOf('m'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 9));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const airline_name = new String('Fly Emirates');
// console.log(typeof airline_name);

const airline = 'Fly Emirates';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fun Example

// const personName = 'wAlEeD'; // Waleed
// console.log(personName);
// Lower Case all the string
// const nameLowerCase = personName.toLowerCase(); // waleed
// console.log(nameLowerCase);

// const correctName = personName[0].toUpperCase() + nameLowerCase.slice(1);
// console.log(correctName);

// Compairing Email

// const email = 'hElLo@TEst.com';

// const emailCorrect = email.toLowerCase().trim();

// console.log(emailCorrect);

// Split and join method

// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Waleed Tariq'.split(' ');

// const newName = ['Mr,', firstName, lastName].join(' ');

// console.log(newName);

function captilizeName(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

captilizeName('waleed tariq khan');
