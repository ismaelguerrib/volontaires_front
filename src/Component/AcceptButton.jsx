import React from "react";
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default function AcceptButton({ id, history, currentUser }) {
  console.log("current user", currentUser);
  console.log("id:", id);
  console.log(history.location.pathname);

  const acceptTask = () => {
    if (history.location.pathname[17] === "b") {
      console.log(id);
      handler
        .update("/api/offers/accept/" + id, { userAccepting: currentUser })
        .then(apiRes => {
          console.log(apiRes.data);
          history.push("/");
        })
        .catch(apiErr => console.error(apiErr));
    } else
      handler
        .update("/api/requests/accept/" + id, { userAccepting: currentUser })
        .then(apiRes => {
          console.log(apiRes.data);
          history.push("/");
        })
        .catch(apiErr => console.error(apiErr));
  };

  return (
    <div>
      <button className="btn-submit" onClick={acceptTask}>
        Accept
      </button>
    </div>
  );
}
