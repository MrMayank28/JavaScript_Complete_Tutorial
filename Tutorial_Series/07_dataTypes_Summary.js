// JavaScript Is Dynamically Typed Language Becuase we don't have to specify the datatype explicitly and also it is an interpreted language.

/*
In JavaScript, data types can be categorized into two main groups:
1. Primitive Data Types: It Stores in Stack Memory
2. Non-Primitive Data Types: It Store in Heap Memory

1. Primitive Data Types:
These are immutable data types that store single values.
They are directly assigned to memory and accessed by their value.
Primitive data types include: string, number, boolean, null, undefined, and symbol.
*/

let name = 'John';          // String
let age = 30;               // Number
let isStudent = true;       // Boolean
let score = null;           // Null
let x;                      // Undefined
const id = Symbol('id');    // Symbol
const e_id = Symbol('id')
console.log(id == e_id);
 
const bigNumber = 12354565879987654n // BigInt


/*
2. Non-Primitive Data Types (Reference Types):
These are mutable data types that store collections of values or references to other values.
They are accessed by reference and can hold multiple values.
Non-primitive data types include: object, array, and function.
*/

let person = { name: 'Alice', age: 25 };                        // Object
console.log(person);
let colors = ['red', 'green', 'blue'];                          // Array
console.log(colors);
function greet(name) { console.log('Hello, ' + name + '!'); }   // FunctionObject


// Stack (Primitive), Heap (Non-Primitive)

let myFirstName = "Mayank"
let myLastName = myFirstName

myLastName = "Borasi"

console.log(myFirstName);
console.log(myLastName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mayank@gmail.com"

console.log(userOne);
console.log(userTwo);