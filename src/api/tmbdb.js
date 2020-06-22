import axios from "axios";
//API key
const API_KEY = "7221bdf03803e2fa7eb1f2e0e991bc09";

export const fetchSingleMovie = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchCast = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );

    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchSimilarMovies = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
    );

    return response.data;
  } catch (err) {
    alert(err);
  }
};
