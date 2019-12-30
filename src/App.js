import React from "react";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";

import Card from "./components/card/card.component";

import useLocalStorage from "./effects/use-localStorage.effect";

import "./styles.css";

const App = () => {
  const [games, setGames] = useLocalStorage("games", []);

  const handleFiles = files => {
    let reader = new FileReader();
    reader.onload = e => {
      setGames(Papa.parse(reader.result, { header: true })["data"]);
    };

    reader.readAsText(files[0]);
  };
  return (
    <div className="App">
      <h1>Machine Rolodex</h1>
      <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
        <button>Upload New List</button>
      </ReactFileReader>

      {games.length === 0 ? (
        <h1>Upload A List</h1>
      ) : (
        <ul>
          {games.map(game => (
            <Card game={game} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
