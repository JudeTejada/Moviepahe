import axios from "axios";

const tmdb = "https://api.themoviedb.org/3";
//API key
const tmdbKey = "7221bdf03803e2fa7eb1f2e0e991bc09";

axios.defaults.baseURL = tmdb;
axios.defaults.params = {};
axios.defaults.params["api-key"] = tmdbKey;

export const fetchRequest = async (param, page = 1) => {
  const request = await axios({
    method: "GET",
    url: `${param}`,
    params: {
      page,
      api_key: tmdbKey,
    },
  });

  return request.data;
};

export const fetchMovie = async (query, page) => {
  const request = await axios({
    method: "GET",
    url: `/search/movie`,
    params: {
      api_key: tmdbKey,
      query,
      page,
    },
  });

  return request.data;
};

export const fetchSimilarMovies = async (category, id) => {
  const request = await axios({
    method: "GET",
    url: `/${category}/${id}/similar`,
    params: {
      api_key: tmdbKey,
    },
  });

  return request.data;
};

export const fetchMovieReviews = async (category, id) => {
  const request = await axios({
    method: "GET",
    url: `/${category}/${id}/reviews`,
    params: {
      api_key: tmdbKey,
    },
  });

  return request.data;
};

export const fetchMovieCredits = async (category, id) => {
  const request = await axios({
    method: "GET",
    url: `/${category}/${id}/credits`,
    params: {
      api_key: tmdbKey,
    },
  });

  return request.data;
};

export const fetchSingleRequest = async (category, id) => {
  const request = await axios({
    method: "GET",
    url: `/${category}/${id}`,
    params: {
      api_key: tmdbKey,
      append_to_response: "similar,videos,images",
    },
  });

  return request.data;
};

export const fetchPersonCasting = async (id) => {
  const castingRequest = await axios({
    method: "GET",
    url: `/person/${id}/combined_credits`,
    params: {
      api_key: tmdbKey,
    },
  });
  return castingRequest.data.cast;
};
