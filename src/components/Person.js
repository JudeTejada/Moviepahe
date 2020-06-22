import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { fetchPersonData, fetchPersonDataKnownFor } from "../api/tmbdb";

import {
  MainWrapper,
  MainImage,
  MainDetails,
  MainTitle,
  MainSubtitle,
  Text,
  Button,
  MovieDate,
  MainLi,
  MainUl,
} from "../styles/Movie";

export default function Person(props) {
  const { id } = props.match.params;

  const [person, setPerson] = useState("");
  const [personKnownFor, setPersonKnownFor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const personData = await fetchPersonData(id);
      const personKnownFor = await fetchPersonDataKnownFor(id);

      setPerson(personData);
      setPersonKnownFor(personKnownFor);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const {
    biography,
    birthday,
    name,
    place_of_birth,
    profile_path,
    also_known_as,
    known_for_department,
  } = person;

  return (
    <>
      <MainWrapper>
        <MainImage
          imageSrc={`https://image.tmdb.org/t/p/w185_and_h278_face/${profile_path}`}
          imageTitle={name}
        />
        <MainDetails>
          <MainTitle>{name}</MainTitle>

          <MainUl>
            <MainLi>{birthday}</MainLi>
            <MainLi>{place_of_birth}</MainLi>
            <MainLi>{also_known_as[0]}</MainLi>
            <MainLi>{known_for_department}</MainLi>
          </MainUl>
          <MainSubtitle>Biography</MainSubtitle>
          <Text>{biography}</Text>
        </MainDetails>
      </MainWrapper>

      <MovieList categoryTitle="Known For" movies={personKnownFor} />
    </>
  );
}
