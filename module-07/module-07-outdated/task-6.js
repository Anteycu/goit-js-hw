const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("change", (e) => {
  if (e.target.value.length === 6) {
    classSwitcher("valid", "invalid", e.target);
  } else {
    classSwitcher("invalid", "valid", e.target);
  }
});

function classSwitcher(classToAdd, classToRemove, target) {
  target.classList.add(`${classToAdd}`);
  target.classList.remove(`${classToRemove}`);
}
