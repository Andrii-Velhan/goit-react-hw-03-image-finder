const BASE_URL = `https://pixabay.com/api/`;
const MY_KEY = `19199733-53a137615acbd00e25277177c`;
const PER_PAGE = 12;

export function fetchImg(page, query) {
  const url = `${BASE_URL}/?q=${query}&page=${page}&key=${MY_KEY}&image_type_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Image ${query} not found!`));
  });
}

const api = {
  fetchImg,
};

export default api;
