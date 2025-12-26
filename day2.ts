// Data types in TypeScript
// There are 4 main categories of data types in TypeScript:

// 1- Primitive Data Types
//   a. Number, String, Boolean, Null, Undefined, Symbol, BigInt
var num: number = 42;
var str: string = "Hello, TypeScript!";
var bool: boolean = true;
var nullVal: null = null;
var undefinedVal: undefined = undefined;
var sym: symbol = Symbol("key");
var bigInt: bigint = 123456789012345678901234567890n;

// 2- Object Data Types
//   a. Arrays, Functions, Classes, Interfaces, Objects

let arr: number[] = [22, 33, 44, 55];
// tuple
let tuple: [string, number] = ["Age", 30];
// Object
let obj: {
    name: string;
    age: number;
} = {
    name: "Alice",
    age: 25,
}

// 3- Special Data Types
//   a. Any, Unknown, Never, Void

let anyVar: any = "Could be anything";
let unknown: unknown = 10;

// 4- Advanced types
//   a. Union, Intersection, Literal, Type Aliases, Enums
// a variable that can hold either a string or a number
let unionVar: string | number;
unionVar = "A string";
unionVar = 100;
// Type Alias
let aleasUser: User;
type User = {
    id: number;
    username: string;
}
// Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let dir: Direction = Direction.Up;
console.log(dir);

enum role {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST'
}
let userRole: role = role.Admin;
console.log(userRole);

// literal type
// a variable that can only hold specific string values
let literalVar: "success" | "Failure";
literalVar = "success";

// 4. Function Data Types
// Explain: Function parameters and return types can be explicitly typed in TypeScript.
function add(a: number, b: number): number {
    return a + b;
}
let sum: number = add(5, 10);
console.log("Sum:", sum);

function great(name: string): void {
    console.log("Hello, " + name);
}
great("Bob");

// Function with optional parameter
function greetOptional(name: string, greeting?: string): void {
    if (greeting) {
        console.log(greeting + ", " + name);
    }
    else {
        console.log("Hello, " + name);
    }
}

greetOptional("Charlie");
greetOptional("Dave", "Good Morning");

// Function with default parameter
function greetDefault(name: string, greeting: string = "Hi"): void {
    console.log(greeting + ", " + name);
}
greetDefault("Eve");
greetDefault("Frank", "Welcome");