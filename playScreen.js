const playScreen = document.querySelector(".game__playScreen");
const landingPage = document.querySelector(".landingPage");
const startBtn = document.querySelector(".landingPage__startBtn");
const resetBtn = document.querySelector(".sideBar__resetScreen");
let inventory = document.querySelector("#sideBar__inventory");
const pickAxe = document.querySelector(".sideBar__pickAxe");
const shovel = document.querySelector(".sideBar__shovel");
const axe = document.querySelector(".sideBar__axe");

let selectedTool = "";
let isEmpty = true;
let clickedOnInventory = false;

const blocksObj = {
  0: "stone",
  1: "dirt",
  2: "grass",
  3: "log",
  4: "leaves",
  5: "cloud",
  6: "none",
};

const blocksMatrix = [
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6],
  [6, 6, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 6, 6],
  [6, 6, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 6, 6, 6],
  [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// creating the playscreen
function draw() {
  for (let i = 0; i < blocksMatrix.length; i++) {
    for (let j = 0; j < blocksMatrix[i].length; j++) {
      const block = document.createElement("div");
      block.classList.add(blocksObj[blocksMatrix[i][j]]);
      playScreen.appendChild(block);
    }
  }
}

// start new game
startBtn.addEventListener("click", () => {
  landingPage.classList.toggle("display-none");
  playScreen.classList.toggle("display-none");
  draw();
});

// reset the play screen
resetBtn.addEventListener("click", (e) => {
  playScreen.innerHTML = "";
  draw();
  resetToolsClasses();
  resetInventory();
});

// selecting inventory
inventory.addEventListener("click", () => {
  if (!isEmpty) {
    clickedOnInventory = true;
  }
});

// selecting the pickaxe
pickAxe.addEventListener("click", () => {
  selectedTool = "pickaxe";
  activeTool(pickAxe, shovel, axe);
});

// selecting the shovel
shovel.addEventListener("click", () => {
  selectedTool = "shovel";
  activeTool(shovel, pickAxe, axe);
});

// selecting the axe
axe.addEventListener("click", () => {
  selectedTool = "axe";
  activeTool(axe, shovel, pickAxe);
});

// main eventlistener
playScreen.addEventListener("click", (e) => {
  switch (selectedTool) {
    case "pickaxe":
      if (e.target.classList.value === "stone") {
        updatingElements(e);
      } else {
        flashRed(pickAxe);
      }
      break;

    case "shovel":
      if (
        e.target.classList.value === "dirt" ||
        e.target.classList.value === "grass"
      ) {
        updatingElements(e);
      } else {
        flashRed(shovel);
      }
      break;

    case "axe":
      if (
        e.target.classList.value === "log" ||
        e.target.classList.value === "leaves"
      ) {
        updatingElements(e);
      } else {
        flashRed(axe);
      }
      break;
  }

  if (!isEmpty && clickedOnInventory) {
    let blockClass = `${inventory.classList.value}`;
    e.target.classList.add("fade-in");
    e.target.classList.add(blockClass);
    setTimeout(function () {
      e.target.classList.remove("fade-in");
    }, 2000);
    e.target.classList.remove("none");
    resetInventory();
  }
});

// set the selected tool
function activeTool(tool1, tool2, tool3) {
  tool1.classList.add("active");
  tool2.classList.remove("active");
  tool3.classList.remove("active");
}

// inpropper tool detected
function flashRed(tool) {
  if (!isEmpty && clickedOnInventory) return;
  tool.classList.add("red");
  setTimeout(function () {
    tool.classList.remove("red");
  }, 100);
}

// reset tool classes
function resetToolsClasses() {
  pickAxe.classList = "";
  pickAxe.classList.add("sideBar__pickAxe", "btn");
  shovel.classList = "";
  shovel.classList.add("sideBar__shovel", "btn");
  axe.classList = "";
  axe.classList.add("sideBar__axe", "btn");
}

// reset inventory classes
function resetInventory() {
  inventory.classList = "";
  isEmpty = true;
  clickedOnInventory = false;
}

// adding fadeout animation, updating inventory and block classes, updating inventory status
function updatingElements(event) {
  inventory.classList = "";
  let blockClass = `${event.target.classList.value}`;
  inventory.classList.add(blockClass);
  event.target.classList.add("fade-out");
  setTimeout(function () {
    event.target.classList.remove(blockClass);
    event.target.classList.remove("fade-out");
  }, 2000);
  event.target.classList.add("none");
  isEmpty = false;
}
