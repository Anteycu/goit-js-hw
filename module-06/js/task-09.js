function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetRef = document.querySelector(".widget");
const bodyRef = document.querySelector("body");
const widgetElemArr = [...widgetRef.children];
const buttonRef = widgetElemArr.find(
  (elem) => elem.className === "change-color"
);
const pRef = widgetElemArr.find((elem) => elem.children);
const spanRef = [...pRef.children].find((elem) => elem.className === "color");

function changeColorHandler() {
  const generatedColor = getRandomHexColor();
  bodyRef.style.backgroundColor = generatedColor;
  spanRef.textContent = generatedColor;
}

buttonRef.addEventListener("click", changeColorHandler);
