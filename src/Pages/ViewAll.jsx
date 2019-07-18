import React, { Component } from "react";
import Axios from "axios";

import Card from "./Card";
export default class ViewAll extends Component {
  state = {
    cards: []
  };

  componentDidMount = () => {
    if (this.props.match.path === "/i-want-to-be-helped") {
      console.log("yooo");

      Axios.get(`${process.env.REACT_APP_BACK_URL}/api/offers`)
        .then(dbres => {
          console.log(dbres.data);
          this.setState({ cards: dbres.data });
          console.log(this.state.cards);

        })
        .catch(err => {
          console.log(err);
        });
    }
    else {
      console.log("weeee uaglio");

      Axios.get(`${process.env.REACT_APP_BACK_URL}/api/requests`)
        .then(dbres => {
          console.log(dbres);

          this.setState({ cards: dbres.data });
          console.log(this.state.cards);

        })
        .catch(err => {
          console.log(err);
        });
    }
  }


  render() {

    return (
      <div>
        <Card cont={this.state.cards}></Card>
      </div>
    );
  }
}
