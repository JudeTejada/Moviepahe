import React from "react";
import { connect } from "react-redux";
import { changeRelevance } from "../../redux/movies/movies.actions";

function OptionCategory({ changeRelevance }) {
  const changeOption = (e) => {
    console.log(e.target.value);
    changeRelevance(e.target.value);
  };

  return (
    <>
      <label htmlFor="movieRelevance">Order by:</label>
      <select id="movieRelevance" onChange={changeOption}>
        <option label="Upcoming">upcoming</option>
        <option label="Top Rated">top_rated</option>
        <option label="Now Playing">now_playing</option>
        <option label="popular">popular</option>
      </select>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeRelevance: (option) => dispatch(changeRelevance(option)),
});

export default connect(null, mapDispatchToProps)(OptionCategory);

// Set a default relevance
// whenever an option is change, fire a redux action
// use redux saga to listen to an action and then change the data
