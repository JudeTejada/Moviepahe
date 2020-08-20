import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPersonStart } from "../redux/person/person.actions";

import PersonBiography from "../components/personBiography/PersonBiography";
import PersonCasting from "../components/personCasting/PersonCasting";

function PersonPage({ match, fetchPersonStart, person, casting, isFetching }) {
  useEffect(() => {
    const { personId } = match.params;
    fetchPersonStart({ category: "person", id: personId });
  }, [match.params.personId]);
  return !isFetching ? (
    <div>
      <PersonBiography actor={person} />
      <PersonCasting actor={person} casting={casting} />
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
const mapStateToProps = (state) => ({
  person: state.person.person,
  casting: state.person.casting,
  isFetching: state.person.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPersonStart: (data) => dispatch(fetchPersonStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);
