import React, { Component } from 'react'
import apiHandler from "./../ApiHandler/Handler"
import Axios from "axios";
const handler = new apiHandler(process.env.REACT_APP_BACK_URL)


export default class DeleteButton extends Component {
  state = {

    singleRO: []
  }

  handledelete = () => {
    console.log(apiHandler)
    // console.log(this.props.match.params.cards_id)
    // const route = `${process.env.REACT_APP_BACK_URL}/cards/${this.props.match.params.cards_id}`;
    handler.destroy("/api/offers/" || "/api/requests/", this.props.match.params.cards_id)
      .then(apiRes => {
        console.log(apiRes.data);
        // this.setState({ singleRO: apiRes.data });
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
        <button >Delete This</button>
      </div>
    )
  }
}
