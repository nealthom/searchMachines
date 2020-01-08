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
      removedDupes.filter(game =>
        //  game["Long Name"].toLowerCase().includes(searchField.toLowerCase())
        // ||
        {
          const test = searchField
            .toLowerCase()
            .split(" ")
            .forEach(item => {
              const hasit = game["Long Name"].split(" ").includes(item);
              console.log(game["Long Name"].split(" ").includes("emerald"));
              // if (!hasit) {
              //   if (!foundHash[game["Mach #"]]) {
              //     foundHash[game["Mach #"]] = 1;
              //     return true;
              //   }
              // }
              return hasit;
            });
          console.log(test);
          return true;
        }
      )
    );
  }, [searchField, games]);

  return filteredGames;
};

export default useFilteredGames;
