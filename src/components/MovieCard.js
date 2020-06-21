import React from "react";
import styled from "styled-components";

const Card = styled.figure`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

const ImageCard = styled.img.attrs((props) => ({
  src: props.imageSrc,
  alt: props.imageTitle,
}))`
  object-fit: cover;
  width: 100%;
  border-radius: 15px;
  height: 100%;
`;
const CardBody = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;

  color: #fff;
  padding-top: 1em;
  padding-left: 1em;
`;
const CardTitle = styled.h2`
  font-weight: 900;
  font-size: 2.5rem;
`;
const CardParagraph = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
`;

const CardSubtitle = styled.h5`
  font-weight: 700;
  font-size: 1.2rem;
`;
export default function MovieCard({
  poster_path,
  original_title,
  id,
  overview,
  release_date,
  original_language,
}) {
  const truncateText = (text) => {
    if (text.length > 20) {
      return `${text.slice(0, 30)}...`;
    }
    return text;
  };
  truncateText(original_title);
  return (
    <Card>
      <ImageCard
        imageSrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        imageTitle={original_title}
      />
      <CardBody>
        <CardTitle>{truncateText(original_title)}</CardTitle>
        <CardSubtitle>{release_date}</CardSubtitle>
        <CardParagraph>{overview.slice(0, 50)}...</CardParagraph>
      </CardBody>
    </Card>
  );
}
