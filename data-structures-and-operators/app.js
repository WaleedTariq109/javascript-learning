'use strict';

const resturant = {
  name: 'Classico Italiano',
  location: 'NY, LA',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Wings', 'Fish', 'Garlic Bread', 'Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Beef'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ? Array Destructuring
const arr = [1, 2, 3];

// * Without Destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// * With Destructuring
const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = resturant.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starterItem, mainItem] = resturant.order(1, 2);
console.log(starterItem, mainItem);

const nested = [1, 2, [3]];
const [i = 2, j = 3, [k = 4, l = 5]] = nested;
console.log(i, j, k, l);
