let userName = window.prompt("Type your User Name");

// method chaining
userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
console.log(userName)

// manual
userName = userName.trim();
let firstChar = userName.charAt(0);
firstChar = firstChar.toUpperCase();
restChars = userName.slice(1);
userName = firstChar + restChars;
console.log(userName);