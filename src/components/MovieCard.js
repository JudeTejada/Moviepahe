import React from "react";
import styled from "styled-components";

const Card = styled.figure`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

const ImageCard = styled.img.attrs((props) => ({
  src: props.imageSrc,
  alt: props.imageTitle,
}))`
  object-fit: cover;
  width: 100%;
  flex-basis: 50%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const CardBody = styled.div`
  background: #eee;
  flex: 1;

  align-self: stretch;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`;
const CardTitle = styled.h2`
  font-weight: 900;
  font-size: 1.8rem;
  color: var(--primary-color-2);
  text-align: center;
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

      <CardBody>
        <CardTitle>{original_title}</CardTitle>
        <h5>{release_date}</h5>
        <h5>{original_language}</h5>
        <p>{overview.slice(0, 50)}...</p>
      </CardBody>
    </Card>
  );
}
