import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { NavUl, NavList, NavTitle, NavContainer } from "./navbar.styled";
import { fetchGenresStart } from "../../redux/genre/genre.actions";
import { isEmpty } from "../../util/util";
function Navbar({ fetchGenresStart, genres }) {
  useEffect(() => {
    fetchGenresStart();
  }, []);
  return (
    <>
      {genres && (
        <NavContainer>
          <NavTitle>Genres</NavTitle>
          <NavUl>
            {genres.map(({ name, id }) => (
              <Link
                to={`${process.env.PUBLIC_URL}/genre/${name}/${id}`}
                key={id}
              >
                <NavList>{name}</NavList>
              </Link>
            ))}
          </NavUl>
        </NavContainer>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  genres: state.genre.genres.genres,
});
const mapDispatchToProps = (dispatch) => ({
  fetchGenresStart: () => dispatch(fetchGenresStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
