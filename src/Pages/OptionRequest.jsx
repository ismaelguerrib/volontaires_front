import React from "react";
import Header from "./../Component/Header";
import Button from "./../Component/Button";

export default function OptionRequest() {
  return (
    <div>
      <Header />
      <div className="buttons-container">
        <div className="Home-offer-infos">
          <h2>I want to create my request of help!</h2>
          <Button
            className="btn-options btn-offer"
            content="Create my request"
            link="/create-a-request"
          />
        </div>
        <div className="Home-request-infos">
          <h2>I want to see all the offers !</h2>
          <Button
            className="btn-options btn-request"
            content="Find some help"
            link="/i-want-to-be-helped"
          />
        </div>
      </div>
    </div>
  );
}
