let userName = "    AmiruUshan  ";
let phoneNumber = "077-269-9573"

// charAt()
console.log(userName.charAt(1));
// indexOf()  -- shows the first index for the relevant character
console.log(userName.indexOf("a"));
// lastIndexOf  -- shows the last index for the relevant character
console.log(userName.lastIndexOf("a"));
// lenght
console.log(userName.length);
// trim
console.log(userName.trim());
// toUpperCase() 
console.log(userName.toUpperCase());
// toLowerCase()
console.log(userName.toLowerCase());
// repeat()
console.log(userName.repeat(3));
// startsWith()
console.log(userName.startsWith(" "));
// endsWith()
console.log(userName.endsWith("n"));
// includes()
console.log(userName.includes("a"));
// replaceAll()
console.log(phoneNumber.replaceAll("-",""));
//padStart()
console.log(phoneNumber.padStart(20,"0"));
//padEnd()
console.log(phoneNumber.padEnd(15,"0"));