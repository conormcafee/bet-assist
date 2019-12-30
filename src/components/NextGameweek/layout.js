import React, { Fragment } from "react";
import Fixtures from "../Fixtures";

const NextGameweekLayout = ({ premierLeague, championship }) => {
  return (
    <Fragment>
      <Fixtures title="Premier League" matches={premierLeague} />
      <Fixtures title="Championship" matches={championship} />
    </Fragment>
  );
};

export default NextGameweekLayout;
