import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { TeamForm } from "./components/TeamForm";

import { form, overGoals } from "./betTypes";
import {
  MOCK_MATCHES_CHAMPIONSHIP,
  MOCK_STANDINGS_CHAMPIONSHIP,
  MOCK_MATCHES_PREMIER_LEAGUE,
  MOCK_STANDINGS_PREMIER_LEAGUE
} from "./_mock_data";

const App = () => {
  const [activeTeam, setActiveTeam] = useState("");

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
    <Flex>
      <Article>
        <Header>
          <h1>{league} 2019/2020</h1>
          <Button
            onClick={() =>
              setLeague(
                league === "Premier League" ? "Championship" : "Premier League"
              )
            }
          >
            Switch to{" "}
            {league === "Premier League" ? "Champtionship" : "Premier League"}
          </Button>
        </Header>

        <Table>
          <TableRow heading>
            <TableCell heading>Team</TableCell>
            <TableCell heading textAlign="right">
              Form
            </TableCell>
            <TableCell heading textAlign="right">
              GF
            </TableCell>
            <TableCell heading textAlign="right">
              GA
            </TableCell>
            <TableCell heading textAlign="right">
              PTS
            </TableCell>
          </TableRow>
          {standings.map((team, index) => (
            <TableRow key={index}>
              <TableCell>
                <button onClick={() => setActiveTeam(team.team.name)}>
                  {team.team.name}
                </button>
              </TableCell>
              <TableCell textAlign="right">
                <TeamForm team={team.team.name} form={teamForm} />
              </TableCell>
              <TableCell textAlign="right">{team.goalsFor}</TableCell>
              <TableCell textAlign="right">{team.goalsAgainst}</TableCell>
              <TableCell textAlign="right">{team.points}</TableCell>
            </TableRow>
          ))}
        </Table>
      </Article>
      <Aside>
        <h2>Data - {activeTeam}</h2>

        {activeTeam !== "" && (
          <Fragment>
            <ul>
              <li>
                Home: Over 0.5 Goals:{" "}
                {overGoals(completedMatches, activeTeam, "HOME", 0.5)}
              </li>
              <li>
                Away: Over 0.5 Goals:{" "}
                {overGoals(completedMatches, activeTeam, "AWAY", 0.5)}
              </li>
            </ul>

            <ul>
              <li>
                Home: Over 1.5 Goals:{" "}
                {overGoals(completedMatches, activeTeam, "HOME", 1.5)}
              </li>
              <li>
                Away: Over 1.5 Goals:{" "}
                {overGoals(completedMatches, activeTeam, "AWAY", 1.5)}
              </li>
            </ul>

            <ul>
              <li>
                Home: Over 2.5 Goals:{" "}
                {overGoals(completedMatches, activeTeam, "HOME", 2.5)}
              </li>
              <li>
                Away: Over 2.5 Goals:{" "}
                {overGoals(completedMatches, activeTeam, "AWAY", 2.5)}
              </li>
            </ul>
          </Fragment>
        )}
      </Aside>
    </Flex>
  );
};

export default App;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 0.9rem;
  line-height: 1.6;
  min-height: 100vh;

  ul {
    list-style: none;
    padding-left: 0;
  }

  h1 {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Article = styled.article`
  padding: 1em;
  background: #f6f6f6;
  order: 2;

  @media only screen and (min-width: 768px) {
    flex: 2;
    order: 1;
  }
`;

const Aside = styled.aside`
  padding-top: 1em;
  padding-right: 1em;
  padding-bottom: 2em;
  padding-left: 1em;
  border-left: 1px solid #e6e6e6;
  order: 1;

  @media only screen and (max-width: 767px) {
    border-bottom: 1px solid #e6e6e6;
  }

  @media only screen and (min-width: 768px) {
    flex: 1;
    order: 2;
  }
`;

const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.div`
  display: table-row;
  border-bottom: ${props => props.heading && `1px solid #e6e6e6`};
  font-weight: ${props => props.heading && `700`};
`;

const TableCell = styled.div`
  display: table-cell;
  text-align: ${props => props.textAlign};
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: ${props => props.textAlign && `100px`};
`;

const Button = styled.button`
  background: black;
  appearance: none;
  border: none;
  padding: 0.5em 1em;
  border-radius: 1em;
  color: white;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
