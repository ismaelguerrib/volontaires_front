import React from "react";

export default function Button(props) {
  console.log(props);
  return (
    <div>
      <a className="btn-viewone btn-offer" href={props.link}>
        {props.content}
      </a>
    </div>
  );
}
