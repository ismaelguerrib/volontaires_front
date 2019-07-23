import React, { Component } from 'react'
import apiHandler from "./../ApiHandler/Handler";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL);

export default class Request extends Component {
  state = {
    offers: []
  }
  componentDidMount() {
    console.log(this.props.user.id);

    handler.get("/api/offers/findbyowner/" + this.props.user.id).then(apiRes => {
      console.log(apiRes.data);
      this.setState({ offers: apiRes.data });
    })
      .catch(apiErr => console.error(apiErr.response));
  }
  render() {
    return (
      this.state.offers.map(oneOffer => {
        return (
          <div>
            <h1>{oneOffer.name}</h1>
            <p>{oneOffer.acceptingUser}</p>
          </div>
        )
      })
    )
  }
}
