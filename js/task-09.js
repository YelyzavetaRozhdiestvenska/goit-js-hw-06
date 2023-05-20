function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const body = document.querySelector("body");
const changeColor = document.querySelector("span.color")

button.addEventListener("click", onClick);

function onClick(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  changeColor.textContent = color;
}
console.dir(changeColor);