let intro = document.createElement("div");
intro.classList.add("intro");
intro.textContent = "Welcome to ETCH-A-SKETCH!"
document.body.appendChild(intro);

let subtitle = document.createElement("div");
subtitle.classList.add("subtitle");
subtitle.textContent = "Select a grid size and start to draw!"
document.body.appendChild(subtitle);

let gridBox = document.createElement("button");
gridBox.classList.add("gridBox");
gridBox.textContent = "Select squares per grid's side"
document.body.appendChild(gridBox);
gridBox.addEventListener("click", () => {
    gridCall();
})

let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);


let mouseTrigger;
document.addEventListener("mousedown", () => {
    mouseTrigger = true;
})

document.addEventListener("mouseup", () => {
    mouseTrigger = false;
})

let size = 32;

function creatGrid (size){

    container.innerHTML = "";

    for (let i = 1; i <= size; i++){

        let line = document.createElement("div")
        line.classList.add("line");
        container.appendChild(line);

        for (let j = 1; j <= size; j++) {
        let square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mousedown", (e) => {
            e.preventDefault();
            square.style.backgroundColor = "blue";
            })

        square.addEventListener("mouseover", (e) => {
            if(mouseTrigger){
            e.preventDefault();
            square.style.backgroundColor = "blue";
            }
        })

        line.appendChild(square);
        }
    }
}

let currentSize = size;

creatGrid(Number(size));

function gridCall(){
    let size = Number(prompt("Enter grid size (max 128):", currentSize));

    if (isNaN(size) || size < 1) size = 32;
    if (size > 128) size = 128;

    currentSize = size;

    creatGrid(size);
}
