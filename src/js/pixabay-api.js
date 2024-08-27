const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: '45532331-2e8214dd605ab1a3b6ca882fa',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
