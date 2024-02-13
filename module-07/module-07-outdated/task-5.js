const inputRef = document.querySelector("input#name-input");
const spanRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = e.target.value;
  }
});
