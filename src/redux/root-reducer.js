import { combineReducers } from "redux";

import moviesReducer from "./movies/movies.reducer";
import searchReducer from "./search/search.reducer";
import movieReducer from "./movie/movie.reducer";
import personReducer from "./person/person.reducer";
import genreReducer from "./genre/genre.reducer";
import discoverReducer from "./discover/discover.reducer";
import filterReducer from "./filter/filter.reducer";
import initReducer from "./init/init.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  movie: movieReducer,
  person: personReducer,
  genre: genreReducer,
  discover: discoverReducer,
  filter: filterReducer,
  init: initReducer,
});

export default rootReducer;
