export const BTTS = (matches = [], teamId = 0, type = "") => {
  const teamMatches = matches.filter(
    match => match.homeTeam.id === teamId || match.awayTeam.id === teamId
  );

  if (type === "home") {
    const homeGames = teamMatches.filter(match => match.homeTeam.id === teamId);
    return `${
      homeGames.filter(match => match.score.fullTime.homeTeam > 0).length
    }/${homeGames.length}`;
  } else if (type === "away") {
    const awayGames = teamMatches.filter(match => match.awayTeam.id === teamId);
    return `${
      awayGames.filter(match => match.score.fullTime.awayTeam > 0).length
    }/${awayGames.length}`;
  } else if (type === "both") {
    return teamMatches.filter(
      match =>
        match.score.fullTime.homeTeam > 0 && match.score.fullTime.awayTeam
    ).length;
  } else {
    return 0;
  }
};
