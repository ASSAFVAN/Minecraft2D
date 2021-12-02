import { draw } from "./playScreen.js";

const landingPage = document.getElementById("landing-page");
const startBtn = document.querySelector(".start-btn");
const playScreen = document.querySelector(".play-screen");
const inventory = document.querySelector(".inventory");

startBtn.addEventListener("click", () => {
  landingPage.classList.toggle("display-none");
  playScreen.classList.toggle("display-none");
  inventory.classList.toggle("display-none");
  draw();
});
