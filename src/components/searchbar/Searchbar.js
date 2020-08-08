import React, { useState } from "react";
import { withRouter } from "react-router";

import { FormContainer, SearchInput } from "./Searchbar.styled";

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
    <FormContainer onSubmit={searchMovie}>
      <SearchInput
        type="text"
        name="search a Movie"
        placeholder="Search from 600,000 movies"
        onChange={inputChange}
      />
    </FormContainer>
  );
}

export default withRouter(SearchBar);
