import React from "react";
import { Link } from "react-router-dom";

import { GenreCard, GenreTitle } from "./GenreItem.styled";

export default function GenreItem({ name, id }) {
  return (
    <GenreCard>
      <Link to={`${process.env.PUBLIC_URL}/genre/${name}/${id}`}>
        <GenreTitle>{name}</GenreTitle>
      </Link>
    </GenreCard>
  );
}
