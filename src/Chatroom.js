import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ApiHandler from "./ApiHandler/Handler";
import Message from "./Message.js";

const handler = new ApiHandler(process.env.REACT_APP_BACK_URL);
class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [
        {
          username: "Kevin Hsu",
          content: <p>Hello World!</p>,
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        }
      ]
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.scrollToBot();
    console.log(typeof this.state.chats[0].content);
  }

  componentDidUpdate() {
    this.scrollToBot();
  }

  scrollToBot() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(
      this.refs.chats
    ).scrollHeight;
  }

  submitMessage(e) {
    e.preventDefault();

    this.setState(
      {
        chats: this.state.chats.concat([
          {
            username: this.props.user.firstname,
            content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
            img: this.props.user.avatar
          }
        ])
      },
      () => {
        ReactDOM.findDOMNode(this.refs.msg).value = "";
      }
    );
  }

  render() {
    const username = this.props.user.firstname;
    const { chats } = this.state;

    return (
      <div className="chatroom">
        <h3>Chilltime</h3>
        <ul className="chats" ref="chats">
          {chats.map(chat => (
            <Message chat={chat} user={username} />
          ))}
        </ul>
        <form className="input" onSubmit={e => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Chatroom;
