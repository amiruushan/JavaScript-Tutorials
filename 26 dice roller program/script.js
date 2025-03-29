
function rollDice() {
    const numOfDice = document.getElementById("numDice").value;
    const result = document.getElementById("result");
    const diceImages = document.getElementById("diceImages");
    const diceValues = [];
    const images = [];


    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        diceValues.push(value);
        images.push(`<img src="../26 dice roller program/diceimages/${value}.png" alt="huknw">`);
    }

    result.textContent = `Dice: ${diceValues.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
    console.log(diceImages);


}
