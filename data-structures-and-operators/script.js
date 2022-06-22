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
console.log('---- OR ----');

restaurant.numGuest = 2;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

// With short circuiting
const guest2 = restaurant.numGuest || 20;
console.log(guest2);

console.log('---- AND ----');

console.log(0 && 10);
console.log('' && 'Waleed');
console.log(10 && 'waleed');
console.log('Waleed' && 10 && null && 'hello');

// Without short circuiting
if (restaurant.order) {
  console.log(restaurant.order(2, 1));
}

// With short circuiting
console.log(restaurant.order && restaurant.order(2, 1));
