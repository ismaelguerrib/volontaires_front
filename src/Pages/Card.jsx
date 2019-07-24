import React from "react";
import { Link } from "react-router-dom";
import OneCard from "./OneCard";
// import Axios from "axios"

export default function Card({ cont, route }) {
  return (
    <div>
      <div className="viewall-container">
        {cont.map((card, i) => (
          <div className="viewall-card" key={i}>
            <Link to={`/cards${route}/${card._id}`} className="link">
              <OneCard card={card} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
