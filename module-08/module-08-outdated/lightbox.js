"use strict"
// Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].//[data-action="close-lightbox"]
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии 
// модального окна, пока грузится изображение, мы не видели предыдущее.


export const createLightbox = () => {
const lightboxRef = document.querySelector(".lightbox");
const ulRef = document.querySelector(".js-gallery");
const closeModalButton = document.querySelector('button[data-action="close-lightbox"]');
const lightboxContentRef = document.querySelector(".lightbox__content");
const lightBoxImg = document.querySelector(".lightbox__image")

ulRef.addEventListener("click", onOpenLightbox);
closeModalButton.addEventListener("click", onCloseModal);
lightboxContentRef.addEventListener("click", onLightboxContentClick);

function onOpenLightbox () {
    window.addEventListener("keydown", onPressEscape);
    lightboxRef.classList.add("is-open");
};

function onCloseModal (e) {
    window.removeEventListener("keydown", onPressEscape);
    lightboxRef.classList.remove("is-open");
    lightBoxImg.alt = "";
    lightBoxImg.src = "";
};

function onLightboxContentClick (e) {
    if (e.target === e.currentTarget) {
        onCloseModal();
    }
};

function onPressEscape (event) {
    if (event.code === "Escape") {
        onCloseModal();
    }
}

}

