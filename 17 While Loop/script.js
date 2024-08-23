let userName;
let password;
let loggedIn = false;
let statusMessage = document.getElementById("status")

// ------------do while loop----------------


// do {
//     userName = window.prompt("Type your User Name");
//     password = window.prompt("Type your Password");

//     if(userName === "amiruushan" && password === "1234"){
//         loggedIn = true;

//         statusMessage.textContent = `Welcome ${userName}!`;

//     }else {
//         statusMessage.textContent = "Invalid User Name or Password ! Try again";
//     }
// }while (!loggedIn)


// ------------while loop----------------

while (!loggedIn){
    userName = window.prompt("Type your User Name");
    password = window.prompt("Type your Password");

    if(userName === "amiruushan" && password === "1234"){
        loggedIn = true;

        statusMessage.textContent = `Welcome ${userName}!`;

    }else {
        statusMessage.textContent = "Invalid User Name or Password ! Try again";
    }
}