const playScreen = document.querySelector(".game__playScreen");
const landingPage = document.querySelector(".landingPage");
const startBtn = document.querySelector(".landingPage__startBtn");
const resetBtn = document.querySelector(".sideBar__resetScreen");
let inventory = document.querySelector(".sideBar__inventory");
const pickAxe = document.querySelector(".sideBar__pickAxe");
const shovel = document.querySelector(".sideBar__shovel");
const axe = document.querySelector(".sideBar__axe");

let theGame = {
  selectedTool: "",
  clickedOnInventory: false,
  isEmptyInventory: true,
};

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

startBtn.addEventListener("click", () => {
  landingPage.classList.toggle("display-none");
  playScreen.classList.toggle("display-none");
  //   inventory.classList.toggle("display-none");
  draw();
});

resetBtn.addEventListener("click", (e) => {
  playScreen.innerHTML = "";
  draw();
  resetToolsClasses();
});

pickAxe.addEventListener("click", () => {
  theGame.selectedTool = "pickaxe";
  pickAxe.classList.add("active");
});

playScreen.addEventListener("click", (e) => {
  switch (theGame.selectedTool) {
    case "pickaxe":
      console.log(theGame.selectedTool);

      console.log(e.target.classList.value);

      if (e.target.classList.value === blocksObj[0]) {
        e.target.classList.remove("stone");
        e.target.classList.add("none");
        // inventory.classList = "";
        inventory.classList.add("stone");
      } else {
        flashRed();
      }
  }
});

function flashRed() {
  let selectedTool;
  if (theGame.selectedTool === "pickaxe") selectedTool = pickAxe;
  if (theGame.selectedTool === "shovel") selectedTool = shovel;
  if (theGame.selectedTool === "axe") selectedTool = axe;
  selectedTool.classList.add("red");
  setTimeout(function () {
    selectedTool.classList.remove("red");
  }, 100);
}

function resetToolsClasses() {
  pickAxe.classList = "";
  pickAxe.classList.add("sideBar__pickAxe", "btn");
  shovel.classList = "";
  shovel.classList.add("sideBar__shovel", "btn");
  axe.classList = "";
  axe.classList.add("sideBar__axe", "btn");
}
