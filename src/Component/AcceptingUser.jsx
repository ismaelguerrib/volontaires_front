import React, { Component } from 'react'
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);
export default class AcceptingUser extends Component {
  state = {
    request: {}
  }

  componentDidMount() {
    console.log(this.props.request.id);
    handler.get("/api/requests/" + this.props.request.id).then(apiRes => {
      console.log(apiRes.data);
      this.setState({ requests: apiRes.data });
    })
      .catch(apiErr => console.error(apiErr.response));
  }

  acceptThis() {
    handler.update("/isaccepted/" + this.props.request.id, true).then(res => {
      console.log(res);
    }).catch(apiErr => console.error(apiErr.response))
  }
  render() {
    return (
      this.props.users.map(oneUser => {
        return (
          <div>
            <button onClick={this.acceptThis}></button>
          </div>
        )
      })
    )
  }
}
