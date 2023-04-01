import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');
const galleryMarkup = [];

function makeGallery(galleryObject) {
  for (const galleryItem of galleryItems) {
    const galleryItemMarkup = `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`;
    galleryMarkup.push(galleryItemMarkup);
  }
  galleryListEl.innerHTML = galleryMarkup.join('');
}

makeGallery(galleryItems);
