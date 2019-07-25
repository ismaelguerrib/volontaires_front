import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function NavMain({ signout }) {
  return (
    <button
      className="btn-nav"
      onClick={() => signout(res => console.log(res))}
    >
      Log Out
    </button>
  );
}
