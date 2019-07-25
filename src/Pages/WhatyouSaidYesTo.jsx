import React, { Component } from 'react';
import apiHandler from "./../ApiHandler/Handler";
import OneTask from "./OneTask"
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);


export default class WhatyouSaidYesTo extends Component {
  state = {
    yourtasksReq: [],
    yourtasksOff: [],
    user: {},
    alltasks: []
  }

  componentDidMount() {
    this.setState({ user: this.props.user.id })
    var tasks = [];




    handler.get("api/offers/requestinguser/" + this.props.user.id).then(res => {
      console.log(this.props.user.id);

      res.data.forEach(element => {
        tasks.push(element)
      });
      this.setState({ yourtasksOff: res.data })
      console.log(this.state.yourtasksOff);
      console.log(tasks);

    }).catch(err => console.log(err))
    handler.get("api/requests/requestinguser/" + this.props.user.id).then(res => {
      // console.log(this.props.user.id);
      // console.log(res.data);
      res.data.forEach(element => {
        tasks.push(element)
      });
      this.setState({ yourtasksReq: res.data })
      console.log(this.state.yourtasksReq);

    }).catch(err => console.log(err))

    this.setState({ alltasks: tasks })
    console.log(this.state.alltasks);

  }

  render() {

    if (!this.state.alltasks) return <p>you didn't say yes to anything</p>;
    return this.state.alltasks.map(onetask => {
      return (
        <div>
          <h5>You said yes to...</h5>
          <OneTask task={onetask}></OneTask>
        </div>
      );
    });

  }
}
