const inputValue = document.getElementById("inputValue");
const toCm = document.getElementById("toCm");
const toMm = document.getElementById("toMm");
const result = document.getElementById("result");
let length;

function convert(){

    // checking if one of the 2 options are selected
    if(toCm.checked){
        length = Number(inputValue.value);
        length = length * 100;
        result.textContent = inputValue.value + " m = "+ length + " cm";
    }
    else if(toMm.checked){
        length = Number(inputValue.value);
        length = length / 100;
        result.textContent = inputValue.value + " cm = "+ length.toFixed(1) + " m";
    }
    else{
        result.textContent = "Please select an unit to convert";
    }

}