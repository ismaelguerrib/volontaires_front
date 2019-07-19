import React, { Component } from 'react'
import apiHandler from "./../ApiHandler/Handler"
import Axios from "axios";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL)


export default class ViewOne extends Component {
  state = {

    singleRO: []
  }

  componentDidMount = () => {
    console.log(apiHandler)
    // console.log(this.props.match.params.cards_id)
    // const route = `${process.env.REACT_APP_BACK_URL}/cards/${this.props.match.params.cards_id}`;
    handler.get(`/api/offers/${this.props.match.params.cards_id}` || `/api/requests/${this.props.match.params.cards_id}`)
      .then(apiRes => {
        console.log(apiRes.data);
        this.setState({ singleRO: apiRes.data });
      })
      .catch(apiErr => console.error(apiErr));
    // apiHandler
    //   .get(`${process.env.REACT_APP_BACK_URL}/api/offers/${this.props.match.params.cards_id}`)
    //   .then(apiRes => {
    //     console.log(apiRes.data);
    //     this.setState({ beer: apiRes.data });
    //   })
    //   .catch(apiErr => console.error(apiErr));
  }


  render() {
    return (
      <div>
        <h2>Hello</h2>
        <h2>{this.state.singleRO.userId}</h2>
      </div>
    )
  }
}
