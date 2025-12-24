// ------------------------------
// First TypeScript Program
// ------------------------------

// A variable with a string type
let username: string = "TypeScript Learner";

// A variable with a number type
let age: number = 16;

// A variable with a boolean type
let isLearning: boolean = true;

// Printing values to the console
console.log("Username:", username);
console.log("Age:", age);
console.log("Learning TypeScript:", isLearning);

// ------------------------------
// Function Example
// ------------------------------

// This function takes two numbers and returns a number
function addNumbers(a: number, b: number): number {
    return a + b;
}

// This function takes three parameters: a string, a number, and a boolean, and returns a string
function describeUser(name: string, age: number, isMember: boolean): string {
    return `${name} is ${age} years old and membership status is ${isMember}.`;
}
// calling the function
console.log(describeUser("Anam", 23, true))

// Calling the function
let result: number = addNumbers(10, 20);

// Printing function result
console.log("Sum:", result);

// ------------------------------
// Array Example
// ------------------------------

// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Loop through the array
numbers.forEach((num: number) => {
    console.log("Number:", num);
});

// ------------------------------
// Object Example
// ------------------------------

// Defining the shape of an object using a type
type Student = {
    name: string;
    grade: number;
    passed: boolean;
};

// Creating an object that follows the Student type
let student: Student = {
    name: "Alex",
    grade: 90,
    passed: true,
};

// Printing object data
console.log("Student Name:", student.name);
console.log("Student Grade:", student.grade);
console.log("Passed:", student.passed);

// ------------------------------
// End of Program
// ------------------------------

console.log("🎉 First TypeScript program completed!");
