import React, { useState } from "react";

import CardList from "./components/card-list/card-list.component";
import MenuBar from "./components/menu-bar/menu-bar.component";
import useLocalStorage from "./effects/use-localStorage.effect";
import useFilteredGames from "./effects/use-filteredGames.effect";

import "./App.css";

const App = () => {
  const [games, setGames] = useLocalStorage("games", []);
  const [searchField, setSearchField] = useState("emerald");
  const filteredGames = useFilteredGames(games, searchField);

  return (
    <div className="App">
      <h1>Search</h1>
      <MenuBar setGames={setGames} setSearchField={setSearchField} />
      <CardList games={filteredGames} />
    </div>
  );
};

export default App;
