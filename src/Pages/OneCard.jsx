import React, { Component } from 'react';
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class OneCard extends Component {
  state = {
    card: {},
    user: {}
  }

  componentDidMount() {
    console.log(this.props.card);
    this.setState({ card: this.props.card }, () => {
      handler.get(`api/users/${this.state.card.userId}`).then(res => {
        console.log(res)
        this.setState({ user: res.data })
      }).catch(err => console.log(err))
      console.log(this.state.card);
    });

  }
  render() {
    return (
      <div>
        <img src={this.state.user.avatar} alt="userImage" />
        {/* <h2>{this.state.user.avatar}</h2> */}
        <h4>{this.state.card.name}</h4>
        <p>{this.state.card.tags}</p>
        <p>{this.state.card.location}</p>
        <p>{this.state.card.time}</p>
      </div>
    )
  }
}
