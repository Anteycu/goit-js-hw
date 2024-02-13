import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  const { classList } = evt.target;
  if (!classList.contains('gallery__image')) {
    return;
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.on('closed.simplelightbox', function () {
    lightbox.refresh();
  });
}

const createMarkup = arr => {
  return arr.map(item => {
    const { preview, original, description } = item;
    return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  });
};
galleryRef.insertAdjacentHTML('beforeend', createMarkup(galleryItems).join(''));
