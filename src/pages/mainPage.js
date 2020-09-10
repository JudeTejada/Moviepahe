import React from "react";

import MovieRelevance from "../components/moviesRelevance/MovieRelevance";
import OptionCategory from "../components/optionCategory/optionCategory";

import { HeadingOne } from "../util/global.styles";

function MainPage() {
  return (
    <div>
      <HeadingOne>Discover Movies</HeadingOne>
      <OptionCategory />
      <MovieRelevance />
    </div>
  );
}

export default MainPage;
