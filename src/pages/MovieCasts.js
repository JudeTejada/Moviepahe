import React from "react";
import { connect } from "react-redux";

function MovieCasts({ casts }) {
  console.log(casts);

  return (
    <div>
      <h2>All Cast</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  casts: state,
});

export default connect(mapStateToProps)(MovieCasts);
