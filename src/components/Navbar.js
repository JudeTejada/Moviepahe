import React, { useEffect, useState } from "react";

import { Aside, Logo, Ul, Li, SubHeading } from "../styles/Navbar";
import NavbarItem from "./NavbarItem";
import { fetchGenres } from "../api/tmbdb";
export default function Navbar() {
  const [genres, setGenres] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGenres();
      setGenres(data.genres);
    };
    fetchData();
  }, []);

  console.log(genres);
  return (
    <Aside>
      <Logo>Movie Hub</Logo>
      <Ul>
        <SubHeading>Discover</SubHeading>
        <Li>Search</Li>
        <Li>Browse</Li>
        <SubHeading>Genres</SubHeading>
        {genres && genres.map((genre) => <NavbarItem {...genre} />)}
      </Ul>
    </Aside>
  );
}
