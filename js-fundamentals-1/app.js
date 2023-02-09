// Values and Variables

/**
 * Value in javascript is just a piece of data it's also a smallest unit of data.

 * 'waleed' is a value
 * 23 is a value

 */

// console.log("waleed");
// console.log(23);

// const firstName = "waleed";
// console.log(firstName);

/**
 * ? Data Types
 * 
 * In JavaScript, data types are the basic building blocks of computer programming.
 * Every value in JavaScript is either object or primitive data type.
 * We can say that a value is only a primitive data type if it's not an object.

 */

/**
 * ? Primitive Data Types
 * 
 * There are seven primitive data types:
 * Number, String, Boolean, Undefined, Null, Symbol, BigInt.
 * 
 * ? Number Data Type
 * 
 * 1: Number is a floating point number. Used for decimal and integer.
 * 2: In javascript, a number always has a decimal point even we don't see it.
 * 3: For example, 15 is equal to 15.0. Because 15 internally treated
 * as a decimal number,
 * 4: But main thing is that it dosen't matter we have 15 or 15.0 they both just
 * numbers.
 * 
 * ? String Data Type
 * 
 * 1: String is just a sequence of characters. Used for text.
 * 2: We always put text in quotes. No matter it's single or double quotes.
 * 3: The Reason of putting text in quotes is because javascript can differentiate
 * between strings and variables. For example, if we have a variable called name,
 * and If we to store a name text as a string and we don't wrap it in quotes then
 * javascript will treat it as a variable not string.
 * 
 * ? Boolean Data Type
 * 
 * 1: Boolean is a Logical type which only has two possible values: true and false.
 * 2: Boolean data type is used for taking a decision.
 * 
 * ! NOTE: Numberm, String, Boolean. These are the most important data types.
 * 
 * ? Undefined Data Type
 * 
 * 1: Value taken by variable which is not defined yet. For example
 * let name; In this example we declare a variable called name but not assign
 * it a value yet. So the data type of this variable is undefined.
 * 2: We also litrally assign undefined data type to a variable. For example:
 * let name = undefined;
 * 
 * ? Null Data Type
 * 
 * 1: Null also means empty value. It's similar to undefined. But it's used for
 * different circumstances.
 * 
 * ? Symbol Data Type
 * 
 * 1: Symbol is introduced in ES6(ES2015).
 * 2: Value is unique and not changed are called symbols.
 * 3: Symbol is not commonly used. But again it's very useful in defferet
 * circumstances.
 * 
 * ? BigInt Data Type
 * 
 * 1: BigInt is a data type which is used for storing large numbers.
 * 2: Intergers that a too large to be represented as numbers So we can use BigInt
 * to represent them as numbers.
 * 
 * * That's it we have total seven data types in JavaScript. One fundamental
 * * thing is that javascript has feature called Dynamic Typing which basically
 * * means we don't have to manually defined the data types to a variable. Instead,
 * * data types are determined by automatically.
 * * The most important little details is that in javascript value has a type
 * * not variable.

 */

let firstName = "waleed";
let number = 23;
let bool = true;
let nullValue = null;
let undefinedValue = undefined;
let bigInt = BigInt(83748378473);

// console.log(typeof firstName);
// console.log(typeof number);
// console.log(typeof bool);
// console.log(typeof undefinedValue);
// console.log(typeof nullValue);
// console.log(typeof bigInt);

// * Var, Let, Const

// Variable decalared with let can be muated.

let age = 23;
age = 24;

// variabel decalre with const can't be muated. We also can't declare empty const
// variable

const birthYear = 2001;
// birthYear = 2002;
