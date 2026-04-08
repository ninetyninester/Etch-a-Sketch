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

let gridSize = document.createElement("input");
gridSize.classList.add("gridSize");
gridSize.type = "number";
document.body.appendChild(gridSize);
gridSize.value = 16;

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

creatGrid(Number(gridSize.value));

gridSize.addEventListener("change", () => {
    creatGrid(Number(gridSize.value));
});
