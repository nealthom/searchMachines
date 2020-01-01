import React from "react";

import "./card.styles.css";

const Card = ({ game }) => (
  <div className="card-container">
    <h2>{game["Location"]}</h2>
    <p>{game["Long Name"]}</p>
  </div>
);

export default Card;
