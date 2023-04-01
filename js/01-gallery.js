import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');
const galleryMarkup = [];

function makeGallery(galleryObjects) {
  for (const galleryObject of galleryObjects) {
    const galleryItemMarkup = `<div class="gallery__item">
  <a class="gallery__link" href="${galleryObject.original}">
    <img
      class="gallery__image"
      src="${galleryObject.preview}"
      data-source="${galleryObject.original}"
      alt="${galleryObject.description}"
    />
  </a>
</div>`;

    galleryMarkup.push(galleryItemMarkup);
  }
  galleryListEl.innerHTML = galleryMarkup.join('');
}

galleryListEl.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.target.src = event.target.dataset.source;

  const lightbox = basicLightbox.create(
    `<img src="${event.target.src}" alt="${event.target.alt}">`
  );
  event.target = lightbox.show();
});

makeGallery(galleryItems);
