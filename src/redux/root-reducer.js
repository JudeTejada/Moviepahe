import { combineReducers } from "redux";

import moviesReducer from "./movies/movies.reducer";
import searchReducer from "./search/search.reducer";
import movieReducer from "./movie/movie.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  movie: movieReducer,
});

export default rootReducer;
