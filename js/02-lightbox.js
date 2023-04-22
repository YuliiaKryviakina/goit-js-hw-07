import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

function createGalleryItems(galleryItems) {
    return galleryItems
    .map(({ original, preview, description }) => {
        return `<li class="gallery__item"><a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>
        </li>`;
    })
    .join('');
};

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
})
