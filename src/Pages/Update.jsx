import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";
import PickyDateTime from "react-picky-date-time";

const apiHandler = new APIHandler(process.env.REACT_APP_BACK_URL);


export default class Update extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    name: "",
    description: "",
    location: "",
    tags: "",
    showPickyDateTime: true,
    date: "30",
    month: "01",
    year: "2000",
    hour: "03",
    minute: "10",
    second: "40",
    meridiem: "PM"
  };


  onYearPicked(res) {
    const { year } = res;
    this.setState({ year: year });
  }

  onMonthPicked(res) {
    const { month, year } = res;
    this.setState({ year: year, month: month });
  }

  onDatePicked(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDefaultDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onSecondChange(res) {
    this.setState({ second: res.value });
  }

  onMinuteChange(res) {
    this.setState({ minute: res.value });
  }

  onHourChange(res) {
    this.setState({ hour: res.value });
  }

  onMeridiemChange(res) {
    this.setState({ meridiem: res });
  }

  onResetTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onResetDefaultTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onClearTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  // just toggle your outter component state to true or false to show or hide <PickyDateTime/>
  openPickyDateTime() {
    this.setState({ showPickyDateTime: true });
  }

  onClose() {
    this.setState({ showPickyDateTime: false });
  }


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
    if (this.props.match.path === "/update-form/cards/i-want-to-be-helped/:id") {
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
    console.log(this.props.match.params);
    if (this.props.match.path === "/update-form/cards/i-want-to-be-helped/:id") {
      apiHandler
        .get(
          `/api/offers/${this.props.match.params.id}`
        )
        .then(dbres => {
          console.log(dbres);
          this.setState({
            name: dbres.data.name,
            description: dbres.data.description,
            location: dbres.data.location,
            tags: dbres.data.tags,
            date: dbres.data.date,
            month: dbres.data.month,
            year: dbres.data.year,
            hour: dbres.data.hour,
            minute: dbres.data.minute,
            second: dbres.data.second,
            meridiem: dbres.data.meridiem
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    else {
      apiHandler
        .get(
          `/api/requests/${this.props.match.params.id}`
        )
        .then(dbres => {
          console.log(dbres);
          this.setState({
            name: dbres.data.name,
            description: dbres.data.description,
            location: dbres.data.location,
            tags: dbres.data.tags,
            date: dbres.data.date,
            month: dbres.data.month,
            year: dbres.data.year,
            hour: dbres.data.hour,
            minute: dbres.data.minute,
            second: dbres.data.second,
            meridiem: dbres.data.meridiem
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    const { name, description, location, showPickyDateTime } = this.state;
    return (
      <div className="signup-form-container form-container">
        <div className="">
          <form
            className="form"
            id="form"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <h1 className="form-title"> Update youre cards</h1>
            <label className="form-labels" htmlFor="name"> Title : </label>
            <input className="form-inputs" type="string" name="name" id="name" defaultValue={name} />
            <label className="form-labels" htmlFor="description"> Description :</label>
            <input
              className="form-inputs"
              type="string"
              name="description"
              id="description"
              defaultValue={description}
            />
            <label className="form-labels" htmlFor="location">Location: </label>
            <input
              className="form-inputs"
              type="string"
              name="location"
              id="location"
              defaultValue={location}
            />
            <label className="form-labels" htmlFor="tags">Catégorie :</label>
            <select className="form-inputs" name="tags" form="create-one">
              <option>Choose youre category:</option>
              <option value="Take a walk">Take a walk</option>
              <option value="DIY">DIY</option>
              <option value="Admiministrative">Admiministrative</option>
              <option value="Learn">Learn</option>
              <option value="Nursering">Nursering</option>
              <option value="Other">Other</option>
            </select>
            <PickyDateTime
              size="xs"
              mode={1}
              show={showPickyDateTime}
              locale="en-us"
              onClose={() => this.setState({ showPickyDateTime: false })}
              onYearPicked={res => this.onYearPicked(res)}
              onMonthPicked={res => this.onMonthPicked(res)}
              onDatePicked={res => this.onDatePicked(res)}
              onResetDate={res => this.onResetDate(res)}
              onSecondChange={res => this.onSecondChange(res)}
              onMinuteChange={res => this.onMinuteChange(res)}
              onHourChange={res => this.onHourChange(res)}
              onMeridiemChange={res => this.onMeridiemChange(res)}
              onResetTime={res => this.onResetTime(res)}
              onClearTime={res => this.onClearTime(res)}
            />
            <button className="btn-submit"> Submit </button>
          </form>
        </div>
      </div>
    );
  }
}
