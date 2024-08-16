let radius;
let circumference;
const PI = 3.14;

document.getElementById("btn").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("c").textContent = `Circumference is : ` + circumference + ` cm`;
}