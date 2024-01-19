import { galleryItems } from "./gallery-items.js";
const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const {
    dataset: { source },
    attributes: { alt },
  } = evt.target;
  const description = alt.value;

  const instance = basicLightbox.create(`
  	<img
        class="gallery__image"
        src="${source}"
        alt="${description}"
        width="800" height="600"
      />
      <p>${description}</p>
  `);
  instance.show();
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

// console.log(galleryItems);
