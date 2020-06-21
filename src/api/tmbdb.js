import axios from "axios";
//API key
const API_KEY = "7221bdf03803e2fa7eb1f2e0e991bc09";

export const fetchSingleData = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    return response.data;
  } catch (err) {
    alert(err);
  }
};
