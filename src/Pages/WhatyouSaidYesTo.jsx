import React, { Component } from 'react';
import apiHandler from "./../ApiHandler/Handler";
import OneTask from "./OneTask"
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);


export default class WhatyouSaidYesTo extends Component {
  state = {
    yourtasksReq: [],
    yourtasksOff: [],
    user: {}
  }

  componentDidMount() {
    this.setState({ user: this.props.user.id })


    handler.get("api/offers/requestinguser", this.state.user).then(res => {
      // console.log(this.state.user);
      // console.log(res);
      this.setState({ yourtasksOff: res.data })
    }).catch(err => console.log(err))
    handler.get("api/requests/requestinguser", this.state.user).then(res => {
      // console.log(this.state.user);
      // console.log(res);
      this.setState({ yourtasksReq: res.data })
      console.log(this.state.yourtasksReq);

    }).catch(err => console.log(err))
  }

  render() {

    if (!this.state.yourtasksReq) return <p>you didn't say yes to anything</p>;
    return this.state.yourtasksReq.map(onetask => {
      return (
        <div>
          <OneTask task={onetask}></OneTask>
        </div>
      );
    });

  }
}
