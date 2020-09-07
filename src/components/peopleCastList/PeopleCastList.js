import React from "react";

import { PeopleWrapper } from "./PeopleCastList.styled";

import PersonCast from "../PersonCast/PersonCast";

import { HeadingOne } from "../../util/global.styles";

export default function PeopleCastList({ casts }) {
  return (
    <>
      <HeadingOne>All Cast</HeadingOne>
      <PeopleWrapper>
        {casts &&
          casts.cast.map((cast) => <PersonCast {...cast} key={cast.id} />)}
      </PeopleWrapper>
    </>
  );
}
