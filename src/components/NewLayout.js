import React from "react";

const fixtures = [
  { homeTeam: "Burnley FC", awayTeam: "Aston Villa FC" },
  { homeTeam: "Brighton & Hove Albion FC", awayTeam: "Chelsea FC" },
  { homeTeam: "Newcastle United FC", awayTeam: "Leicester City FC" },
  { homeTeam: "Southampton FC", awayTeam: "Tottenham Hotspur FC" },
  { homeTeam: "Watford FC", awayTeam: "Wolverhampton Wanderers FC" },
  { homeTeam: "Manchester City FC", awayTeam: "Everton FC" },
  { homeTeam: "Norwich City FC", awayTeam: "Crystal Palace FC" },
  { homeTeam: "West Ham United FC", awayTeam: "AFC Bournmouth FC" },
  { homeTeam: "Arsenal FC", awayTeam: "Manchetster United FC" },
  { homeTeam: "Liverpool FC", awayTeam: "Sheffield United FC" }
];

const NewLayout = () => (
  <main className="[ flex ][ text-xs text-gray-200 ][ bg-gray-900 ][ antialiased min-h-screen ]">
    <aside className="flex-1 [ bg-transparent text-gray-800 shadow-inner ]">
      <h3 className="[ py-4 px-2 ][ font-bold ]">Home Team Data</h3>
      <ul>
        {fixtures.map((fixture, index) => (
          <li
            key={index}
            className={`[ ${
              index % 2 === 0 ? "bg-gray-500" : "bg-gray-600"
            } border-t border-gray-700 ][ p-2 ]`}
          >
            Data
          </li>
        ))}
      </ul>
    </aside>
    <section className="[ flex-1 ][ bg-white text-gray-800 shadow-xl ]">
      <h3 className="[ py-4 px-2 text-center ][ font-bold ]">
        Upcoming Fixtures
      </h3>
      <ul>
        {fixtures.map((fixture, index) => (
          <li
            key={index}
            className={`[ ${
              index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
            } ][ border-t border-gray-500 ][ flex ][ px-4 py-2 ]`}
          >
            <span class="flex-1">{fixture.homeTeam}</span>
            <span class="w-4 [ mx-4 ]">vs</span>
            <span class="flex-1">{fixture.awayTeam}</span>
          </li>
        ))}
      </ul>
    </section>
    <aside className="flex-1 [ bg-transparent text-gray-800 shadow-inner ]">
      <h3 className="[ py-4 px-2 ][ font-bold ]">Away Team Data</h3>
      <ul>
        {fixtures.map((fixture, index) => (
          <li
            key={index}
            className={`[ ${
              index % 2 === 0 ? "bg-gray-500" : "bg-gray-600"
            } border-t border-gray-700 ][ p-2 ]`}
          >
            Data
          </li>
        ))}
      </ul>
    </aside>
  </main>
);

export default NewLayout;
