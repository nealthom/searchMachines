import React,{useState,useEffect} from "react";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component'

import useLocalStorage from "./effects/use-localStorage.effect";

import "./App.css";

const App = () => {
  const [games, setGames] = useLocalStorage("games", []);
  const [searchField, setSearchField] = useState('search')
  const [filteredGames, setFilteredGames] = useState([])

  useEffect(()=>{
    console.log(typeof games)
// const filteredGames = games.filter(
//     game =>
//   game["Long Name"].toLowerCase().includes(searchField.toLowerCase()))
  },[searchField])

  const handleFiles = files => {
    let reader = new FileReader();
    reader.onload = e => {
      setGames(Papa.parse(reader.result, { header: true })["data"]);
    };

    reader.readAsText(files[0]);
  };

  const onSearchChange = event =>{
    setSearchField(event.target.value,console.log(searchField))
    

  }

  
  return (
    <div className="App">
      <h1>Machine Search</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
        <button>Upload New List</button>
      </ReactFileReader>

      <CardList games={filteredGames} />
    </div>
  );
};

export default App;
