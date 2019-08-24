import React, { useState, useEffect } from "react";
import CompareLayout from "./layout";

import { form } from "../../betTypes";

import {
  MOCK_MATCHES_CHAMPIONSHIP,
  MOCK_STANDINGS_CHAMPIONSHIP,
  MOCK_MATCHES_PREMIER_LEAGUE,
  MOCK_STANDINGS_PREMIER_LEAGUE
} from "../../_mock_data";

const Compare = () => {
  const [compare, setCompare] = useState(false);
  const [homeTeam, setHomeTeam] = useState(null);
  const [awayTeam, setAwayTeam] = useState(null);

  const [league, setLeague] = useState("Premier League");
  const [source, setSource] = useState(null);

  const [completedMatches, setCompletedMatches] = useState([]);
  const [standings, setStandings] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamForm, setTeamForm] = useState([]);

  const toggleLeagueData = league => {
    if (league === "Premier League") {
      return {
        standings: MOCK_STANDINGS_PREMIER_LEAGUE,
        matches: MOCK_MATCHES_PREMIER_LEAGUE
      };
    } else {
      return {
        standings: MOCK_STANDINGS_CHAMPIONSHIP,
        matches: MOCK_MATCHES_CHAMPIONSHIP
      };
    }
  };

  useEffect(() => {
    setSource(toggleLeagueData(league));
  }, [league]);

  useEffect(() => {
    if (source !== null) {
      // Get League Standings
      setStandings(source.standings.standings[0].table);

      // Get FINISHED matches
      setCompletedMatches(
        source.matches.matches.filter(match => match.status === "FINISHED")
      );
    }
  }, [source]);

  // Generate alphabetical list of teams for select dropdown
  useEffect(() => {
    if (standings.length > 0) {
      let getTeams = [];
      standings.map(team => getTeams.push(team.team.name));
      setTeams(getTeams.sort());
    }
  }, [standings]);

  // Calculate Results

  // overGoals(completedMatches, selectedTeam, selectedVenue, selectedGoals)

  // Generate Form
  useEffect(() => {
    teams.length > 0 &&
      completedMatches.length > 0 &&
      setTeamForm(form(teams, completedMatches));
  }, [teams, completedMatches]);

  return (
    <CompareLayout
      compare={compare}
      toggleCompare={data => setCompare(data)}
      homeTeam={homeTeam}
      toggleHomeTeam={homeTeam => setHomeTeam(homeTeam)}
      awayTeam={awayTeam}
      toggleAwayTeam={awayTeam => setAwayTeam(awayTeam)}
      league={league}
      completedMatches={completedMatches}
      toggleSetLeague={data => setLeague(data)}
      standings={standings}
      teamForm={teamForm}
    />
  );
};

export default Compare;
