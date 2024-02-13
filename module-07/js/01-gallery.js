import { galleryItems } from "./gallery-items.js";
const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const { classList, dataset, attributes } = evt.target;
  if (!classList.contains("gallery__image")) {
    return;
  }
  const modal = createModal({ dataset, attributes });
  modal.show(onClose(modal));
}

function createModal({ dataset, attributes }) {
  const description = attributes.alt.value;

  return basicLightbox.create(`
  	<img
        class="gallery__image"
        src="${dataset.source}"
        alt="${description}"
        width="800" height="600"
      />
      <p>${description}</p>
  `);
}

function onClose(instance) {
  document.addEventListener("keydown", closeHandler);
  function closeHandler(evt) {
    const isEscape = evt.code === "Escape";
    if (!isEscape) {
      return;
    }
    instance.close();
    document.removeEventListener("keydown", closeHandler);
  }
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
