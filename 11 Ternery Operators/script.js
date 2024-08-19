// Exercise 01
const age = document.getElementById("age");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

submit.onclick = function() {
    let message = age.value >= 18 ? "You are an adult" : "You are a minor";
    result.textContent = message;
}

// Exercise 02
//            This reduce the 20% of discount from the total price 
//            if the price of an item is greater than 100 and
//            no discounts if the price is less than 100.

const price = document.getElementById("price");
const totalPay = document.getElementById("totalPay");
const submitPrice = document.getElementById("submitPrice");

submitPrice.onclick = function() {
    let discount = price.value >= 100 ? 20 : 0;
    totalPay.textContent = `Your Total price after discount reduced : $${price.value - (price.value * (discount / 100))}`;
}