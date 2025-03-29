// rest parameters
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// It is represented by three dots (...) followed by a name.
// It can be used to combine arrays, copy arrays, and pass arguments to functions.


console.log("03 - rest parameters");
function getCarArray(...cars) {
    return cars;
}

let car1 = "makr2";
let car2 = "e36";
let car3 = "fb15";
let car4 = "n16";


let cars = getCarArray(car1, car2, car3, car4);

console.log("01 - adding elements to an array");
console.log(cars);

console.log("02 - funtion to generate sum of numbers");

function sum(...numbers) {
    let result = 0;
    for (number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(10, 10, 10, 20));


console.log("03 - cobining strings");

function combineStrings(...names) {
    let fullName = names.join(" ");
    return fullName;
}

console.log(combineStrings("John", "Doe", "Smith"));