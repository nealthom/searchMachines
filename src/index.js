import React from "react";
import ReactDOM from "react-dom";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";

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
      <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
        <button>Upload</button>
      </ReactFileReader>

      {games.length === 0 ? (
        <h1>Empty</h1>
      ) : (
        <ul>
          {games.map(game => (
            <li key={game["Mach #"]}>{game["Long Name"]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
