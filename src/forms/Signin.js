import React, { Component } from "react";
import { AuthConsumer } from "./../auth/Guard";

export default class Signin extends Component {
  state = {
    email: "foo@bar.baz",
    password: "1234"
  };

  handleSubmit = (evt, signin) => {
    // the handleSubmit method here receives 2 params
    // 1 - the classic event object
    // 2 - the signin function, passed by the AuthConsumer
    evt.preventDefault();
    signin(status => {
      // this callback is executed inside the Provider !!!
      console.log("should be here", status);
      console.log(this.props);
      if (status) this.props.history.push("/");
    }, this.state);
  };

  checkAllFieldsFilled() {}

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    return (
      <AuthConsumer>
        {({ signin }) => (
          <div className="signup-form-container">
            <form
              className="form"
              onSubmit={evt => handleSubmit(evt, signin)}
              onChange={handleChange}
            >
              <h1 className="form-title">Signin</h1>

              <label htmlFor="email" className="form-labels">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="form-inputs"
                type="email"
                defaultValue={email}
              />
              <label htmlFor="password" className="form-labels">
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                className="form-inputs"
                defaultValue={password}
              />
              <button className="btn-submit">Log In</button>
            </form>
          </div>
        )}
      </AuthConsumer>
    );
  }
}
