import { useState, useEffect } from "react";

const useFilteredGames = (games, searchField) => {
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const newGames = games.filter(game => game.hasOwnProperty("Long Name"));

    const removedDupes = [];
    const assetHash = {};
    const foundHash = {};

    newGames.forEach(game => {
      if (!assetHash[game["Mach #"]]) {
        assetHash[game["Mach #"]] = 1;
        removedDupes.push(game);
      }
    });
    // Fix filter
    setFilteredGames(
      removedDupes.filter(
        game =>
          game["Long Name"].toLowerCase().includes(searchField.toLowerCase()) ||
          game["Long Name"].toLowerCase().includes("double")
        // searchField
        //   .toLowerCase()
        //   .split(" ")
        //   .forEach(item => {
        //     const hasit = game["Mach #"].split(" ").includes(item);
        //     if (hasit) {
        //       if (!foundHash[game["Mach #"]]) {
        //         foundHash[game["Mach #"]] = 1;
        //         return game;
        //       }
        //     }
        //   })
      )
    );
  }, [searchField, games]);

  return filteredGames;
};

export default useFilteredGames;
