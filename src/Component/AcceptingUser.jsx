import React, { Component } from "react";
import DisplayUser from "./DisplayUser";
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);
export default class AcceptingUser extends Component {
  state = {
    request: {}
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.types === "request") {
      // console.log("Finding Request");
      handler
        .get("/api/requests/" + this.props.request._id)
        .then(apiRes => {
          // console.log(apiRes.data);
          this.setState({ request: apiRes.data });
        })
        .catch(apiErr => console.error(apiErr.response));
    } else {
      // console.log("Finding Offer");
      handler
        .get("/api/offers/" + this.props.request._id)
        .then(apiRes => {
          // console.log(apiRes.data);
          this.setState({ request: apiRes.data });
        })
        .catch(apiErr => console.error(apiErr.response));
    }
  }

  acceptThisUser(oneUser) {
    if (this.props.types === "request") {
      handler
        .update("/api/requests/isaccepted/" + this.props.request._id, true)
        .then(res => {
          this.deleteOtherUsers(oneUser);
        })
        .catch(apiErr => console.error(apiErr.response));
    } else {
      handler
        .update("/api/offers/isaccepted/" + this.props.request._id, true)
        .then(res => {
          // console.log(res);
          this.deleteOtherUsers(oneUser);
        })
        .catch(apiErr => console.error(apiErr.response));
    }
  }

  deleteOtherUsers(oneUser) {
    if (this.props.types === "request") {
      handler
        .update(
          "/api/requests/removeotherusers/" + this.props.request._id,
          oneUser.id
        )
        .then(res => {
          // console.log(res);
        })
        .catch(apiErr => console.error(apiErr.response));
    } else {
      handler
        .update(
          "/api/requests/removeotherusers/" + this.props.request._id,
          oneUser.id
        )
        .then(res => {
          // console.log(res);
        })
        .catch(apiErr => console.error(apiErr.response));
    }
  }

  render() {
    console.log(this.props.request.userAccepting);
    if (!this.props.request.userAccepting)
      return <p>No user accepted it yet...</p>;
    return this.props.request.userAccepting.map(oneUser => {
      return (
        <div>
          <DisplayUser user={oneUser} />
          <button onClick={() => this.acceptThisUser(oneUser)}>
            Accept this User
          </button>
        </div>
      );
    });
  }
}
