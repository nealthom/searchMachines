import React from "react";

import "./card.styles.css";

const Card = ({ game }) => (
  <div className="card-container">
    <h2>{game["Long Name"]}</h2>
    <p>{game["Location"]}</p>
  </div>
);

export default Card;
