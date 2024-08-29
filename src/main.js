import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let searchedValue = '';
let cardHeight = 0;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    currentPage = 1;
    searchedValue = searchFormEl.elements.user_query.value.trim();
    if (!searchedValue) {
      iziToast.warning({
        message: 'Please enter a search term to begin your search',
        position: 'topRight',
      });
      return;
    }

    const response = await fetchPhotos(searchedValue, currentPage);
    if (response.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      loader.classList.add('is-hidden');
      galleryEl.innerHTML = '';
      return;
    }
    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    galleryEl.innerHTML = galleryCardsTemplate;

    const galleryCardEl = galleryEl.querySelector('li');
    cardHeight = galleryCardEl.getBoundingClientRect().height;

    new SimpleLightbox('.js-gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    searchFormEl.reset();
    loader.classList.add('is-hidden');
    loadMoreBtn.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMore = async event => {
  try {
    currentPage++;
    loader.classList.remove('is-hidden');
    const response = await fetchPhotos(searchedValue, currentPage);
    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    loader.classList.add('is-hidden');
    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage >= Math.ceil(response.data.totalHits / 15)) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);
