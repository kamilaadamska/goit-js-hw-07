import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');
const galleryMarkup = [];

function makeGallery(galleryObjects) {
  for (const galleryObject of galleryObjects) {
    const galleryItemMarkup = `<li class="gallery__item>
<a class="gallery__item" href="${galleryObject.original}">
  <img class="gallery__image" src="${galleryObject.preview}" alt="${galleryObject.description}" />
</a>
</li>`;

    galleryMarkup.push(galleryItemMarkup);
  }
  galleryListEl.innerHTML = galleryMarkup.join('');
}

makeGallery(galleryItems);
