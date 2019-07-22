import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";
import "font-awesome/css/font-awesome.min.css";

const apiHandler = new APIHandler();

export default class Signup extends Component {
  state = {
    isPasswordOk: false,
    name: "foo",
    lastname: "bar",
    email: "foo@bar.baz",
    avatar: "",
    password: "1234",
    passwordConfirm: "1234"
  };

  constructor() {
    super();
    this.avatarRef = React.createRef();
  }

  // @todo => code this function to validate form according your needs
  checkAllFields() {
    return true;
  }

  checkPasswordMatch() {
    const { password, passwordConfirm } = this.state;
    var passed = false;
    if (password && passwordConfirm) passed = password === passwordConfirm;
    else passed = true;
    return passed;
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.checkAllFields()) return console.warn("form incomplete");

    const file = this.avatarRef.current.files[0];
    const {
      name,
      lastname,
      email,
      password,
      passwordConfirm,
      avatar
    } = this.state;
    // simulate multipart/formdata ...
    const fd = new FormData();
    fd.append("name", name); // accessible @backend as req.body.name ...
    fd.append("lastname", lastname); // req.body.lastname
    fd.append("email", email); // req.body.email
    fd.append("password", password); // req.body./password
    if (file) fd.set("avatar", file, file.name);
    // above, note the difference : fd.SET !!! accessible @backend as req.file ...

    console.log("file ? ", file);

    apiHandler
      .post("/signup", fd) // let's post the built formData object as a regular payload
      .then(serverRes => {
        // everything is fine, redirect to dashboard
        console.log(this.props);
        this.props.redirect("/dashboard");
        console.log(serverRes);
      })
      .catch(serverErr => console.error(serverErr));
  };

  toggleFilePicker = evt => {
    // console.log(this.avatarRef);
    this.avatarRef.current.click();
  };

  render() {
    const { handleChange, handleSubmit, toggleFilePicker } = this;
    const { name, lastname, email, password, passwordConfirm } = this.state;
    return (
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <h1 className="title">Signup</h1>
        <label htmlFor="name">name</label>
        <input name="name" id="name" type="text" defaultValue={name} />
        <label htmlFor="lastname">lastname</label>
        <input
          name="lastname"
          id="lastname"
          type="text"
          defaultValue={lastname}
        />
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="text" defaultValue={email} />

        <label htmlFor="password">password</label>
        <input
          name="password"
          id="password"
          type="password"
          defaultValue={password}
        />
        <label htmlFor="passwordConfirm">confirm password (@todo)</label>
        <input
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          defaultValue={passwordConfirm}
        />
        <label htmlFor="avatar">avatar</label>
        <i
          className="is-clickable fa fa-user-circle fa-lg"
          onClick={toggleFilePicker}
        />
        <input
          ref={this.avatarRef}
          id="avatar"
          name="avatar"
          type="file"
          className="is-hidden"
        />
        <hr />
        <button className="btn">ok</button>
      </form>
    );
  }
}
