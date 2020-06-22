import React, { useEffect, useState } from "react";
import { fetchSingleMovie } from "../api/tmbdb";
import {
  MovieWrapper,
  MovieImage,
  MovieDetails,
  MovieTitle,
  MovieSubTitle,
  MovieRating,
  Text,
  Button,
  MovieDate,
} from "../styles/Movie";

import { splitYear } from "../util/util";
export default function MovieMainInfo({ id }) {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchSingleMovie(id);
      setMovie(movieData);

      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  const {
    release_date,
    poster_path,
    title,
    genres,
    backdrop_path,
    vote_average,
    overview,
    homepage,
    runtime,
    budget,
  } = movie;
  const genresSplit = genres.map((genre) => (
    <li key={genre.id}>{genre.name}</li>
  ));
  return (
    <MovieWrapper>
      <MovieImage
        imageSrc={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        imageTitle={title}
      />
      <MovieDetails>
        <MovieTitle>
          {title} <MovieDate>({splitYear(release_date)})</MovieDate>
        </MovieTitle>
        <MovieRating>{vote_average} Rating</MovieRating>
        <MovieSubTitle>The Synopsis</MovieSubTitle>
        <Text>{overview}</Text>
        <div>
          <Button primary>Watch Trailer</Button>
          <Button>Website</Button>
        </div>
      </MovieDetails>
    </MovieWrapper>
  );
}
