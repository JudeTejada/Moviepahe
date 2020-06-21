import styled from "styled-components";
export const Card = styled.figure`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

export const ImageCard = styled.img.attrs((props) => ({
  src: props.imageSrc,
  alt: props.imageTitle,
}))`
  object-fit: cover;
  width: 100%;
  border-radius: 15px;
  height: 100%;
`;
export const CardBody = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;

  color: #fff;
  padding-top: 1em;
  padding-left: 1em;
`;
export const CardTitle = styled.h2`
  font-weight: 900;
  font-size: 2.5rem;
`;
export const CardParagraph = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
`;

export const CardSubtitle = styled.h5`
  font-weight: 700;
  font-size: 1.2rem;
`;
