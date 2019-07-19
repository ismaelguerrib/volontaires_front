import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";

const apiHandler = new APIHandler(process.env.REACT_APP_BACK_URL);

export default class Update extends Component {
  state = {
    name: "",
    description: "",
    location: "",
    tags: "",
    date: ""
  };

  handleChange = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log(this.setState);
  };

  handleSubmit = evt => {
    console.log(this.state.obj);

    console.log(this.props.match.params.id);
    evt.preventDefault();
    if (this.props.match.path === "/create-an-offer") {
      apiHandler.update(
        "/api/offers/" + this.props.match.params.id,
        this.state.obj
      );
    } else {
      apiHandler.update(
        "/api/requests/" + this.props.match.params.id,
        this.state.obj
      );
    }
  };

  componentDidMount() {
    var newObj = {};

    apiHandler
      .get(
        "/api/offers/" + this.props.match.params.id ||
          "/api/requests" + this.props.match.params.id,
        0
      )
      .then(dbres => {
        newObj = dbres.data;
        //   this.setState()
        //     {name: {dbres.data.name}}
        //     description:  {dbres.data.description}
        //     // location: "",
        //     // tags: "",
        //     // date: ""

        this.setState({ obj: newObj });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="big-container-form">
        <h1> Update youre cards</h1>
        <div className="form-container">
          <form
            id="form"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name"> Title : </label>
            <input
              type="string"
              name="name"
              id="name"
              defaultValue={this.state.obj.name}
            />
            <label htmlFor="description"> Description :</label>
            <input
              type="string"
              name="description"
              id="description"
              defaultValue={this.state.obj.description}
            />
            <label htmlFor="location">Location: </label>
            <input
              type="string"
              name="location"
              id="location"
              defaultValue={this.state.obj.location}
            />
            <label htmlFor="tags">Catégorie :</label>
            <select name="tags" form="create-one">
              <option>Choose youre category:</option>
              <option value="Take a walk">Take a walk</option>
              <option value="DIY">DIY</option>
              <option value="Admiministrative">Admiministrative</option>
              <option value="Learn">Learn</option>
              <option value="Nursering">Nursering</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="date">Date :</label>
            <input
              type="date"
              name="date"
              id="date"
              defaultValue={this.state.obj.date}
            />
            <button> Submit </button>
          </form>
        </div>
      </div>
    );
  }
}
