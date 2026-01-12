"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Aryan";
console.log(message);
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
