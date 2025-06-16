const content = document.getElementById("content");
// console.log(content);

const contentHeading = document.createElement("h2");
contentHeading.textContent = "Etch A Sketch";
contentHeading.classList.add("contentHeading");
content.appendChild(contentHeading);

const drawGrid = document.createElement("div");
drawGrid.classList.add("drawGrid");
drawGrid.style.minWidth = "80%";
drawGrid.style.minHeight = "70%";
drawGrid.style.backgroundColor = "white";
drawGrid.style.display = "flex";
drawGrid.style.flexWrap = "wrap";

window.addEventListener("load", () => {
  for (let index = 0; index < 16 * 16; index++) {
    createDiv(16);
  }
});

function createDiv(num) {
  const div = document.createElement("div");
  div.classList.add("gridDiv");
  drawGrid.appendChild(div);
  div.style.flex = `1 0 calc(100% / ${num})`;
}
const gridDiv = content.getElementsByClassName("gridDiv");
content.appendChild(drawGrid);
console.log([...gridDiv]);
