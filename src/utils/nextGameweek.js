export const nextGameweek = data => {
  if (data.matches.length > 0) {
    const currentMatchday = data.matches[0].season.currentMatchday;
    const nextMatchday = currentMatchday + 1;
    return data.matches.filter(match => match.matchday === nextMatchday);
  } else {
    return [];
  }
};
