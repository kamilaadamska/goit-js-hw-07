import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');
const galleryMarkup = [];

function makeGallery(galleryObjects) {
  for (const galleryObject of galleryObjects) {
    const galleryItemMarkup = `<li>
<a class="gallery__link" href="${galleryObject.original}">
  <img class="gallery__image" src="${galleryObject.preview}" alt="${galleryObject.description}" />
</a>
</li>`;

    galleryMarkup.push(galleryItemMarkup);
  }
  galleryListEl.innerHTML = galleryMarkup.join('');
}

makeGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captions: !0,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
});
