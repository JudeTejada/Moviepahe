import React from "react";
import { withRouter } from "react-router-dom";
import PersonCard from "../personCard/PersonCard";

import { PeopleWrapper } from "./PeopleList.styled";
function PeopleList({ people, history, match }) {
  const viewAllCasts = () => {
    history.push(`/movie/${match.params.id}/casts`);
  };

  return (
    <PeopleWrapper>
      {people.map((person) => (
        <PersonCard {...person} key={person.id} />
      ))}

      <button onClick={viewAllCasts}>View All Casts</button>
    </PeopleWrapper>
  );
}

export default withRouter(PeopleList);
