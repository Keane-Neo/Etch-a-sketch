const body = document.querySelector("body");

// Create container for all buttons
const createButtons = () => {
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  // Button to set number of boxes
  const btn = document.createElement("button");
  btn.innerText = "Set Grid Size";

  buttons.appendChild(btn);

  btn.addEventListener("click", () => {
    // Reset grid
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
      frame.removeChild(item);
    });

    // Create new grid based on user input
    let size = "";

    do {
      size = prompt("Enter Grid Size (Limit: 50)");
    } while (size > 50);

    document.documentElement.style.setProperty("--num-col-row", size);
    createGrid(size);
  });

  body.appendChild(buttons);
};

createButtons();

const frame = document.createElement("div");
frame.classList.add("frame");
body.appendChild(frame);

const createGrid = (num) => {
  for (let i = 0; i < num * num; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    frame.appendChild(gridItem);
  }
};

// Hover Effect
const addClass = (box) => {
  box.classList.toggle("selected");
};

const removeClass = (box) => {
  box.classList.toggle("selected");
};

const boxes = document.querySelectorAll(".grid-item");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => addClass(box));
  box.addEventListener("mouseout", () => removeClass(box));
});
