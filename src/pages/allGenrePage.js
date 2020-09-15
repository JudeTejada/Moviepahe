import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as lodash from "lodash";

import Loader from "../components/loader/Loader";
import GenreItem from "../components/genreItem/GenreItem";

import { fetchGenresStart } from "../redux/genre/genre.actions";

import { GenreUL } from "../components/genreItem/GenreItem.styled";

function AllGenrePage({ genres, fetchGenresStart }) {
  useEffect(() => {
    if (lodash.isEmpty(genres)) {
      console.log("FETCHING");
      fetchGenresStart();
    }
  }, []);

  if (lodash.isEmpty(genres)) return <Loader />;

  console.log("GENERS", genres);
  return (
    <div>
      <h1>Genres</h1>
      {genres && (
        <GenreUL>
          {genres.map((genre) => (
            <GenreItem key={genre.id} {...genre} />
          ))}
        </GenreUL>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  genres: state.genre.genres.genres,
});
const mapDispatchToProps = (dispatch) => ({
  fetchGenresStart: () => dispatch(fetchGenresStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllGenrePage);
