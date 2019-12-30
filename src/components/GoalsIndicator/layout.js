import React from "react";
import { BTTS } from "../../betTypes";
const GoalsIndicatorLayout = ({ pastMatches, team, type }) => (
  <span className="[ flex flex-none items-center justify-center ][ text-white bg-green-500 font-bold ][ text-xxs ][ h-5 w-5 rounded-full ]">
    {BTTS(pastMatches, team, type)}
  </span>
);

export default GoalsIndicatorLayout;
