import React, { Component } from 'react'
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class AcceptedTasks extends Component {
  state = {
    user: {},
    task: {}
  }

  componentDidMount() {
    this.setState({ user: this.props.user });
  }
  render() {
    return (
      <div>
        <h2>yooonisvenrocwin</h2>
      </div>
    )
  }
}
