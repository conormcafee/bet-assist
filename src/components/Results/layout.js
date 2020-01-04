import React from "react";

const ResultsLayout = ({ homeResults, awayResults }) => (
  <aside className="flex-1">
    {homeResults ? "Home" : awayResults ? "Away" : ""} Results
  </aside>
);

export default ResultsLayout;
