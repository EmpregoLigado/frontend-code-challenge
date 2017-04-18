import 'whatwg-fetch';

function getJson(url) {
  return fetch(url)
    .then(res => res.json())
    .then(json => json)
    .catch(err => err);
}

export { getJson };
