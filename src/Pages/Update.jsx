import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";
const apiHandler = new APIHandler(process.env.REACT_APP_BACK_URL);

export default class Update extends Component {
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
    // console.log(this.state);
    // console.log(this.props.match.params.id);
    // console.log("====>>>", this.props);
    if (this.props.match.path === "/create-an-offer") {
      console.log("offer", this.state);

      apiHandler
        .update(`api/offers/${this.props.match.params.id}`, this.state)
        .then(res => console.log("updated", res))
        .catch(err => console.log(err));
    } else {
      console.log("req", this.props);
      apiHandler
        .update("/api/requests/" + this.props.match.params.id, this.state)
        .then(res => console.log("updated", res))
        .catch(err => console.log(err));
    }
  };

  componentDidMount() {
    apiHandler
      .get(
        "/api/offers/" + this.props.match.params.id ||
          "/api/requests" + this.props.match.params.id
      )
      .then(dbres => {
        console.log(dbres.data);
        this.setState({
          name: dbres.data.name,
          description: dbres.data.description,
          location: dbres.data.location,
          tags: dbres.data.tags
        });
        //   this.setState({name: {dbres.data.name}, description:  {dbres.data.description}}
        //     )
        // location: "",
        // tags: "",
        // date: ""

        // this.setState({ obj: newObj });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { name, description, location, time } = this.state;
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
            <input type="string" name="name" id="name" defaultValue={name} />
            <label htmlFor="description"> Description :</label>
            <input
              type="string"
              name="description"
              id="description"
              defaultValue={description}
            />
            <label htmlFor="location">Location: </label>
            <input
              type="string"
              name="location"
              id="location"
              defaultValue={location}
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
            <label htmlFor="time">Date :</label>
            <input type="date" name="time" id="date" defaultValue={time} />
            <button> Submit </button>
          </form>
        </div>
      </div>
    );
  }
}
