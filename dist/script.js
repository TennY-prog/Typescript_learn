"use strict";
// let message: string = "Aryan";
// console.log(message)
Object.defineProperty(exports, "__esModule", { value: true });
// Number (includes integers, floats, hex, binary)
let age = 25;
let price = 19.99;
// Boolean
let isActive = true;
console.log(isActive);
// Undefined & Null
let undefinedVar = undefined;
console.log(undefinedVar);
let nullVAr = null;
// The 'any' Type (Avoid when possible)
let dynamicValue = "I can be anything";
dynamicValue = dynamicValue.toUpperCase();
console.log(dynamicValue);
// dynamicValue = 42;
// dynamicValue = true;
// dynamicValue = [1, 2, 3];
// The 'unknown' Type (safer than any)
let uncertain = "Hello";
// ! If you uncomment the line below, Typescript will block you or show error. Even though you know it's a string, Typescript enforces strict discipline. It says: "I don't know if this variable has a .toUpperCase() method. It could be a number or null."
// uncertain = uncertain.toUpperCase();
if (typeof uncertain === "string") {
    console.log(uncertain.toUpperCase()); //Type narrowed
}
// Arrays - Collections of same type
// let numbers: number[] = [1, 2, 3, 4];
// * Readonly arrays (immutable)
let numbers = [1, 2, 3, 4, 5];
// numbers.push(90) // ERROR - cannot modify
console.log(numbers);
// * `Tuples` : a Tuple is a special type of array that has a fixed number of elements where each element has a specific type.
// let user: [string, number, boolean] = ["Ibraheem", 29, true];
// console.log(user);
// * Named tuples (Typescript 4.0+)
// let point: [Teniola: number, Oyebade: number] = [10, 20];
// console.log(point[0]);
// const [xCoordinate, yCoordinate] = point;
// console.log(xCoordinate);
let point = [10, 20, "Opebe", 90];
const [, , print, another_print] = point;
console.log(print);
// * Optional Tuple elements
let optionalTuple = ["hello"];
let tuple = ["hello", 42, true, false, true];
let response = [true, "Data fetched", { id: 1 }]; // `{id: 1}` is an object datatype.
let message = "Hello";
const user1 = {
    id: 101,
    name: "Alice"
};
const user2 = {
    id: "EMP-99",
    name: "Bod",
    email: "bob@example.com"
};
console.log(user2);
// * Implementation
const user = {
    id: 9098,
    name: "Teniola",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(user.greet());
