import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCast } from "../api/tmbdb";
import ProfileCard from "./profileCard";
const MovieSubWrapper = styled.div`
  margin: 4em 0;
  width: 100%;
`;
const MovieSubCasts = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-row-gap: 4rem;
`;

export const Subtitle = styled.h2`
  font-size: 3rem;
  margin: 1.2em 0;
  font-weight: 500;
`;
export default function MovieSubInfo({ id }) {
  const [cast, setCast] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCastData = async () => {
      const castsData = await fetchCast(id);
      setCast(castsData);
      setLoading(false);
    };

    fetchCastData();
  }, [id]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  const maxCasts = cast.cast.slice(0, 8);

  return (
    <MovieSubWrapper>
      <Subtitle>Top Billed Casts</Subtitle>
      <MovieSubCasts>
        {maxCasts.map((cast) => (
          <ProfileCard {...cast} />
        ))}
      </MovieSubCasts>
    </MovieSubWrapper>
  );
}
