import React, { Component } from "react";
// import Axios from "axios";
import Header from "./../Component/Header"

export default class Details extends Component {
  state = {
    offer: []
  };
  // componentDidMount = () => {
  //   Axios.get(
  //     `https://ih-beer-api.herokuapp.com//${this.props.history.match.params.id}`
  //   )
  //     .then(dbres => {
  //       this.setState({ beers: dbres.data.slice(6, 30) });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
      <div>
        <Header />
        <div className="one-view-page">
          <img src="" alt="" />
          <h1 />
          <p />
        </div>
        <p>Details</p>
      </div>
    );
  }
}
