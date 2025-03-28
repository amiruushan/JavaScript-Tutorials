// Spread perator
// The spread operator is used to expand an iterable (like an array) into its elements.
// It is represented by three dots (...).
// It can be used to combine arrays, copy arrays, and pass arguments to functions.


let fruits = ["apple", "banana", "cherry"];
let vegetables = ["carrot", "broccoli", "spinach"];

console.log("01 - combining two arrays");
const food = [...fruits, ...vegetables];
console.log(food);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let max = Math.max(numbers)
let min = Math.min(...numbers)

console.log("02 - get elements from an array");

console.log(numbers);
console.log(`max number of array ${max}`);
console.log(`min number of array ${min}`);
