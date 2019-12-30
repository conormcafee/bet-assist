import React from "react";
import { connect } from "react-redux";
import NextGameweekLayout from "./layout";

const NextGameweek = ({ fixtures }) => {
  const { premierLeague, championship } = fixtures;
  return (
    <NextGameweekLayout
      premierLeague={premierLeague.fixtures}
      championship={championship.fixtures}
    />
  );
};

const mapStateToProps = state => ({
  fixtures: state.nextGameweek
});

export default connect(mapStateToProps, null)(NextGameweek);
