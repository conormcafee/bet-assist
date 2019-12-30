import React, { Fragment } from "react";

const NextGameweekLayout = ({ premierLeague, championship }) => {
  return (
    <Fragment>
      <h3>Premier League</h3>
      <ul>
        {premierLeague.map((match, index) => (
          <li key={index}>
            {match.homeTeam.name} vs {match.awayTeam.name}
          </li>
        ))}
      </ul>

      <h3>Championship</h3>
      <ul>
        {championship.map((match, index) => (
          <li key={index}>
            {match.homeTeam.name} vs {match.awayTeam.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NextGameweekLayout;
