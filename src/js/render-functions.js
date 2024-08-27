export const createGalleryCardTemplate = imgInfo => {
  return `
    <li class="gallery-card">
      <a class="gallery-link" href="${imgInfo.largeImageURL}">
        <img
          class="gallery-img"
          src="${imgInfo.webformatURL}"
          alt="${imgInfo.tags}"
        />
      </a>
      <ul class="gallery-list">
        <li class="gallery-list-item">
          <p>Likes</p>
          <p>${imgInfo.likes}</p>
        </li>
        <li class="gallery-list-item">
          <p>Views</p>
          <p>${imgInfo.views}</p>
        </li>
        <li class="gallery-list-item">
          <p>Comments</p>
          <p>${imgInfo.comments}</p>
        </li>
        <li class="gallery-list-item">
          <p>Downloads</p>
          <p>${imgInfo.downloads}</p>
        </li>
      </ul>
    </li>
`;
};
