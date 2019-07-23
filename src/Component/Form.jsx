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
          <div className="big-container-form">
            <h1> Create youre own cards</h1>
            <div className="form-container">
              <form
                id="form"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              >
                {user ? (
                  <input
                    type="text"
                    defaultValue={user.id}
                    name="userId"
                    ref={this.myRef}
                    style={{ display: "none" }}
                  />
                ) : (
                  <h1>nope</h1>
                )}

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
        )}
      </AuthConsumer>
    );
  }
}
