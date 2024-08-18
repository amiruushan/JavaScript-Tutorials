const subCheckbox = document.getElementById("subCheckbox");
const masterCardBtn = document.getElementById("masterCardBtn");
const visaBtn = document.getElementById("visaBtn");
const payoneerBtn = document.getElementById("payoneerBtn");
const applePayBtn = document.getElementById("applePayBtn");
const submitBtn = document.getElementById("submitBtn");
const subResults = document.getElementById("subResults");
const paymentMethod = document.getElementById("paymentMethod");

submitBtn.onclick = function() {

    if (subCheckbox.checked) {
        subResults.textContent = `You have subscribed!`;
    } else {
        subResults.textContent = `You have not subscribed!`;
    }
    
    if (masterCardBtn.checked) {
        paymentMethod.textContent = `You are paying with Master Card`;
    }
    else if(visaBtn.checked) {
        paymentMethod.textContent = `You are paying with Visa Card`;
    }
    else if (payoneerBtn.checked) {
        paymentMethod.textContent = `You are paying with Payoneer`;
    }
    else if (applePayBtn.checked) {
        paymentMethod.textContent = `You are paying with Apple Pay`;
    }
    else {
        paymentMethod.textContent = `Please select a payment method`;
    }
}
