import React, { useEffect } from "react";

import { connect } from "react-redux";
import { isEmpty } from "../util/util";
import { Helmet } from "react-helmet";
import PeopleCastList from "../components/peopleCastList/PeopleCastList";

function MovieCasts({ casts, history }) {
  useEffect(() => {
    if (isEmpty(casts)) {
      history.goBack();
    }
  }, [casts, history]);

  return (
    <div>
      <Helmet>
        <title>Movie Casts</title>
      </Helmet>
      <PeopleCastList casts={casts} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  casts: state.movie.credits,
});

export default connect(mapStateToProps)(MovieCasts);
