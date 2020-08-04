import React, { useState } from "react";
import { withRouter } from "react-router";

// import { FormContainer, Searchbar } from "./Searchbar.styled";

function SearchBar({ history }) {
  const [query, setQuery] = useState(null);

  const searchMovie = (e) => {
    e.preventDefault();
    if (!query) return;
    history.push(`/search/${query}`);
  };

  const inputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={searchMovie}>
      <input
        type="text"
        name="search a Movie"
        placeholder="Search from 600,000 movies"
        onChange={inputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default withRouter(SearchBar);
