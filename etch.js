let isDown = false;
let eraseBool = false;
let drawBool = true;
let rainbowBool = false;

const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

const etchBody = document.createElement("div");
etchBody.className = "etch-body";
const etchTitle = document.createElement("h1");
etchTitle.innerText = "Etch-A-Sketch";
etchTitle.className = "etch-title";
const buttonContainer = document.getElementById('button-container');

etchBody.appendChild(etchTitle)
etchBody.appendChild(gridContainer);
etchBody.appendChild(buttonContainer);
document.body.appendChild(etchBody);

for(let i = 0; i < 16; i++) {
    for (let x = 0; x < 16; x++) {
        makeBox(); 
    }
}
//Event listeners to make our buttons work as intended
const erase = document.getElementById('eraser');
erase.addEventListener("click", () => {
    resetBool();
    eraseBool = true;
});

const draw = document.getElementById('draw');
draw.addEventListener("click", () => {
    resetBool();
    drawBool = true;
});

const rainbow = document.getElementById('rainbow-mode');
rainbow.addEventListener('click', () => {
    resetBool();
    rainbowBool = true;
});

const eraseAll = document.getElementById('erase-all');
eraseAll.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.style.background = 'antiquewhite';
    })
})

//Event listeners to check if we are holding mouse down
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mousedown", () => {
        isDown = true;
    });
    box.addEventListener("mouseup", () => {
        isDown = false;
    });
    box.addEventListener("mouseover", () => {
        if(isDown){
            coloring(box);
        }
    });
    box.addEventListener("click", () => {
            coloring(box);
    });
});


//Functions to make the grid, color and reset the buttons
function makeBox() {
    const box = document.createElement("div");
    box.className = "box";
    gridContainer.appendChild(box);
}

function coloring(box) { 
    if(drawBool) {
        box.style.background = 'black';
    }

    else if(eraseBool) {
        box.style.background = 'antiquewhite';
    }

    else if(rainbowBool) {
        box.style.background = rainbowFunc();
    }
}

function resetBool() {
    drawBool =  false;
    eraseBool = false;
    rainbowBool = false;
}

function rainbowFunc(){
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

