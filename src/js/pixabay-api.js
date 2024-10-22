import axios from 'axios';

const API_KEY = '3632143-ebeee10190d206f1a5cb99fa1';
const BASE_URL = 'https://pixabay.com/api/';
let currentPage = 1;
const perPage = 15;

export function searchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: currentPage,
  });

  currentPage += 1;

  return axios.get(`${BASE_URL}?${params}`);
}

export function resetPage() {
  currentPage = 1;
}

export function getPerPage() {
  return perPage;
}
