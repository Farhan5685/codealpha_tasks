const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showLightbox(index) {
  lightboxImage.src = galleryImages[index].src;
  lightbox.classList.remove('hidden');
  currentIndex = index;
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    showLightbox(index);
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showLightbox(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showLightbox(currentIndex);
});
