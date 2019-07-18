import React from "react";

export default function Button(props) {
  console.log(props);
  return (
    <div >
      <a href={props.link}>{props.content}</a>
    </div>
  );
}