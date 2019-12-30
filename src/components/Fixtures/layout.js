import React, { Fragment } from "react";
import GoalsIndictor from "../GoalsIndicator";

const FixturesLayout = ({ title, matches, pastMatches }) => (
  <Fragment>
    <h3>{title}</h3>
    <ul className="w-full max-w-md bg-gray-200">
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
