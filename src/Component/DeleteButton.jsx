import React from "react";
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default function DeleteButton({ id, history }) {
  console.log(id);
  const destruction = function handleDelete() {
    if (history.location.pathname[17] === "b") {
      handler
        .destroy("/api/offers/", id)
        .then(apiRes => {
          console.log(apiRes.data);
          history.push("/");
        })
        .catch(apiErr => console.error(apiErr));
    } else
      handler
        .destroy("/api/requests/", id)
        .then(apiRes => {
          console.log(apiRes.data);
          history.push("/");
        })
        .catch(apiErr => console.error(apiErr));
  };

  return (
    <div>
      <button className="btn-submit" onClick={destruction}>
        Delete This
      </button>
    </div>
  );
}
