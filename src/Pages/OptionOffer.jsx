import React from "react";
import Header from "./../Component/Header";
import Button from "./../Component/Button";

export default function OptionOffer() {
  return (
    <div className="wrapper">
      <Header />
      <div className="buttons">
        <Button
          content="I want to see all the requests"
          link="/i-want-to-offer-help"
        />
        <Button
          content="I want to create my offer for help"
          link="/create-an-offer"
        />
      </div>
    </div>
  );
}
