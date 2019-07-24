import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";
import "font-awesome/css/font-awesome.min.css";

const apiHandler = new APIHandler();

export default class Signup extends Component {
  state = {
    isPasswordOk: false,
    firstname: "J",
    lastname: "j",
    email: "j@j.j",
    avatar: "",
    password: "lolo",
    age: 18
  };

  constructor() {
    super();
    this.avatarRef = React.createRef();
  }

  // @todo => code this function to validate form according your needs
  checkAllFields() {
    return true;
  }
  // checkPasswordMatch() {
  //   const { password, passwordConfirm } = this.state;
  //   var passed = false;
  //   if (password && passwordConfirm) passed = password === passwordConfirm;
  //   else passed = true;
  //   return passed;
  // }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.checkAllFields()) return console.warn("form incomplete");

    const file = this.avatarRef.current.files[0];
    const {
      firstname,
      lastname,
      email,
      password,
      // passwordConfirm,
      avatar,
      age
    } = this.state;
    // simulate multipart/formdata ...
    const fd = new FormData();
    fd.append("firstname", firstname); // accessible @backend as req.body.name ...
    fd.append("lastname", lastname); // req.body.lastname
    fd.append("email", email); // req.body.email
    fd.append("password", password); // req.body./password
    fd.append("age", age); // req.body./password
    if (file) fd.set("avatar", file, file.name);
    // above, note the difference : fd.SET !!! accessible @backend as req.file ...

    console.log("file ? ", file);
    console.log(fd);

    apiHandler
      .post("/signup", fd) // let's post the built formData object as a regular payload
      .then(serverRes => {
        // everything is fine, redirect to dashboard
        console.log(this.props);
        this.props.history.push("/");
        if (serverRes.response) console.log(serverRes.response);
      })
      .catch(serverErr => {
        console.error(serverErr.response);
      });
  };

  toggleFilePicker = evt => {
    // console.log(this.avatarRef);
    this.avatarRef.current.click();
  };

  render() {
    const { handleChange, handleSubmit, toggleFilePicker } = this;
    const {
      firstname,
      lastname,
      email,
      password,
      // passwordConfirm,
      age
    } = this.state;
    return (
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
          <h1 className="form-title">Signup</h1>
          <label htmlFor="firstname" className="form-labels">
            Name
          </label>
          <input
            name="firstname"
            id="firstname"
            className="form-inputs"
            type="text"
            defaultValue={firstname}
          />
          <label htmlFor="lastname" className="form-labels">
            Lastname
          </label>
          <input
            name="lastname"
            id="lastname"
            className="form-inputs"
            type="text"
            defaultValue={lastname}
          />
          <label htmlFor="email" className="form-labels">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            className="form-inputs"
            type="email"
            defaultValue={email}
          />
          <label htmlFor="age" className="form-labels">
            Age
          </label>
          <input
            id="age"
            name="age"
            className="form-inputs"
            type="number"
            step="1"
            max="140"
            min="18"
            defaultValue={age}
          />

          <label htmlFor="password" className="form-labels">
            Password
          </label>
          <input
            name="password"
            id="password"
            className="form-inputs"
            type="password"
            defaultValue={password}
          />
          {/* <label htmlFor="passwordConfirm">confirm password (@todo)</label>
        <input
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          defaultValue={passwordConfirm}
        /> */}
          <label htmlFor="avatar" className="form-labels">
            Profil Picture
          </label>
          {/* <i
            className="is-clickable fa fa-user-circle fa-lg"
            onClick={toggleFilePicker}
          /> */}
          <input
            ref={this.avatarRef}
            id="avatar"
            name="avatar"
            type="file"
            className="is-hidden"
          />
          <button className="btn-submit">Submit</button>
        </form>
      </div>
    );
  }
}
