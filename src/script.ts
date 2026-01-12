


// let message: string = "Aryan";
// console.log(message)


// Number (includes integers, floats, hex, binary)

let age: number = 25;
let price: number = 19.99;

// Boolean
let isActive: boolean = true;
console.log(isActive);

// Undefined & Null

let undefinedVar: undefined = undefined;
console.log(undefinedVar);
let nullVAr: null = null; 

// The 'any' Type (Avoid when possible)
let  dynamicValue: any = "I can be anything";
dynamicValue = dynamicValue.toUpperCase();
console.log(dynamicValue);

// dynamicValue = 42;
// dynamicValue = true;
// dynamicValue = [1, 2, 3];

// The 'unknown' Type (safer than any)
let uncertain: unknown = "Hello";
// ! If you uncomment the line below, Typescript will block you or show error. Even though you know it's a string, Typescript enforces strict discipline. It says: "I don't know if this variable has a .toUpperCase() method. It could be a number or null."
// uncertain = uncertain.toUpperCase();
if(typeof uncertain === "string"){
    console.log(uncertain.toUpperCase()); //Type narrowed
}

// Arrays - Collections of same type
// let numbers: number[] = [1, 2, 3, 4];

// * Readonly arrays (immutable)
let numbers: readonly number[] = [1, 2, 3, 4, 5];
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

let point: [a: number, b: number, c: string, d: number] = [10, 20, "Opebe", 90];
const [, , print, another_print] = point;
console.log(print);


// * Optional Tuple elements
let optionalTuple: [string, number?] = ["hello"];

// * Rest elements in tuples
type justAName = [string, number, ...boolean[]]; // "..." is the `Rest` operator
let tuple: justAName = ["hello", 42, true, false, true];

// Practical tuple example: API response
type ApiResponse = [boolean, string, any?]; // [success, message, data?]
let response : ApiResponse = [true, "Data fetched", {id: 1}]; // `{id: 1}` is an object datatype.


// Type Aliases vs Interfaces

// A Type Alias in Typescript in essentially a custom name (or nickname) for a specific type

type MyString = string;
let message: MyString = "Hello";

// * TYPE ALIAS - For creating custom types
type UserID = string | number;
type Status = "pending" | "approved" | "rejected";

// Combining types
type BasicUser = {
    id: UserID;
    name: string;
    email?: string; //Optional property
};

const user1: BasicUser = {
    id: 101,
    name: "Alice"
};

const user2: BasicUser = {
    id: "EMP-99",
    name: "Bod",
    email: "bob@example.com"
}
console.log(user2);

//*** `Interface` : An Interface in Typescript is a rulebook (or a contract) that defines the structure an object.

// It tells Typescript: "I expect an object to look exactly like this: it must have these properties, and they must be specific types."

interface IUser{
    id: UserID;
    name: string;
    email?: "string";
    greet(): string;
}

// * Implementation
const user: IUser = {
    id: 9098,
    name: "Teniola",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user.greet());