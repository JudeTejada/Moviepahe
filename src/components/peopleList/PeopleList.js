import React from "react";

import PersonCard from "../personCard/PersonCard";

import { PeopleWrapper } from "./PeopleList.styled";
export default function PeopleList({ people }) {
  return (
    <PeopleWrapper>
      {people.map((person) => (
        <PersonCard {...person} key={person.id} />
      ))}
    </PeopleWrapper>
  );
}
