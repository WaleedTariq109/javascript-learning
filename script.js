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

