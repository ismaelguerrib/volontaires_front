import React from "react";
import Header from "./../Component/Header";
import Button from "./../Component/Button";

export default function OptionOffer() {
  return (
    <div>
      <Header />
      <div className="buttons-container">
        <div className="Home-offer-infos">
          <h2>I want to create my offer for help !</h2>
          <Button
            className="btn-options btn-offer"
            content="Create my offer"
            link="/create-an-offer"
          />
        </div>
        <div className="Home-request-infos">
          <h2>I want to see all the requests !</h2>
          <Button
            className="btn-options btn-request"
            content="Find someone to help"
            link="/i-want-to-offer-help"
          />
        </div>
      </div>
    </div>
  );
}
