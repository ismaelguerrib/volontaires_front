import React, { Component } from 'react'
import { Link } from "react-router-dom";
import apiHandler from "./../ApiHandler/Handler";
import AcceptingUser from "./AcceptingUser"
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class Request extends Component {
  state = {
    requests: []
  }
  componentDidMount() {
    console.log(this.props.user.id);

    handler.get("/api/requests/findbyowner/" + this.props.user.id).then(apiRes => {
      console.log(apiRes.data);
      this.setState({ requests: apiRes.data });
    })
      .catch(apiErr => console.error(apiErr.response));
  }
  render() {
    return (
      this.state.requests.map(oneRequest => {
        return (
          <div>
            <Link to={`/cards/i-want-to-offer-help/${oneRequest._id}`} className="link">
              <h1>{oneRequest.name}</h1>
              <p>{oneRequest.acceptingUser}</p>
              <p>{oneRequest.location}</p>
            </Link>
            <AcceptingUser request={oneRequest} users={oneRequest.acceptingUser} types="request"></AcceptingUser>
          </div>
        )
      })
    )
  }
}
