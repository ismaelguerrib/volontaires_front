import React, { Component } from "react";
import Axios from "axios";

export default class ViewAll extends Component {
  state = {
    cards: []
  };
  if() {}
  componentDidMount = () => {
    Axios.get(`${process.env.REACT_APP_BACK_URL}/api/offers`)
      .then(dbres => {
        this.setState({ cards: dbres.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <p>{this.state.cards}</p>
      </div>
    );
  }
}
