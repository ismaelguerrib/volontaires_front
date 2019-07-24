import React, { Component } from 'react'
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
            <h1>{oneRequest.name}</h1>
            <AcceptingUser request={oneRequest} users={oneRequest.acceptingUser}></AcceptingUser>
          </div>
        )
      })
    )
  }
}