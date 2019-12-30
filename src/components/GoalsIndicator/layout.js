import React from "react";
import { BTTS } from "../../betTypes";
const GoalsIndicatorLayout = ({ pastMatches, team, type }) => (
  <span>{BTTS(pastMatches, team, type)}</span>
);

export default GoalsIndicatorLayout;
