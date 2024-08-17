const button = document.getElementById("btn");
const labell = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;

button.onclick = function(){
    let randomNumber1 = Math.floor(Math.random() * max) + min;
    labell.textContent = `diece 01 : ${randomNumber1}`;

    let randomNumber2 = Math.floor(Math.random() * max) + min;
    label2.textContent = `diece 02 : ${randomNumber2}`;

    let randomNumber3 = Math.floor(Math.random() * max) + min;
    label3.textContent = `diece 03 : ${randomNumber3}`;

}