import React, { useEffect } from "react";

import { connect } from "react-redux";

import { NavUl, NavList, NavTitle, NavContainer, NavLi } from "./navbar.styled";
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
              <NavList
                to={`${process.env.PUBLIC_URL}/genre/${name}/${id}`}
                key={id}
                activeClassName="active"
              >
                {name}
                <NavLi> </NavLi>
              </NavList>
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
