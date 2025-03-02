// script.js
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(img.src);
    });
});

function openLightbox(src) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
    lightboxImg.src = galleryImages[currentIndex].src;
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
    lightboxImg.src = galleryImages[currentIndex].src;
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});