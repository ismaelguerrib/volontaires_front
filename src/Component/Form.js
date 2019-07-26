import React, { Component } from "react";
import APIHandler from "../ApiHandler/Handler";
import { AuthConsumer } from "../auth/Guard";
import PickyDateTime from "react-picky-date-time";

// const apiHandler = new APIHandler();
const apiHandler = new APIHandler(process.env.REACT_APP_BACK_URL);
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
      apiHandler
        .post("/api/requests", data)
        .then(dbRes => {
          console.log(dbRes);
        })
        .catch(dbErr => {
          console.log(dbErr.response);
        });
    }
  };

  render() {
    const {
      showPickyDateTime
      // date,
      // month,
      // year,
      // hour,
      // minute,
      // second,
      // meridiem
    } = this.state;
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
                <option disabled selected>
                  --- Choose one option ---
                </option>
                <option value="Take a walk">Take a walk</option>
                <option value="DIY">DIY</option>
                <option value="Admiministrative">Admiministrative</option>
                <option value="Learn">Learn</option>
                <option value="Nursering">Nursering</option>
                <option value="Other">Other</option>
              </select>
              {/* <label className="form-labels" htmlFor="time">
                Date :
              </label>
              <input
                className="form-inputs"
                type="date"
                name="time"
                id="date"
              /> */}
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
        )}
      </AuthConsumer>
    );
  }
}
