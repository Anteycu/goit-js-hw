const inputRef = document.querySelector("#font-size-control");
const outputRef = document.querySelector("#text");

inputRef.addEventListener("input", fontSizeHandler);

function fontSizeHandler(evt) {
  const {
    currentTarget: { value },
  } = evt;
  outputRef.style.fontSize = `${value}px`;
}
