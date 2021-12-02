const playScreen = document.querySelector(".play-screen");

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
  [6, 6, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6],
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

export function draw() {
  for (let i = 0; i < blocksMatrix.length; i++) {
    for (let j = 0; j < blocksMatrix[i].length; j++) {
      const block = document.createElement("div");
      block.classList.add(blocksObj[blocksMatrix[i][j]]);
      playScreen.appendChild(block);
    }
  }
}

// const blocksMatrix = [
//     ["none","none","cloud","cloud","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","cloud","cloud", "none","none","none","none","none","none","none","none","none","none","none","cloud","cloud","none","none","none","none",],
//     ["none","none","none", "none","none","none","none","none","none","none","none","none","none","cloud","cloud","cloud","cloud","none","none","none",],
//     ["none","none","none", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","none","leaves", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","leaves","leaves", "leaves","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","leaves","leaves", "leaves","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","none","log", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","none","log", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["grass","grass","dirt", "grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass",],
//     ["dirt","dirt","dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt",],
//     ["dirt","dirt","dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt",],
//     ["dirt","dirt","dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
// ];
