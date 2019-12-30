import React from "react";

const FixturesLayout = ({ matches }) => (
  <ul>
    {matches.map((match, index) => (
      <li key={index}>
        {match.homeTeam.name} vs {match.awayTeam.name}
      </li>
    ))}
  </ul>
);

export default FixturesLayout;
