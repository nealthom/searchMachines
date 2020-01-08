import { useState, useEffect } from "react";

const useFilteredGames = (games, searchField) => {
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    // Remove blank rows, data contains some blanks
    const removedBlankGames = games.filter(game =>
      game.hasOwnProperty("Long Name")
    );

    const gamesWithoutDuplicates = []; // container for games
    const assetHash = {}; // used to keep up with removing duplicates

    // Remove duplicate entries, data has some duplicates yay
    removedBlankGames.forEach(game => {
      if (!assetHash[game["Mach #"]]) {
        assetHash[game["Mach #"]] = 1;
        gamesWithoutDuplicates.push(game);
      }
    });

    let finalSetOfGames = []; // games to be added to filteredGames
    const foundHash = {}; // used to prevent duplicates being added to finalSetofGames

    gamesWithoutDuplicates.forEach(game => {
      if (game["Long Name"].toLowerCase().includes(searchField.toLowerCase())) {
        foundHash[game["Mach #"]] = 1;
        finalSetOfGames.push(game);
      }
      searchField
        .toLowerCase()
        .split(" ")
        .forEach(item => {
          const hasit = game["Long Name"].split(" ").includes(item);

          if (hasit) {
            if (!foundHash[game["Mach #"]]) {
              foundHash[game["Mach #"]] = 1;
              finalSetOfGames.push(game);
            }
          }
        });
    });
    console.log(foundHash);
    setFilteredGames(finalSetOfGames);
  }, [searchField, games]);

  return filteredGames;
};

export default useFilteredGames;
