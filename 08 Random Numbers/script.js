const min = 5;
const max = 7;

// generating a randome number between min and max

let randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min ;

document.getElementById("myH3").textContent = (`Random number between ${min} and ${max} - ${randomNumber}`);