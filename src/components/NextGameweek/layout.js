import React from "react";
import Fixtures from "../Fixtures";

const NextGameweekLayout = ({
  premierLeague,
  pastPremierLeague,
  championship,
  pastChampionship
}) => {
  return (
    <section className="flex-1">
      <Fixtures
        title="Premier League"
        matches={premierLeague}
        pastMatches={pastPremierLeague}
      />
      <Fixtures
        title="Championship"
        matches={championship}
        pastMatches={pastChampionship}
      />
    </section>
  );
};

export default NextGameweekLayout;
