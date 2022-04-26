const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "b59f17e26fe0bb62f0ad4e21eca227b9";

export async function fetchTrending() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(
    response => response.json(),
  );
}

export async function fetchByName(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=true`,
  ).then(response => response.json());
}

export async function fetchById(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`).then(
    response => response.json(),
  );
}

export async function fetchCredits(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`,
  ).then(response => response.json());
}

export async function fetchReviews(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
  ).then(response => response.json());
}