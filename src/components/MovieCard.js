import React from "react";
import styled from "styled-components";

const Card = styled.figure`
  /* display: flex;
  align-items: center; */
  background: #f9f9f9;
  width: 25%;
`;

const ImageCard = styled.img.attrs((props) => ({
  src: props.imageSrc,
  alt: props.imageTitle,
}))`
  object-fit: cover;
  width: 100%;
`;
export default function MovieCard({
  poster_path,
  original_title,
  id,
  overview,
  release_date,
  original_language,
}) {
  return (
    <Card>
      <ImageCard
        imageSrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        imageTitle={original_title}
      />

      <h2>{original_title}</h2>
      <h5>{release_date}</h5>
      <h5>{original_language}</h5>
      <p>{overview}</p>
    </Card>
  );
}
