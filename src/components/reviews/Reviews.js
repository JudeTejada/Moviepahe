import React from "react";
import Collapsible from "react-collapsible";

import { HeadingTwo } from "../../util/global.styles";
import { SectionContainer } from "../../util/global.styles";
import "./collapse.scss";
export default function Reviews({ reviews }) {
  return (
    <SectionContainer>
      <HeadingTwo>Reviews</HeadingTwo>

      {reviews.results.map((review) => (
        <Collapsible
          easing="ease-in"
          key={`review_${review.id}`}
          transitionTime={300}
          trigger={review.author}
        >
          <p>{review.content}</p>
        </Collapsible>
      ))}
    </SectionContainer>
  );
}
