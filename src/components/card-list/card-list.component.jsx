import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ games }) => (
  <div className="card-list">
    {games.map(game =>
      game["Long Name"] ? <Card key={game["Mach #"]} game={game} /> : ""
    )}
  </div>
);

export default CardList;
