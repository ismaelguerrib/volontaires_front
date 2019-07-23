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
          <form
            className="form"
            onSubmit={evt => handleSubmit(evt, signin)}
            onChange={handleChange}
          >
            <h1 className="title">Signin</h1>
            <label htmlFor="email">email</label>
            <input id="email" name="email" type="email" defaultValue={email} />
            <label htmlFor="password">password</label>
            <input
              name="password"
              id="password"
              type="password"
              defaultValue={password}
            />
            <button className="btn">ok</button>
          </form>
        )}
      </AuthConsumer>
    );
  }
}
