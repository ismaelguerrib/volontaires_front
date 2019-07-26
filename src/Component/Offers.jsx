import React, { Component } from "react";
import apiHandler from "./../ApiHandler/Handler";
import AcceptingUser from "./AcceptingUser";
import { Link } from "react-router-dom";

const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class Request extends Component {
  state = {
    offers: []
  };
  componentDidMount() {
    console.log(this.props.user.id);

    handler
      .get("/api/offers/findbyowner/" + this.props.user.id)
      .then(apiRes => {
        console.log(apiRes.data);
        this.setState({ offers: apiRes.data });
      })
      .catch(apiErr => console.error(apiErr.response));
  }
  render() {
    return this.state.offers.map(oneOffer => {
      return (
        <div className="dashboard-offer-container">
          <Link
            to={`/cards/i-want-to-be-helped/${oneOffer._id}`}
            className="link"
          >
            <h1 className="card-details card-details-title">{oneOffer.name}</h1>
          </Link>
          <AcceptingUser
            request={oneOffer}
            users={oneOffer.acceptingUser}
            types="offer"
          />
        </div>
      );
    });
  }
}
