const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

const etchBody = document.createElement("div");
etchBody.className = "etch-body";


const etchTitle = document.createElement("h1");
etchTitle.innerText = "Etch-A-Sketch";
etchTitle.className = "etch-title";

etchBody.appendChild(etchTitle)
etchBody.appendChild(gridContainer);
document.body.appendChild(etchBody);


for(let i = 0; i < 16; i++) {
    for (let x = 0; x < 16; x++)
    makeBox();
}



const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    addEventListener("click", () => {
        box.style.background = black;
    });
});

function makeBox() {
    const box = document.createElement("div");
    box.className = "box";
    gridContainer.appendChild(box);
}

