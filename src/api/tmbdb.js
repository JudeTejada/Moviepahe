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

export const fetchMovie = async (query) => {
  const request = await axios({
    method: "GET",
    url: `/search/movie`,
    params: {
      api_key: tmdbKey,
      query,
    },
  });

  return request.data;
};
