import React, { Component } from "react";
import Axios from "axios";
import Header from "../Component/Header";
import Card from "./Card";
// import { withRouter } from "react-router-dom";


export default class ViewAll extends Component {


  constructor(history) {
    super(history);
    this.state = {
      cards: []
    };
    console.log("meh", this.props)
    this.listenRouteChanges();
  }


  listenRouteChanges() {
    this.props.history.listen((location, action) => {
      // location is an object like window.location
      console.log(action, location.pathname, location.state);
      this.getData();
    });

  }

  getData() {
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
    } else {
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

  componentDidMount = () => {
    this.getData()
  };

  render() {
    return (
      <div>
        <Header />
        <Card cont={this.state.cards} route={this.props.match.path} />
      </div>
    );
  }
}
