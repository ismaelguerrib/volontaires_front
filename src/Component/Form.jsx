import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";
import { AuthConsumer } from "../auth/Guard";

const apiHandler = new APIHandler();

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    name: "",
    description: "",
    location: "",
    tags: "",
    time: ""
  };

  componentDidMount = () => {};

  handleChange = evt => {
    // console.log(this.myRef.current.value);

    const { name, value } = evt.target;
    // this.setState({
    //   name: evt.target.value.name,
    //   description: evt.target.value.description,
    //   location: evt.target.value.location,
    //   tags: evt.target.value.tags,
    //   time: evt.target.value.time,
    //   userId: this.myRef.current.value
    // });
    this.setState({ [name]: value });
    // console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const data = JSON.parse(JSON.stringify(this.state));
    data.userId = this.myRef.current.value;
    console.log(data);

    if (this.props.match.path === "/create-an-offer") {
      apiHandler.post("/api/offers", data);
    } else {
      apiHandler.post("/api/requests", data);
    }
  };

  render() {
    return (
      <AuthConsumer>
        {({ user }) => (
          <div className="form-container">
            <form
              className="form"
              id="form"
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            >
              <h1 className="form-title"> Create your own card</h1>
              {user ? (
                <input
                  type="text"
                  className="form-inputs"
                  defaultValue={user.id}
                  name="userId"
                  ref={this.myRef}
                  style={{ display: "none" }}
                />
              ) : (
                <h1>nope</h1>
              )}

              <label className="form-labels" htmlFor="name">
                {" "}
                Title :{" "}
              </label>
              <input
                className="form-inputs"
                type="string"
                name="name"
                id="name"
              />
              <label className="form-labels" htmlFor="description">
                {" "}
                Description :
              </label>
              <input
                className="form-inputs"
                type="string"
                name="description"
                id="description"
              />
              <label className="form-labels" htmlFor="location">
                Location:{" "}
              </label>
              <input
                className="form-inputs"
                type="string"
                name="location"
                id="location"
              />
              <label className="form-labels" htmlFor="tags">
                Categories :
              </label>
              <select className="form-inputs" name="tags" form="create-one">
                <option value="Take a walk">Take a walk</option>
                <option value="DIY">DIY</option>
                <option value="Admiministrative">Admiministrative</option>
                <option value="Learn">Learn</option>
                <option value="Nursering">Nursering</option>
                <option value="Other">Other</option>
              </select>
              <label className="form-labels" htmlFor="time">
                Date :
              </label>
              <input
                className="form-inputs"
                type="date"
                name="time"
                id="date"
              />
              <button className="btn-submit"> Submit </button>
            </form>
          </div>
        )}
      </AuthConsumer>
    );
  }
}
