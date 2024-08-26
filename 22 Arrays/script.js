let colors = ["red", "green", "blue"];

// accessing elements
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// add new elemets
colors[3] = "yellow";
console.log(colors[3]);

// push method (add at the end)
colors.push("black");
console.log(colors[4]);

// pop method (remove from the end)
colors.pop();

// unshift method (add at the beginning)
colors.unshift("purple");
console.log(`1st element: ${colors[0]}`);

// shift method (remove from the beginning)
colors.shift();

// length
console.log(colors.length);

// indexOf
console.log(colors.indexOf("blue"));
console.log(colors.indexOf("black"));

// printing in a for loop
console.log("______________________________");
// for (let i=0; i<colors.length; i++) {
//     console.log(colors[i]);
// }
for(let color of colors){
    console.log(color);
}
console.log("______________________________");

//sort
colors.sort();
console.log(colors);

//reverse
colors.sort().reverse();
console.log(colors);