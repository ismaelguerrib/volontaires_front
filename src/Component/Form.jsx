import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";

const apiHandler = new APIHandler();

export default class Form extends Component {
  state = {
    name: "",
    description: "",
    location: "",
    tags: "",
    time: ""
  };

  handleChange = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.match.path === "/create-an-offer") {
      apiHandler.post("/api/offers", this.state);
    } else {
      apiHandler.post("/api/requests", this.state);
    }
  };

  render() {
    return (
      <div className="big-container-form">
        <h1> Create youre own cards</h1>
        <div className="form-container">
          <form
            id="form"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name"> Title : </label>
            <input type="string" name="name" id="name" />
            <label htmlFor="description"> Description :</label>
            <input type="string" name="description" id="description" />
            <label htmlFor="location">Location: </label>
            <input type="string" name="location" id="location" />
            <label htmlFor="tags">Catégorie :</label>
            <select name="tags" form="create-one">
              <option value="Take a walk">Choose youre category:</option>
              <option value="Take a walk">Take a walk</option>
              <option value="DIY">DIY</option>
              <option value="Admiministrative">Admiministrative</option>
              <option value="Learn">Learn</option>
              <option value="Nursering">Nursering</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="time">Date :</label>
            <input type="date" name="time" id="date" />
            <button> Submit </button>
          </form>
        </div>
      </div>
    );
  }
}
