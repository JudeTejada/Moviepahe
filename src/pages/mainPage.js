import React, { useEffect } from "react";

import MovieRelevance from "../components/moviesRelevance/MovieRelevance";
import OptionCategory from "../components/optionCategory/optionCategory";

import { HeadingOne } from "../util/global.styles";

function MainPage({}) {
  const handleScroll = () => {
    console.log("SCROLLING");
  };
  return (
    <>
      <div className="MainPage" onScroll={handleScroll}>
        <HeadingOne>A library of Movies</HeadingOne>
        <OptionCategory />
        <MovieRelevance />
      </div>
    </>
  );
}

export default MainPage;
