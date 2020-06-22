import React, { useState, useEffect } from "react";
import { fetchPersonData } from "../api/tmbdb";
import {
  MainWrapper,
  MainImage,
  MainDetails,
  MainTitle,
  MainSubtitle,
  Text,
  Button,
  MovieDate,
} from "../styles/Movie";

export default function Person(props) {
  const { id } = props.match.params;

  const [person, setPerson] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPersonData(id);
      setPerson(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const { biography, birthday, name, place_of_birth, profile_path } = person;

  return (
    <MainWrapper>
      <MainImage
        imageSrc={`https://image.tmdb.org/t/p/w185_and_h278_face/${profile_path}`}
        imageTitle={name}
      />
      <MainDetails>
        <MainTitle>{name}</MainTitle>
        <MainSubtitle>Biography</MainSubtitle>
        <Text>{biography}</Text>
      </MainDetails>
    </MainWrapper>
  );
}
