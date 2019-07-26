import React, { Component } from "react";
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class AcceptedTasks extends Component {
  state = {
    user: {},
    task: []
  };

  componentDidMount() {
    var tasks = [];
    this.setState({ user: this.props.user });

    handler
      .get("api/offers/requestinguser/" + this.props.user.id)
      .then(res => {
        res.data.forEach(element => {
          if (element.isAccepet) {
            tasks.push(element);
          }
        });
        console.log(tasks);
        // this.setState({ task: tasks })
        console.log(this.state.task);
      })
      .catch(err => console.log(err));

    handler
      .get("api/requests/requestinguser/" + this.props.user.id)
      .then(res => {
        console.log(res.data);

        // console.log(this.props.user.id);
        // console.log(res.data);
        res.data.forEach(element => {
          if (element.isAccepet) {
            tasks.push(element);
          }
        });
      })
      .catch(err => console.log(err));

    this.setState({ task: tasks });
  }
  render() {
    return this.state.task.map(oneTask => {
      return (
        <div className="accepted-tasks-container">
          <p className="accepted-tasks-details">{oneTask.name}</p>
          <p className="accepted-tasks-details">
            You were accepted for this task
          </p>
        </div>
      );
    });
  }
}
