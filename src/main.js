import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedValue = searchFormEl.elements.user_query.value.trim();
  if (!searchedValue) {
    iziToast.warning({
      message: 'Please enter a search term to begin your search',
      position: 'topRight',
    });
    return;
  }

  fetchPhotos(searchedValue)
    .then(data => {
      loader.classList.remove('is-hidden');

      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryEl.innerHTML = '';
        return;
      }

      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;

      new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        overlayOpacity: 0.8,
      });

      searchFormEl.reset();
      loader.classList.add('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
