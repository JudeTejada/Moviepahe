import React from "react";
import { Helmet } from "react-helmet";

import MovieRelevance from "../components/moviesRelevance/MovieRelevance";
import OptionCategory from "../components/optionCategory/optionCategory";

import { HeadingOne } from "../util/global.styles";

function MainPage() {
  return (
    <div>
      <Helmet>
        <title>Movie Hub</title>
      </Helmet>
      <HeadingOne>Discover Movies</HeadingOne>
      <OptionCategory />
      <MovieRelevance />
    </div>
  );
}

export default MainPage;
