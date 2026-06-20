// Event Delegation
const main = document.querySelector("main");
let sum = 0;
main.addEventListener("click", (e) => {
  sum += Number(e.target.textContent);
  console.log(sum);
});
