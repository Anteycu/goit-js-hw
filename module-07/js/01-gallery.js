import { galleryItems } from "./gallery-items.js";
const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onClick);

// вирішити протікання пам'яті

function onClick(evt) {
  evt.preventDefault();
  const modal = createModal(evt.target);
  // відв'язати від модалки
  modal.show(document.addEventListener("keydown", closeHandler.bind(modal)));
  // прокинути результат closeHandler та активувати закриття модалки
}

function createModal(elem) {
  const {
    dataset: { source },
    attributes: { alt },
  } = elem;
  const description = alt.value;

  return basicLightbox.create(`
  	<img
        class="gallery__image"
        src="${source}"
        alt="${description}"
        width="800" height="600"
      />
      <p>${description}</p>
  `);
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
galleryRef.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

// зробити isEscape
function closeHandler(evt) {
  if (evt.code === "Escape") {
    this.close();
  }
  console.dir(evt.currentTarget);
}
