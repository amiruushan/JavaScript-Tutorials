// asking user inputs
// method 1

let userName;
userName = window.prompt("Type your User Name");
document.getElementById("h1").textContent = `Hello ${userName}!`;

// method 2
let telNo;
document.getElementById("btn").onclick = function(){
    telNo = document.getElementById("myText").value;
    document.getElementById("p1").textContent = `Your Number is: ${telNo}`
}