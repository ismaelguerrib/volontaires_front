import React, { Component } from 'react'
import Axios from 'axios';

export default class AcceptButton extends Component {

  state = {
    acceptingUser: []
  }
  acceptThisTask = () => {


  }

  render() {
    return (
      <div>

        <button onClick={this.acceptThisTask}>Delete This</button>

      </div>
    )
  }
}
