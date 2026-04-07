let container = document.querySelector("#container");

let mouseTrigger;

document.addEventListener("mousedown", () => {
    mouseTrigger = true;
})

document.addEventListener("mouseup", () => {
    mouseTrigger = false;
})

for (let i = 1; i <= 16; i++){

    let line = document.createElement("div")
    line.classList.add("line");
    container.appendChild(line);

    for (let i = 1; i <= 16; i++) {
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

