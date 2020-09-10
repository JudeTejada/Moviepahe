import React from "react";
import { withRouter } from "react-router-dom";

import PersonCard from "../personCard/PersonCard";
import Custombutton from "../button/button";

import { PeopleWrapper } from "./PeopleList.styled";
function PeopleList({ people, history, match }) {
  const viewAllCasts = () => {
    history.push(`/movie/${match.params.id}/casts`);
  };

  return (
    <div>
      <PeopleWrapper>
        {people.map((person) => (
          <PersonCard {...person} key={person.id} />
        ))}
      </PeopleWrapper>
      <Custombutton loadMorebutton onClick={viewAllCasts}>
        View All Casts
      </Custombutton>
    </div>
  );
}

export default withRouter(PeopleList);
