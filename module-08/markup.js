"use strict";

import { default as galleryImages } from "./gallery-items.js";

export const createMarkup = () =>
  galleryImages.reduce((acc, element) => {
    const ulRef = document.querySelector(".js-gallery");
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
    acc += liRef;
    // console.log(acc)
    ulRef.append(liRef);
    // return ulRef
  }, "");
