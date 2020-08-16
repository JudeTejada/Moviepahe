import React from "react";
import { Link } from "react-router-dom";

import { NavUl, NavList, NavTitle, NavContainer } from "./navbar.styled";

export default function Navbar() {
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
    "War",
    "Western",
  ];
  return (
    <NavContainer>
      <NavTitle>Genres</NavTitle>
      <NavUl>
        {genres.map((genre) => (
          <Link to={`genre/${genre}`} key={genre}>
            <NavList>{genre}</NavList>
          </Link>
        ))}
      </NavUl>
    </NavContainer>
  );
}
