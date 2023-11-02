const container = document.querySelector(".container");
const gridSizeInput = document.querySelector(".range");
const colorPicker = document.querySelector(".color");
const randomColor = document.querySelector(".random");
const clearButton = document.querySelector(".clear");
const eraserButton = document.querySelector(".eraser");
const gridsCount = document.querySelector(".grids-count");

let currentColor = "#000";

function setDrawingColor(color) {
    currentColor = color;
    gridsCount.style.color = currentColor === "#FFF" ? "#000" : `${currentColor}`;
}

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    while (container.firstChild) container.removeChild(container.firstChild);
    for (let i = 0; i < size * size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.addEventListener("mouseover", function () {
            gridDiv.style.backgroundColor = currentColor;
        });
        container.appendChild(gridDiv);
    }
    gridsCount.innerText = `${size} x ${size}`;
}

function setRandomColor() {
    currentColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    gridsCount.style.color = `${currentColor}`;
}

gridSizeInput.addEventListener("input", function (event) {
    const gridSize = event.target.value;
    createGrid(gridSize);
});

colorPicker.addEventListener("input", function (event) {
    const selectedColor = event.target.value;
    setDrawingColor(selectedColor);
});

randomColor.addEventListener("click", setRandomColor)

clearButton.addEventListener("click", function () {
    createGrid(gridSizeInput.value);
});

eraserButton.addEventListener("click", function () {
    setDrawingColor("#FFF");
});

window.onload = () => {
    createGrid(12);
    setDrawingColor("rgb(0, 0, 0)");
};
