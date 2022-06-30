'use strict';

// Function with default parameter
/**
 * arr [
 *  { flightNum: PIA009, totalPassengers: 212, price: 12000 }
 * ]
 */

const bookings = [];

const createBooking = (flightNum, totalPassengers, price = 10000) => {
  const booking = {
    flightNum,
    totalPassengers,
    price,
  };
  console.log(booking);

  bookings.push(booking);
};

// createBooking('PIA109', 212, 12000);
// createBooking('PIA109', 212);

// Passing Arguments (by value vs by reference)

const flight = 'PIA109';
const passenger = {
  name: 'Waleed Tariq',
  passport: 934937493798,
};

const checkIn = (flight, person) => {
  flight = 'EMI109';
  person.name = `Mr, ${person.name}`;

  if (person.passport === 934937493798) {
    alert('Check In');
  } else {
    alert('Wrong Passport Number');
  }
};

// checkIn(flight, passenger);

// console.log(flight);
// console.log(passenger);

// Higher Order Function

const oneWord = str => {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = str => {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformed = (str, fn) => {
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by ${fn.name} function`);
};

// transformed('Javascript is the best!', upperFirstWord);
// transformed('Javascript is the best!', oneWord);

// Functions Returns Function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet('Hey');
// greeter('Waleed');

// greet('Hello')('Waleed');

const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeter = greet('Hey');
// greeter('Waleed');

// greet('Hello')('Waleed');

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

const luftwings = {
  airline: 'luftwings',
  iataCode: 'LW',
  booking: [],
};

const bookFlight = lufthansa.book;

// Call Method
bookFlight.call(lufthansa, 660, 'Waleed');
bookFlight.call(luftwings, 320, 'Wills');

// Apply Method
const flightData = [478, 'John'];
bookFlight.apply(lufthansa, flightData);
