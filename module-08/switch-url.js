"use strict"

export const switchURL = () => {
    const lightBoxImg = document.querySelector(".lightbox__image")
    const ulRef = document.querySelector(".js-gallery")
    
    ulRef.addEventListener("click", OnGalleryClick);
    
    function OnGalleryClick(evt) {
    evt.preventDefault();
    
    const imageRef = evt.target
    const largeImgURL = evt.target.dataset.source;
    const largeImgAlt =  evt.target.alt;
    
    if (imageRef.nodeName !== "IMG") {
    return
    }
    // console.dir(evt.target.dataset.source)
    setLargeImgSrc(largeImgURL);
    setLargeImgAlt(largeImgAlt);
    }
    
    function setLargeImgSrc (url) {
        lightBoxImg.src = url
    };
    
    function setLargeImgAlt (alt) {
        lightBoxImg.alt = alt;
    };
}