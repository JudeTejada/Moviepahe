import React from "react";

import MovieRelevance from "../components/moviesRelevance/MovieRelevance";
import OptionCategory from "../components/optionCategory/optionCategory";

import { initMainApp } from "../redux/movies/movies.actions";

import { HeadingOne } from "../util/global.styles";

function MainPage({ initMainApp, initMain }) {
  return (
    <div>
      <HeadingOne>Discover Movies</HeadingOne>
      <OptionCategory />
      <MovieRelevance />
    </div>
  );
}

export default MainPage;
