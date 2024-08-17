let count = 0;
count = Number(count);

// upButton
document.getElementById("upBtn").onclick = function () {
    count += 1;
    document.getElementById("label").textContent = count;
}

// downButton
document.getElementById("downBtn").onclick = function () {
    count -= 1;
    document.getElementById("label").textContent = count;
}

// resetButton
document.getElementById("resetBtn").onclick = function() {
    count = 0;
    count = Number(count);
    document.getElementById("label").textContent = count;
}