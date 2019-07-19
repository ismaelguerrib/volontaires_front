import React from "react";
import { Link } from "react-router-dom";
// import Axios from "axios"

export default function Card({ cont, route }) {
  return (
    <div>
      <div>
        {cont.map((card, i) => (
          <div key={i}>
            <Link to={`/cards${route}/${card._id}`} className="link">
              <img src={card.image_url} alt="" />
              <h4>{card.name}</h4>
              <p>{card.tags}</p>
              <p>{card.location}</p>
              <p>{card.time}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
