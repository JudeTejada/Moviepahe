import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import {
  setYearFilter,
  setSortFilter,
  setGenreFilter,
} from "../../redux/movies/movies.actions";

function OptionCategory({ setYearFilter }) {
  const dispatch = useDispatch();

  const yearToday = new Date().getFullYear();
  const years = [];

  for (let i = yearToday; i >= 1883; i--) {
    years.push(i);
  }

  const onYearFilterChange = (e) => {
    const selected = e.target.value;
    dispatch(setYearFilter(selected));
  };

  const onSortFilterChange = (e) => {
    const selected = e.target.value;
    dispatch(setSortFilter(selected));
  };
  return (
    <>
      <label htmlFor="year">Year:</label>
      <select id="year" onChange={onYearFilterChange}>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="movieRelevance">Sort:</label>
      <select id="movieRelevance" onChange={onSortFilterChange}>
        <option label="Name">name</option>
        <option label="Release Date">release_date</option>
        <option label="Vote Average">vote_average</option>

        <option label="Name">name</option>
        <option label="Release Date">release_date</option>
        <option label="Vote Average">vote_average</option>
      </select>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setYearFilter: (selected) => dispatch(setYearFilter(selected)),
  setSortFilter: (selected) => dispatch(setSortFilter(selected)),
  setGenreFilter: (selected) => dispatch(setGenreFilter(selected)),
});

export default connect(null, mapDispatchToProps)(OptionCategory);

// Set a default relevance
// whenever an option is change, fire a redux action
// use redux saga to listen to an action and then change the data
