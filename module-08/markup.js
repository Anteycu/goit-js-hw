"use strict"

import {default as galleryImages} from "./gallery-items.js"

{/* <li class="gallery__item">
        <a
          class="gallery__link"
          href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
        >
          <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
          />
        </a>
</li> */}

// const liRef = document.createElement("li");
// const aRef = document.createElement("a");
// const imgRef = document.createElement("img");

// liRef.classList.add("gallery__item")
// aRef.classList.add("gallery__link")
// imgRef.classList.add("gallery__image")

// imgRef.setAttribute("data-source", "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg")

export const createMarkup = () => galleryImages.reduce((acc, element) => {
   const ulRef = document.querySelector(".js-gallery")
    // const fragment = document.createDocumentFragment();
const liRef = document.createElement("li");
 const aRef = document.createElement("a");
 const imgRef = document.createElement("img");

liRef.classList.add("gallery__item");
aRef.classList.add("gallery__link");
imgRef.classList.add("gallery__image");

aRef.setAttribute("href", `${element.original}`);
imgRef.setAttribute("src", `${element.preview}`);
imgRef.setAttribute("data-source", `${element.original}`);
imgRef.setAttribute("alt", `${element.description}`);

aRef.appendChild(imgRef);
liRef.appendChild(aRef);

// fragment.append(liRef, aRef, imgRef)//как то можно одним методом добавлять множество детей детям через запятую?
acc+=liRef
// console.log(acc)
ulRef.append(liRef)
// return ulRef

}, '')


