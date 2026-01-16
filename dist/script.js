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
// ** `never` the never type in typescript represents a value that will exist or a state that will never be reached.
// It is a tool to force you to write safer code
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Something went wrong");
}
catch (error) {
    console.log("Caught the error! The program is still running");
}
console.log("I can still reach this line");
// ** Enum
// An `Enum` (short for Enumeration) is a feature in Typescript that allows you to define a set of named constants. It makes your code more readable and less prone to errors by replacing "magic numbers" or hard-to-remember strings with friendly names.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
// Usage
const currentStatus = OrderStatus.Processing;
console.log(currentStatus);
// String Enums
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
// USage
// const myRole = USerRole.Admin;
const myRole = UserRole["Viewer"];
console.log(myRole);
// ** Type Annotations & Inference
// Type Annotations is when you explicitly tell Typescript what type a variable or function should be. You do this by adding a 'colon :' followed by the type.
/*
  let variableName: type = value
*/
// function greet(name: string){
//     return "Hello" + name;
// }
// function add(a: number, b: number): number{
//     return a + b;
// }
// Type Inference (The "Automatic" Mode)
// Type inference is when Typescript figyures out the type for you based on the value you assigned. You don't write any extra code.
let score = 100;
// Typescript infers `score` is a `number`.
// score = "high";
// Array Methods Typescript is very smart with arrays. It knows what is inside them.
const fruits = ["Apples", "Banana", "Orange"];
fruits.forEach((fruit) => {
    // TypeScript knows 'fruit' is string automatically!
    // You get autocomplete for string methods like .toUpperCase()
    console.log(fruit.toUpperCase());
});
// ** Generics are one of the most powerful features in Typescript. They allow you to write reusable code that works with many different types, while still keeping full type safety.
// ! The problem: Duplication or "Any"
// Imagine you want a function that returns the first of an array.
/*
  function getFirstNumber(arr: number[]): number{
    return arr[0];
}
function getFirstString(arr: string[]): string{
    return arr[0];
}
    ! This is bad, You are duplicating logic
*/
// Without generics - DUPLICATE CODE! 😩
function getString(item) {
    return item;
}
function getNumber(item) {
    return item;
}
function getBoolean(item) {
    return item;
}
// Need a new type? Create another function!
// *** The solution with Generics
// With generics - ONE FUNCTION FOR ALL.
function getItem(item) {
    return item;
}
//Usage:
const str = getItem("Hello"); // T = string
const num = getItem(42); // T = number
const bool = getItem(true); // T = boolean
const arr = getItem([1, 2, 3]); // T = number[]
// Function Types & Signatures
function add(x, y) {
    return x + y;
}
console.log("Add:", add(6, 9));
const subtract = (a, b) => a - b;
console.log("Subtract", subtract(10, 3));
function createUser(name, age) {
    return {
        name,
        age: age || 18 //Default value handling
    };
}
console.log("Create User (NO, age):", createUser("Amara"));
// Default parameters (better than optional)
function greet(name, greeting = "hello") {
    return `${greeting}, ${name}!`;
}
console.log("Greet (Default):", greet("Teniola"));
// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
