import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { NavUl, NavList, NavTitle, NavContainer, NavLi } from "./navbar.styled";

import { fetchGenresStart } from "../../redux/genre/genre.actions";

import { isEmpty } from "../../util/util";

import CustomButton from "../button/button";

function Navbar({ fetchGenresStart, genres }) {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    fetchGenresStart();
  }, []);
  return (
    <>
      {genres && (
        <NavContainer>
          <NavTitle>Discover</NavTitle>
          <NavUl>
            <NavList
              to={`${process.env.PUBLIC_URL}/discover/popular`}
              activeClassName="active"
            >
              💎 Popular
            </NavList>

            <NavList
              to={`${process.env.PUBLIC_URL}/discover/upcoming`}
              activeClassName="active"
            >
              ✨ Upcoming
            </NavList>

            <NavList
              to={`${process.env.PUBLIC_URL}/discover/top_rated`}
              activeClassName="active"
            >
              💖 Top Rated
            </NavList>
          </NavUl>

          <NavTitle>Genres</NavTitle>
          <NavUl>
            {genres.map(({ name, id, ...props }, i) => {
              if (i > 4) {
                return (
                  <NavList
                    to={`${process.env.PUBLIC_URL}/genre/${name}/${id}`}
                    key={id}
                    activeClassName="active"
                    togglehide={toggle}
                  >
                    {name}
                  </NavList>
                );
              } else {
                return (
                  <NavList
                    to={`${process.env.PUBLIC_URL}/genre/${name}/${id}`}
                    key={id}
                    activeClassName="active"
                  >
                    {name}
                  </NavList>
                );
              }
            })}

            <CustomButton hideButton onClick={() => setToggle(!toggle)}>
              {toggle ? "Show All" : "Hide All"}
            </CustomButton>
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
