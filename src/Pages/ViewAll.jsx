import React, { Component } from 'react'
import Axios from "axios"

export default class ViewAll extends Component {


  state = {
    cards: []
  }
  if() {

  }
  componentDidMount = () => {
    Axios.get(
      "http://localhost:9999/api/offers"
    )
      .then(dbres => {
        this.setState({ cards: dbres.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div >
        <p>{this.state.cards}</p>
      </div>
    )
  }
}
