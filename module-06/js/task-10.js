function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// отримуємо доступ
const collectionRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const controlsElemArr = [...controlsRef.children];
const createBtnRef = controlsElemArr.find((elem) =>
  elem.dataset.hasOwnProperty("create")
);
const destroyBtnRef = controlsElemArr.find((elem) =>
  elem.dataset.hasOwnProperty("destroy")
);

// додаємо слухачів
createBtnRef.addEventListener("click", createHandler);
destroyBtnRef.addEventListener("click", destroyHandler);

// прописуємо іменні колбеки обробники подій
function createHandler(evt) {
  const {
    currentTarget: { previousElementSibling },
  } = evt;
  collectionRef.insertAdjacentHTML(
    "beforeend",
    createBoxes(previousElementSibling.value)
  );
}
function destroyHandler() {
  destroyBoxes();
}

// прописуємо механізм створення боксів
function createBoxes(num) {
  const boxesMarkup = createInitialArr(num).reduce((acc, elem) => {
    const box = `<div style="background: ${getRandomHexColor()}; width: ${elem}px; height: ${elem}px"></div>`;
    acc += box;
    return acc;
  }, "");
  return boxesMarkup;
}

// створюємо допоміжну функцію для формування початкового масиву розмірів
function createInitialArr(num, initialSize = 30) {
  const initialArr = [];
  let elemSize = Number(initialSize);

  for (let i = 0; i < Number(num); i += 1) {
    const step = 10;
    initialArr.push(elemSize);
    elemSize += step;
  }
  return initialArr;
}

// прописуємо механізм видалення боксів
function destroyBoxes() {
  collectionRef.innerHTML = "";
}
