import React, { Fragment } from "react";
import Fixtures from "../Fixtures";

const NextGameweekLayout = ({ premierLeague, championship }) => {
  return (
    <Fragment>
      <h3>Premier League</h3>
      <Fixtures matches={premierLeague} />

      <h3>Championship</h3>
      <Fixtures matches={championship} />
    </Fragment>
  );
};

export default NextGameweekLayout;
