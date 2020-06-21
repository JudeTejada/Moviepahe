import React, { useEffect, useState } from "react";

import { fetchSingleData } from "../api/tmbdb";

export default function Movie(props) {
  const { id } = props.match.params;
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      //fetch data
      const data = await fetchSingleData(id);
      setMovie(data);
      setLoading(false);
    };

    fetchMovie();
  }, [id]);
  if (loading) {
    return <h1>Loading</h1>;
  }
  const {
    released_date,
    poster_path,
    title,
    genres,
    backdrop_path,
    vote_average,
  } = movie;
  console.log(movie);
  const genresSplit = genres.map((genre) => <li>{genre.name}</li>);
  return (
    <div>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />

        <div className="movieContent">
          <ul>
            <li>{released_date}</li>
            {genresSplit};
          </ul>
          <li>{vote_average}</li>
          <h1>{title}</h1>
        </div>
      </figure>
    </div>
  );
}
