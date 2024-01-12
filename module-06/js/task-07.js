const inputRef = document.querySelector("#font-size-control");
const outputRef = document.querySelector("#text");

const fontSizeHandler = (evt) => {
  const {
    currentTarget: { value },
  } = evt;
  outputRef.style.fontSize = `${value}px`;
};

inputRef.addEventListener("input", fontSizeHandler);
