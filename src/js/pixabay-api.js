import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchedQuery, page) => {
  const axiosOptions = {
    params: {
      key: '45532331-2e8214dd605ab1a3b6ca882fa',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 15,
      page: page,
      safesearch: true,
    },
  };
  return axios.get(``, axiosOptions);
};
