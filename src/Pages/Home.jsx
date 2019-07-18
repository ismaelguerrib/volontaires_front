import React, { Component } from "react";
import Header from "./../Component/Header";
import Button from "./../Component/Button"

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Button content="I wish to be helped" link="/i-want-to-be-helped"></Button>
        <Button content="I would like to help others" link="/i-want-to-offer-help"></Button>
      </div>
    );
  }
}
