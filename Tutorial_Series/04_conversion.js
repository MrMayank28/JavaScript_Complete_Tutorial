let score = 33

let valueInNumber = Number(score)
// console.log(typeof score);
// console.log(typeof (score));

let weightFloat = 34.5  // number

let valueInFloat = Number(weightFloat)
// console.log(valueInFloat);
// console.log(typeof valueInFloat);


let scoreString = "Mayank"  // NaN

let valueInNumberS = Number(scoreString)
// console.log(typeof valueInNumberS);
// console.log((valueInNumberS));


let scoreStringNum = "33"

let valueInNumberN = Number(scoreStringNum)
// console.log(typeof valueInNumberN);
// console.log(typeof (valueInNumberN));


let scoreAlphaNumeric = "33abc" // NaN

let valueInNumberOnly = Number(scoreAlphaNumeric)
// console.log(typeof valueInNumberOnly);
// console.log(valueInNumberOnly);


let scoreNull = null

let valueNull = Number(scoreNull)
// console.log(typeof valueNull);
// console.log(valueNull);


let scoreUndefined = undefined

let valueUndefined = Number(scoreUndefined)
// console.log(typeof valueUndefined);
// console.log(valueUndefined);


let scoreBoolean = true     // true =>1 and false =>0

let valueBoolean = Number(scoreBoolean)
// console.log(typeof valueBoolean);
// console.log(valueBoolean);

let isLoggedIn = 1  // 1 => true; 0=> flase; ""=>flase; "Mayank"=>true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);