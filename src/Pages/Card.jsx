import React from "react";
import { Link } from "react-router-dom";
import OneCard from "./OneCard"
// import Axios from "axios"

export default function Card({ cont, route }) {
  return (
    <div>
      <div>
        {cont.map((card, i) => (
          <div key={i}>
            <Link to={`/cards${route}/${card._id}`} className="link">
              <OneCard card={card}></OneCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
