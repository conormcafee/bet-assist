import React, { Fragment } from "react";

const FixturesLayout = ({ title, matches }) => (
  <Fragment>
    <h3>{title}</h3>
    <ul>
      {matches.map((match, index) => (
        <li key={index}>
          {match.homeTeam.name} vs {match.awayTeam.name}
        </li>
      ))}
    </ul>
  </Fragment>
);

export default FixturesLayout;
