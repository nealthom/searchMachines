import { useState, useEffect } from "react";

const useFilteredGames = (games, searchField) => {
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const newGames = games.filter(game => game.hasOwnProperty("Long Name"));

    const removedDupes = [];
    const assetHash = {};

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
          searchField
            .toLowerCase()
            .split(" ")
            .forEach(word => {
              game["Long Name"]
                .toLowerCase()
                .split(" ")
                .includes(word);
            })
      )
    );
  }, [searchField, games]);

  return filteredGames;
};

export default useFilteredGames;
