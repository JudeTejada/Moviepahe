import React from "react";

import {
  Card,
  ImageCard,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardParagraph,
} from "../styles/Card";

export default function MovieCard({
  poster_path,
  original_title,
  id,
  overview,
  release_date,
  original_language,
}) {
  const truncateText = (text) => {
    if (text.length > 20) {
      return `${text.slice(0, 30)}...`;
    }
    return text;
  };
  truncateText(original_title);
  return (
    <Card>
      <ImageCard
        imageSrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        imageTitle={original_title}
      />
      <CardBody>
        <CardTitle>{truncateText(original_title)}</CardTitle>
        <CardSubtitle>{release_date}</CardSubtitle>
        <CardParagraph>{overview.slice(0, 50)}...</CardParagraph>
      </CardBody>
    </Card>
  );
}
