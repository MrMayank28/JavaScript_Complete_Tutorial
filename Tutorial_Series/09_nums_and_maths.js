const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2));

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3));  // Preference to number before decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // Default US Currency representation

// -----------------------Maths----------------------- //

// console.log(Math);
// console.log(Math.abs(-4));  // Always Gives Positive Value
// console.log(Math.round(4.4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.9));

console.log(Math.random()); // Always Gives The Random Values
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)