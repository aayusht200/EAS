const content = document.getElementById("content");

let current = "blackwhite";
let hover = true;
const contentHeading = document.createElement("h2");
contentHeading.textContent = "Etch A Sketch";
contentHeading.classList.add("contentHeading");
content.appendChild(contentHeading);

const drawGrid = document.createElement("div");
drawGrid.classList.add("drawGrid");
drawGrid.style.height = "70%";
drawGrid.style.width = "70%";
drawGrid.style.backgroundColor = "white";
drawGrid.style.display = "flex";
drawGrid.style.flexWrap = "wrap";

window.addEventListener("load", () => {
  for (let index = 0; index < 16 * 16; index++) {
    createDiv(16);
  }
  for (let index = 0; index < 25 * 25; index++) {
    createLeftSideBar(10);
  }
  for (let index = 0; index < 25 * 25; index++) {
    createRightSideBar(10);
  }
});

const gridSizeBtn = document.createElement("button");
gridSizeBtn.classList.add("gridSizeBtn");
gridSizeBtn.textContent = "Select Grid Size";

gridSizeBtn.addEventListener("click", () => {
  drawGrid.innerHTML = "";
  const gridSize = prompt("Enter the Grid Size");
  for (i = 0; i < gridSize * gridSize; i++) createDiv(gridSize);
});

const buttonArea = document.createElement("div");
buttonArea.classList.add("buttonArea");

const blackWhite = document.createElement("button");
blackWhite.textContent = "Black & White";
blackWhite.classList.add("blackWhite");
blackWhite.addEventListener("click", () => {
  current = "blackwhite";
});

const colored = document.createElement("button");
colored.textContent = "Colored";
colored.classList.add("colored");
colored.addEventListener("click", () => {
  current = "colored";
});

const clearGrid = document.createElement("button");
clearGrid.textContent = "Clear Grid";
clearGrid.classList.add("clearGrid");
clearGrid.addEventListener("click", () => {
  const gridDiv = [...document.getElementsByClassName("gridDiv")];
  gridDiv.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

const dissappear = document.createElement("button");
dissappear.classList.add("dissappear");
dissappear.textContent = "Dissappearing";
dissappear.addEventListener("click", () => {
  hover = !hover;
});

function createDiv(num) {
  const div = document.createElement("div");
  div.classList.add("gridDiv");
  drawGrid.appendChild(div);
  div.style.flex = `1 0 calc(100% / ${num})`;
  div.addEventListener("mouseenter", () => {
    applyColor(div, current, hover);
  });
}

content.appendChild(drawGrid);

buttonArea.appendChild(blackWhite);
buttonArea.appendChild(colored);
buttonArea.appendChild(clearGrid);
buttonArea.appendChild(dissappear);
buttonArea.appendChild(gridSizeBtn);
content.appendChild(buttonArea);

function applyColor(div, current, hover) {
  if (current == "blackwhite") {
    div.style.backgroundColor = "black";
  } else if (current == "colored") {
    div.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  }
  if (hover) {
    setTimeout(() => {
      div.style.backgroundColor = "white";
    }, 300);
  }
}
function randomColor() {
  return Math.floor(Math.random() * 255);
}

const leftSideBar = document.createElement("div");
leftSideBar.classList.add("leftSideBar");
leftSideBar.style.minWidth = "100%";
leftSideBar.style.minHeight = "100%";
leftSideBar.style.backgroundColor = "white";
leftSideBar.style.display = "flex";
leftSideBar.style.flexWrap = "wrap";

const rightSideBar = document.createElement("div");
rightSideBar.classList.add("rightSideBar");
rightSideBar.style.minWidth = "100%";
rightSideBar.style.minHeight = "100%";
rightSideBar.style.backgroundColor = "white";
rightSideBar.style.display = "flex";
rightSideBar.style.flexWrap = "wrap";

function createRightSideBar(num) {
  const div = document.createElement("div");
  div.classList.add("rightSideBar");
  rightSideBar.appendChild(div);
  div.style.flex = `1 0 calc(100% / ${num})`;
  div.addEventListener("mouseenter", () => {
    applyColor(div, current, true);
  });
}

function createLeftSideBar(num) {
  const div = document.createElement("div");
  div.classList.add("leftSideBar");
  leftSideBar.appendChild(div);
  div.style.flex = `1 0 calc(100% / ${num})`;
  div.addEventListener("mouseenter", () => {
    applyColor(div, current, true);
  });
}

const leftBar = document.getElementById("leftBar");
leftBar.append(leftSideBar);
const rightBar = document.getElementById("rightBar");
rightBar.append(rightSideBar);
