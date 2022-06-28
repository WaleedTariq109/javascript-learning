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

createBooking('PIA109', 212, 12000);
createBooking('PIA109', 212);
