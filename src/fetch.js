// Unused Fetch Data for the time being
const [dontFetch] = useState(true);
const fetchStandings = () => {
  fetch(`https://api.football-data.org/v2/competitions/2016/standings`, {
    method: "get",
    headers: new Headers({
      "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.response));
};

const fetchMatches = () => {
  fetch(`https://api.football-data.org/v2/competitions/2016/matches`, {
    method: "get",
    headers: new Headers({
      "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.response));
};

useEffect(() => {
  if (!dontFetch) {
    fetchStandings();
    fetchMatches();
  }
}, []);
