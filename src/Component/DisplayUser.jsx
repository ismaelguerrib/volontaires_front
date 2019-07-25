import React, { Component } from "react";
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class DisplayUser extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    console.log(this.props.user);
    //   this.setState({ user: this.props.user })
    handler
      .get("/api/users/" + this.props.user)
      .then(res => {
        this.setState({ user: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h5>{this.state.user.firstname}</h5>
        <h5>{this.state.user.lastname}</h5>
        <h5>{this.state.user.age}</h5>
        <img src={this.state.user.avatar} alt="" />
      </div>
    );
  }
}
