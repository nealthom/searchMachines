import React from "react";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";

import CardList from "./components/card-list/card-list.component";

import useLocalStorage from "./effects/use-localStorage.effect";

import "./App.css";

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
      <CardList games={games} />
    </div>
  );
};

export default App;
