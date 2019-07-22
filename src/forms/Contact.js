import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";

const apiHandler = new APIHandler();
// console.log(apiHandler);

export default class ContactForm extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    subject: "js",
    message: ""
  };

  checkForm() {
    const { name, lastname, email, subject, message } = this.state;
    return name && lastname && email && subject && message;
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.checkForm()) {
      apiHandler
        .post("/send-email", this.state)
        .then(serverRes => console.log(serverRes))
        .catch(serverErr => console.error(serverErr));
    } else console.warn("missing fields");
  };

  handleChange = evt => {
    console.log(evt.target.value);
    const { name, value } = evt.target;
    this.setState({ [name]: value }, () => {});
  };

  render() {
    return (
      <form
        id="form_contact"
        className="form"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      >
        <label htmlFor="name">name</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="lastname">lastname</label>
        <input id="lastname" name="lastname" type="text" />
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="subject">what's up ?</label>
        <select name="subject" id="subject">
          <option value="js">js</option>
          <option value="react">react</option>
          <option value="express">express</option>
          <option value="api">api</option>
          <option value="mongo">mongo</option>
        </select>
        <label htmlFor="message">message</label>
        <textarea name="message" id="message" cols="30" rows="10" />
        <button>send</button>
      </form>
    );
  }
}
