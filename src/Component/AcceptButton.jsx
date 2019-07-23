import React from 'react'
import apiHandler from "./../ApiHandler/Handler"
const handler = new apiHandler(process.env.REACT_APP_BACK_URL)

export default function AcceptButton({ id, history, currentUser }) {
  console.log(currentUser);
  console.log(history.location.pathname);

  const acceptTask = function handleDelete() {
    if (history.location.pathname[17] === "b") {
      handler.update("/api/offers/accept/" + id, { userAccepting: currentUser })
        .then(apiRes => {
          console.log(currentUser);
          console.log(apiRes.data);
          history.push("/")
        })
        .catch(apiErr => console.error(apiErr));
    } else handler.update("/api/requests/accept/" + id, { userAccepting: currentUser })
      .then(apiRes => {
        console.log(apiRes.data);
        history.push("/")
      })
      .catch(apiErr => console.error(apiErr));
  }

  return (
    <div>
      <button onClick={acceptTask}>Accept</button>
    </div>
  )
}
