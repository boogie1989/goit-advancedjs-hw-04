import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightboxImages = new simpleLightbox('.images-list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function showImages(images) {
  const imagesList = document.querySelector('.images-list');
  imagesList.classList.remove('hidden');

  const imagesHTML = images.data.hits
    .map(
      img => `
      <li class="images-item">
        <a class="images-link" href="${img.largeImageURL}" onclick="return false">
          <img
            class="image"
            src="${img.webformatURL}"
            alt="${img.tags}"
          />
        </a>
        <div class="image-statistics">
          <ul class="stat-list stat-titles-list">
            <li class="stat-titles-item">
              <span class="stat-title">Likes</span>
              <span class="stat-value">${img.likes}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Views</span>
              <span class="stat-value">${img.views}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Comments</span>
              <span class="stat-value">${img.comments}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Downloads</span>
              <span class="stat-value">${img.downloads}</span>
            </li>
          </ul>
        </div>
      </li>
    `
    )
    .join('');

  imagesList.insertAdjacentHTML('beforeend', imagesHTML);
  lightboxImages.refresh();
}
