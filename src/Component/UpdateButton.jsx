import React from "react";
import { Link } from "react-router-dom";
export default function UpdateButton({ id }) {
  return (
    <div>
      <Link to={`/update-form/${id}`} className="link">
        update
      </Link>
    </div>
  );
}
