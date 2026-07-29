// ===========================
// LCA CombatOS v1.0
// ===========================

console.log("LCA CombatOS Started");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Welcome to Legacy Combat Academy!");
  });
});
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});