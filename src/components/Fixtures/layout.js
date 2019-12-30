import React, { Fragment } from "react";
import GoalsIndictor from "../GoalsIndicator";

const FixturesLayout = ({ title, matches, pastMatches }) => (
  <Fragment>
    <h3>{title}</h3>
    <ul>
      {matches.map((match, index) => (
        <li key={index}>
          <GoalsIndictor
            pastMatches={pastMatches}
            team={match.homeTeam.id}
            type="home"
          />
          {match.homeTeam.name}
          <GoalsIndictor
            pastMatches={pastMatches}
            team={match.homeTeam.id}
            type="both"
          />
          vs
          <GoalsIndictor
            pastMatches={pastMatches}
            team={match.awayTeam.id}
            type="both"
          />
          {match.awayTeam.name}
          <GoalsIndictor
            pastMatches={pastMatches}
            team={match.awayTeam.id}
            type="away"
          />
        </li>
      ))}
    </ul>
  </Fragment>
);

export default FixturesLayout;
