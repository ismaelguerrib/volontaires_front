import React from "react";
import Header from "./../Component/Header";
import Button from "./../Component/Button";

export default function OptionRequest() {
  return (
    <div className="wrapper">
      <Header />
      <Button
        content="I want to see all the offers"
        link="/i-want-to-be-helped"
      />
      <Button
        content="I want to create my request of help"
        link="/create-a-request"
      />
    </div>
  );
}
