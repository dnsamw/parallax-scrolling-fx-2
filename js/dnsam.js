let clouds = document.getElementById("clouds");
let mountains = document.getElementById("mountains");
let castle = document.getElementById("castle");

let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  clouds.style.left = value * 0.25 + "px";
  mountains.style.top = value * 0.5 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.2 + "px";
  btn.style.marginTop = value * 1.2 + "px";
  header.style.top = value * 0.5 + "px";
});
