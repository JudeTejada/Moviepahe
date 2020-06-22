import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  ImageCard,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardParagraph,
} from "../styles/Card";

import { truncateText, splitYear } from "../util/util";

export default function MovieCard({
  poster_path,
  original_title,
  id,
  overview,
  release_date,
}) {
  return (
    <Card>
      <Link to={`/movies/${id}`}>
        <ImageCard
          imageSrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          imageTitle={original_title}
        />
        <CardBody>
          <CardTitle>{truncateText(original_title)}</CardTitle>
          <CardSubtitle>{splitYear(release_date)}</CardSubtitle>
          <CardParagraph>{overview.slice(0, 50)}...</CardParagraph>
        </CardBody>
      </Link>
    </Card>
  );
}
