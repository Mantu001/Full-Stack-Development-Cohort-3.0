// // Event Delegation
// const main = document.querySelector("main");
// let sum = 0;
// main.addEventListener("click", (e) => {
//   sum += Number(e.target.textContent);
//   console.log(sum);
// });

// ********************************* Project
// Start button pe click karo ye apna position change karega
const main = document.querySelector("main");
const btn = document.querySelector("button");
const t = document.querySelector(".time");
const s = document.querySelector(".score");
const overlay = document.querySelector("#overlay");
// 1. Create the box once and add it to the page immediately, but keep it hidden
const box = document.createElement("div");
box.classList.add("box");
box.style.display = "none"; // Hide it until the game starts
main.append(box);
let time = 0;
let score = 0;
let move;
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
const randomBox = () => {
  t.innerHTML = `<p>Time : ${time++} sec </p>`;
  const top = Math.floor(Math.random() * 90);
  const left = Math.floor(Math.random() * 90);
  box.style.left = left + "%";
  box.style.top = top + "%";
};
btn.addEventListener("click", () => {
  time = 0;
  score = 0;
  s.innerHTML = `<p class="score">Score : ${score}</p>`;
  box.style.display = "block"; // Make the box visible when game starts
  randomBox();
  move = setInterval(() => {
    box.style.backgroundColor = randomColor();
    randomBox();
  }, 1000);
  setTimeout(() => {
    clearInterval(move);
    box.style.display = "none"; // Hide the box when game ends
    overlay.style.display = "flex";
    console.log("stopped");
  }, 10000);
});
box.addEventListener("click", () => {
  score++;
  s.innerHTML = `<p class="score">Score : ${score}</p>`;
});
