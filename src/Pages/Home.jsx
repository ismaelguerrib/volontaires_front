import React, { Component } from "react";
import Header from "./../Component/Header";
import Button from "./../Component/Button";
// import VolunteersActive from "../images/blue-charity-cheerful-1260293.jpg";
export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="buttons-container">
          {/* <img src={VolunteersActive} alt="Volunteers-active" /> */}
          <div className="Home-request-infos">
            <h2>Which help can I find on Volunteers ?</h2>
            <Button
              className="btn-options btn-request"
              content="I wish to be helped"
              link="/option-request"
            />
          </div>
          <div className="Home-offer-infos">
            <h2>I want to be a Volunteer !</h2>
            <Button
              className="btn-options btn-offer"
              content="I would like to help others"
              link="/option-offer"
            />
          </div>
        </div>
      </>
    );
  }
}
