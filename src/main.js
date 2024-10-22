import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPerPage, resetPage, searchImages } from './js/pixabay-api';
import { showImages } from './js/render-functions';

const formElem = document.querySelector('form');
const btnLoadMore = document.querySelector('.btn-load-mode');
const loader = document.querySelector('.loader');
const endLine = document.querySelector('.end-line');
let searchQuery = '';

const showToastError = message => {
  iziToast.error({
    class: 'error-alert',
    message,
    messageColor: 'white',
    position: 'topRight',
    maxWidth: 432,
  });
};

const handleImageSearch = async () => {
  const imagesList = document.querySelector('.images-list');
  imagesList.classList.add('hidden');
  imagesList.innerHTML = '';
  loader.classList.remove('hidden');
  endLine.classList.add('hidden');
  btnLoadMore.classList.add('hidden');
  resetPage();

  const images = await searchImages(searchQuery);
  loader.classList.add('hidden');

  if (!images.data.hits.length) {
    showToastError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  } else {
    showImages(images);
    btnLoadMore.classList.remove('hidden');
  }
};

formElem.addEventListener('submit', async event => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value.trim();

  if (searchQuery) {
    await handleImageSearch();
  } else {
    showToastError('Search query is empty');
  }
});

btnLoadMore.addEventListener('click', async () => {
  if (searchQuery) {
    loader.classList.remove('hidden');
    endLine.classList.add('hidden');
    btnLoadMore.classList.add('hidden');

    const images = await searchImages(searchQuery);
    loader.classList.add('hidden');

    if (!images.data.hits.length) {
      showToastError('Sorry, there are no images any more!');
    } else {
      showImages(images);

      if (images.data.hits.length < getPerPage()) {
        btnLoadMore.classList.add('hidden');
        endLine.classList.remove('hidden');
      } else {
        btnLoadMore.classList.remove('hidden');
      }

      const h = document
        .querySelector('.images-item')
        .getBoundingClientRect().height;
      window.scrollBy({
        top: 2 * h,
        left: 0,
        behavior: 'smooth',
      });
    }
  } else {
    showToastError('Search query is empty');
  }
});
