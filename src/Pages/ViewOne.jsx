import React, { Component } from "react";
import apiHandler from "./../ApiHandler/Handler";
import DeleteButton from "./../Component/DeleteButton";
import UpdateButton from "../Component/UpdateButton";
import { AuthConsumer } from "./../auth/Guard";
import AcceptButton from "./../Component/AcceptButton"
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
      <AuthConsumer>
        {({ loginStatus, user }) => {
          return loginStatus === true && user.id === this.state.singleRO.userId ?
            <div>
              <h1>{this.state.singleRO.name}</h1>
              <h2>{this.state.singleRO.userId}</h2>
              <h2>{user.id}</h2>
              <DeleteButton
                history={this.props.history}
                id={this.props.match.params.cards_id}
              />
              <UpdateButton
                history={this.props.history}
                id={this.props.match.params.cards_id}
              />
            </div>
            : loginStatus === true ?
              <div>
                <h2>jo</h2>
                <AcceptButton history={this.props.history} id={this.props.match.params.cards_id} currentUser={user.id} />
              </div>
              : <div><h1>hello</h1></div>
        }
        }
      </AuthConsumer>
    );
  }
}
