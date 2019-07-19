import React from 'react'
import apiHandler from "./../ApiHandler/Handler"
const handler = new apiHandler(process.env.REACT_APP_BACK_URL)

export default function DeleteButton({ id, history }) {
  console.log(id);
  const destruction = function handleDelete() {
    handler.destroy("/api/offers/" || "/api/requests/", id)
      .then(apiRes => {
        console.log(apiRes.data);
        history.push("/")
      })
      .catch(apiErr => console.error(apiErr));
  }

  return (
    <div>
      <button onClick={destruction}>Delete This</button>
    </div>
  )
}

