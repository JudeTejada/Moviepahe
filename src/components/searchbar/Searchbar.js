import React from "react";

import { FormContainer, Searchbar } from "./Searchbar.styled";

export default function SearchBar() {
  return (
    <form>
      <input
        type="text"
        name="search a Movie"
        placeholder="Search from 600,000 movies"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
