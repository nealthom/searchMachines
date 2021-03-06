import React from "react";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";

import "./menu-bar.styles.css";

import SearchBox from "../search-box/search-box.component";
// update Styling
const MenuBar = ({ setGames, setSearchField }) => {
  const handleFiles = files => {
    let reader = new FileReader();
    reader.onload = e => {
      setGames(Papa.parse(reader.result, { header: true })["data"]);
    };
    reader.readAsText(files[0]);
  };

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  return (
    <div className="container">
      <SearchBox onSearchChange={onSearchChange} />
      <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
        <button className="btn-class">Upload New List</button>
      </ReactFileReader>
    </div>
  );
};

export default MenuBar;
