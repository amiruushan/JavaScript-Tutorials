// function for addition [func with return]
function add(x, y){
    return x + y;
}
console.log(add(10, 20));

// substract [wihtout return]
function substract(x, y){
    console.log(x - y);
}
substract(10, 5);

// odd number
function isOdd(num){
    return num % 2 === 1 ? "Odd": "Even";
}

let number = window.prompt("Enter a number");
console.log(isOdd(number));


function isValidEmail(email){
    return email.includes("@") && email.includes(".") ? true : false;
}

console.log(isValidEmail("am@iru.ushan"));
