const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red", "green", "violet", "blue", "dark"];
button.addEventListener("click", changeBackground);
body.style.backgroundColor = 'violet';

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}