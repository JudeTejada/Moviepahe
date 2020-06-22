import React from "react";

export default function Genre(props) {
  const { id, genre } = props.match.params;

  console.log(id, genre);
  return (
    <div>
      <h1>Genre</h1>
    </div>
  );
}
