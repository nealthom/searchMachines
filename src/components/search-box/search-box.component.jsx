import React from "react";

import "./search-box.styles.css";

const SearchBox = props => (
  <input
    className="search-box"
    type="search"
    placeholder="type to start search"
    onChange={props.onSearchChange}
  />
);

export default SearchBox;
