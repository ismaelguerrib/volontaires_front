import React from "react";
import { Link } from "react-router-dom";
export default function UpdateButton({ id, history }) {
  console.log(history.location)
  return (


    < div >
      <Link to={`/update-form${history.location.pathname}`} className="link">
        update
      </Link>
    </div >
  );
}
