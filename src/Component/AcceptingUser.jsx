import React, { Component } from "react";
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);
export default class AcceptingUser extends Component {
  state = {
    request: {}
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.types === "request") {
      console.log("Finding Request");
      handler
        .get("/api/requests/" + this.props.request._id)
        .then(apiRes => {
          console.log(apiRes.data);
          this.setState({ request: apiRes.data });
        })
        .catch(apiErr => console.error(apiErr.response));
    } else {
      console.log("Finding Offer");
      handler
        .get("/api/offers/" + this.props.request._id)
        .then(apiRes => {
          console.log(apiRes.data);
          this.setState({ request: apiRes.data });
        })
        .catch(apiErr => console.error(apiErr.response));
    }
  }

  acceptThisUser() {
    if (this.props.types === "request") {
      handler
        .update("/api/requests/isaccepted/" + this.props.request._id, true)
        .then(res => {
          console.log(res);
        })
        .catch(apiErr => console.error(apiErr.response));
    } else {
      handler
        .update("/api/offers/isaccepted/" + this.props.request._id, true)
        .then(res => {
          console.log(res);
        })
        .catch(apiErr => console.error(apiErr.response));
    }
  }
  render() {
    console.log(this.props.users);
    if (!this.props.users) return <p>No user accepted it yet...</p>;
    return this.props.users.map(oneUser => {
      return (
        <div>
          <p>{oneUser.firstname}</p>
          <button onClick={this.acceptThisUser}>Accept this User</button>
        </div>
      );
    });
  }
}
