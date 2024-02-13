const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
console.log(inputRef.value);
spanRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener("input", (e) => {
  spanRef.style.fontSize = `${e.target.value}px`;
  console.log(spanRef.style.fontSize);
});
