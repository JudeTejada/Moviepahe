import { combineReducers } from "redux";

import moviesReducer from "./movies/movies.reducer";
import searchReducer from "./search/search.reducer";
import movieReducer from "./movie/movie.reducer";
import personReducer from "./person/person.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  movie: movieReducer,
  person: personReducer,
});

export default rootReducer;
