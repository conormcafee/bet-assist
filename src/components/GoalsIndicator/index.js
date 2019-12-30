import React from "react";
import GoalsIndicatorLayout from "./layout";

const GoalsIndicator = ({ pastMatches, team, type }) => (
  <GoalsIndicatorLayout pastMatches={pastMatches} team={team} type={type} />
);

export default GoalsIndicator;
