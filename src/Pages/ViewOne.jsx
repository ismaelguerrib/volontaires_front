import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewOne({ cont }) {
  return (
    <div>
      <div>
        {cont.map((card, i) => (
          <div key={i}>
            <Link to={`/cards/${card._id}`} className="link">
              <img src={card.image_url} alt="" />
              <h4>{card.name}</h4>
              <p>{card.tagline}</p>
              <p>{card.contributed_by}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
