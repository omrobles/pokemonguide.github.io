export function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}