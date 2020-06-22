import React, { useEffect, useState } from "react";
import { fetchSingleMovie } from "../api/tmbdb";
import {
  MainWrapper,
  MainImage,
  MainDetails,
  MainTitle,
  MainSubtitle,
  MainRating,
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
    <MainWrapper>
      <MainImage
        imageSrc={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        imageTitle={title}
      />
      <MainDetails>
        <MainTitle>
          {title} <MovieDate>({splitYear(release_date)})</MovieDate>
        </MainTitle>
        <MainRating>{vote_average} Rating</MainRating>
        <MainSubtitle>The Synopsis</MainSubtitle>
        <Text>{overview}</Text>
        <div>
          <Button primary>Watch Trailer</Button>
          <Button>Website</Button>
        </div>
      </MainDetails>
    </MainWrapper>
  );
}
