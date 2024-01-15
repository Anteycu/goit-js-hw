function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createInitialArr(num, initialSize = 30) {
  const initialArr = [];
  let elemSize = initialSize;

  for (let i = 0; i < Number(num); i += 1) {
    const step = 10;
    initialArr.push(elemSize);
    elemSize += step;
  }
  return initialArr;
}

const createBoxes = (num) => {
  const boxesMarkup = createInitialArr(num).reduce((acc, elem) => {
    const box = `<div style="background: ${getRandomHexColor()}; width: ${elem}px; height: ${elem}px"></div>`;
    acc += box;
    return acc;
  }, "");
  return boxesMarkup;
};

const destroyBoxes = () => {
  collectionRef.innerHTML = "";
};

const collectionRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const controlsElemArr = [...controlsRef.children];

const createBtnRef = controlsElemArr.find((elem) =>
  elem.dataset.hasOwnProperty("create")
);
const destroyBtnRef = controlsElemArr.find((elem) =>
  elem.dataset.hasOwnProperty("destroy")
);

createBtnRef.addEventListener("click", createHandler);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createHandler(evt) {
  const {
    target: { previousElementSibling },
  } = evt;
  collectionRef.insertAdjacentHTML(
    "beforeend",
    createBoxes(previousElementSibling.value)
  );
}
