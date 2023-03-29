// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(SimpleLightbox);

const myGalleryList = document.querySelector(".gallery");
myGalleryList.innerHTML = createDOMhtmlGallery(galleryItems);

function createDOMhtmlGallery(items) {
    return items.map(({ preview, original, description }) =>  
    `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            alt=${description}
            />
        </a>
    </li>`).join('');
}

new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.3,
    captionSelector: "img",
    captionType: "attr",
    captionDelay: 250,
    captionsData: "alt",
    captionClass: 'captionstyle'
});
