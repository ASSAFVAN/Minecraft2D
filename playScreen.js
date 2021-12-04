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
  [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
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
      block.setAttribute(`row`, i);
      block.setAttribute(`column`, j);
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
  pickAxe.classList.add("active");
  shovel.classList.remove("active");
  axe.classList.remove("active");
});

// selecting the shovel
shovel.addEventListener("click", () => {
  selectedTool = "shovel";
  shovel.classList.add("active");
  pickAxe.classList.remove("active");
  axe.classList.remove("active");
});

// selecting the axe
axe.addEventListener("click", () => {
  selectedTool = "axe";
  axe.classList.add("active");
  shovel.classList.remove("active");
  pickAxe.classList.remove("active");
});

// main eventlistener
playScreen.addEventListener("click", (e) => {
  switch (selectedTool) {
    case "pickaxe":
      if (e.target.classList.value === "stone") {
        inventory.classList.add(`${e.target.classList.value}`);
        e.target.classList.remove("stone");
        e.target.classList.add("none");
        isEmpty = false;
      } else {
        flashRed();
      }
      break;

    case "shovel":
      if (
        e.target.classList.value === "dirt" ||
        e.target.classList.value === "grass"
      ) {
        inventory.classList = "";
        inventory.classList.add(`${e.target.classList.value}`);
        e.target.classList.remove("dirt", "grass");
        e.target.classList.add("none");
        isEmpty = false;
      } else {
        flashRed();
      }
      break;

    case "axe":
      if (
        e.target.classList.value === "log" ||
        e.target.classList.value === "leaves"
      ) {
        inventory.classList = "";
        inventory.classList.add(`${e.target.classList.value}`);
        e.target.classList.remove("log", "leaves");
        e.target.classList.add("none");
        isEmpty = false;
      } else {
        flashRed();
      }
      break;
  }

  if (!isEmpty && clickedOnInventory) {
    console.log(inventory.classList.value);
    e.target.classList.add(`${inventory.classList.value}`);
    e.target.classList.remove("none");
    resetInventory();
  }
});

// inproper tool detected
function flashRed() {
  let tool;
  if (selectedTool === "pickaxe") tool = pickAxe;
  if (selectedTool === "shovel") tool = shovel;
  if (selectedTool === "axe") tool = axe;
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
