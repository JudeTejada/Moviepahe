import React, { useState } from "react";

import ModalVideo from "react-modal-video";

import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import {
  MovieTitle,
  MovieDetailsContainer,
  MovieImage,
  MovieSubtitle,
  MovieImageWrapper,
  MovieDetails,
  MovieOverviewWrapper,
  MovieParagraph,
  ButtonWrapper,
} from "./MovieOverview.styled";

import CustomButton from "../button/button";

import { ReactComponent as LinkIcon } from "../../assets/LinkIcon.svg";
import ImgPlaceholder from "../../assets/placeholder.jpg";

export default function MovieOverview({ movie }) {
  const { backdrop_path, overview, original_title, homepage } = movie;
  const tmdbBackdropPath = "https://image.tmdb.org/t/p/original";

  const [modalOpened, setModalOpened] = useState(false);

  const renderTrailer = (videos, modalOpened, setmodalOpened) => {
    if (videos.length === 0) {
      return;
    }
    const { key } = videos.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return (
      <React.Fragment>
        <CustomButton onClick={() => setmodalOpened(true)} outlineButton>
          <span> Watch Trailer</span>
        </CustomButton>

        <ModalVideo
          channel="youtube"
          isOpen={modalOpened}
          videoId={key}
          onClose={() => setmodalOpened(false)}
        />
      </React.Fragment>
    );
  };
  return (
    <>
      <MovieOverviewWrapper>
        <MovieTitle>{original_title}</MovieTitle>
        <MovieDetailsContainer>
          <MovieImageWrapper>
            <MovieImage
              src={
                backdrop_path
                  ? tmdbBackdropPath + backdrop_path
                  : ImgPlaceholder
              }
              alt={original_title}
            />
          </MovieImageWrapper>

          <MovieDetails>
            <MovieSubtitle>Movie Details</MovieSubtitle>
            <MovieParagraph>{overview}</MovieParagraph>
            <ButtonWrapper>
              <CustomButton movieButtonStyle>
                <a href={homepage} target="_blank" rel="noopener noreferrer">
                  <LinkIcon /> <span> Visit Site</span>
                </a>
              </CustomButton>

              {renderTrailer(movie.videos.results, modalOpened, setModalOpened)}
            </ButtonWrapper>
          </MovieDetails>
        </MovieDetailsContainer>
      </MovieOverviewWrapper>
    </>
  );
}
