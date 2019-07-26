import { AuthConsumer } from "../auth/Guard";
import Infos from "./DashboardInfos";
import Admin from "./DashboardAdmin";
import Header from "../Component/Header";
import Chatroom from "./../Chatroom";
import React, { Component } from "react";

export default class Dashboard extends Component {
  state = {
    chatDisplay: false
  };

  displayChat = () => {
    this.setState({ chatDisplay: true });
  };

  closeChat = () => {
    this.setState({ chatDisplay: false });
  };

  render() {
    return (
      <>
        <Header />
        <div className="dashboard-container">
          <AuthConsumer>
            {({ loginStatus, user }) => {
              return loginStatus === true ? (
                <>
                  <div className="dashboard-infos-container">
                    <Infos user={user} />
                    <Admin user={user} />
                    <div className="buttonCenter">
                      <button
                        onClick={this.displayChat}
                        className="displayChat"
                      >
                        Display Chat
                      </button>
                    </div>
                    <Chatroom
                      user={user}
                      show={this.state.chatDisplay}
                      close={this.closeChat}
                    />
                  </div>
                </>
              ) : (
                <div />
              );
            }}
          </AuthConsumer>
        </div>
      </>
    );
  }
}
