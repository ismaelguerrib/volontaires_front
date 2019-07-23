import React from "react";

export default function Button(props) {
  console.log(props);
  return (
    <div className="buttons-container">
      <a className={props.className} href={props.link}>
        {props.content}
      </a>
    </div>
  );
}
