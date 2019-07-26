import React, { Component } from "react";
import apiHandler from "./../ApiHandler/Handler";
import DeleteButton from "./../Component/DeleteButton";
import UpdateButton from "../Component/UpdateButton";
import { AuthConsumer } from "./../auth/Guard";
import AcceptButton from "./../Component/AcceptButton";
import Header from "../Component/Header";
import LocationIcone from "../Component/LocationIcone";

// import UpdateButton from "";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class ViewOne extends Component {
  state = {
    singleRO: []
  };

  componentDidMount = () => {
    console.log(this.props);
    console.log(apiHandler);
    console.log(this.props.match.path);

    // console.log(this.props.match.params.cards_id)
    // const route = `${process.env.REACT_APP_BACK_URL}/cards/${this.props.match.params.cards_id}`;
    if (this.props.match.path === "/cards/i-want-to-be-helped/:cards_id") {
      handler
        .get(`/api/offers/${this.props.match.params.cards_id}`)
        .then(apiRes => {
          console.log(apiRes.data);
          this.setState({ singleRO: apiRes.data });
        })
        .catch(apiErr => console.error(apiErr.response.data));
    } else {
      handler
        .get(`/api/requests/${this.props.match.params.cards_id}`)
        .then(apiRes => {
          console.log(apiRes.data);
          this.setState({ singleRO: apiRes.data });
        })
        .catch(apiErr => console.error(apiErr.response.data));
    }
    // apiHandler
    //   .get(`${process.env.REACT_APP_BACK_URL}/api/offers/${this.props.match.params.cards_id}`)
    //   .then(apiRes => {
    //     console.log(apiRes.data);
    //     this.setState({ beer: apiRes.data });
    //   })
    //   .catch(apiErr => console.error(apiErr));
  };

  render() {
    return (
      <>
        <Header />
        <div className="view-one-container">
          <AuthConsumer>
            {({ loginStatus, user }) => {
              return loginStatus &&
                user &&
                user.id === this.state.singleRO.userId ? (
                <>
                  <div className="view-one-user-infos">
                    <img
                      className="viewone-user-image"
                      src={user.avatar}
                      alt="your cool pic"
                    />
                    <h2>{user.firstname}</h2>
                    <h2>{user.lastname}</h2>
                  </div>
                  <div className="viewone-infos-container">
                    <h1 className="viewone-infos-details-title">
                      {this.state.singleRO.name}
                    </h1>
                    <p className="viewone-infos-details">
                      {this.state.singleRO.description}
                    </p>
                    <div className="viewone-infos-details infos-details-location">
                      <LocationIcone /> {this.state.singleRO.location}
                    </div>

                    <p className="viewone-infos-details">
                      {this.state.singleRO.date}/{this.state.singleRO.month} @
                      {this.state.singleRO.hour}:{this.state.singleRO.minute}
                      {this.state.singleRO.meridiem}
                    </p>
                  </div>
                  <div className="viewone-btn-container">
                    <DeleteButton
                      history={this.props.history}
                      id={this.props.match.params.cards_id}
                    />
                    <UpdateButton
                      history={this.props.history}
                      id={this.props.match.params.cards_id}
                    />
                  </div>
                </>
              ) : loginStatus ? (
                <>
                  <div className="view-one-user-infos">
                    <img
                      className="viewone-user-image"
                      src={user.avatar}
                      alt="your cool pic"
                    />
                    <h2>{user.firstname}</h2>
                    <h2>{user.lastname}</h2>
                  </div>
                  <div className="viewone-infos-container">
                    <h1 className="viewone-infos-details-title">
                      {this.state.singleRO.name}
                    </h1>
                    <p className="viewone-infos-details">
                      {this.state.singleRO.description}
                    </p>
                    <div className="viewone-infos-details infos-details-location">
                      <LocationIcone /> {this.state.singleRO.location}
                    </div>

                    <p className="viewone-infos-details">
                      {this.state.singleRO.date}/{this.state.singleRO.month} @
                      {this.state.singleRO.hour}:{this.state.singleRO.minute}
                      {this.state.singleRO.meridiem}
                    </p>
                  </div>
                  <AcceptButton
                    history={this.props.history}
                    id={this.props.match.params.cards_id}
                    currentUser={user.id}
                  />
                </>
              ) : (
                <div>
                  <h1>Sorry, you need to be connected</h1>
                </div>
              );
            }}
          </AuthConsumer>
        </div>
      </>
    );
  }
}
