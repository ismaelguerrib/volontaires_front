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
      ],
      newmessage: {}
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.scrollToBot();
    // console.log(typeof this.state.chats[0].content);
    handler
      .get("/api/chats")
      .then(res => {
        this.setState({ chats: res.data });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    this.scrollToBot();
    // console.log(typeof this.state.chats[0].content);
    handler
      .get("/api/chats")
      .then(res => {
        this.setState({ chats: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
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
        newmessage: {
          username: this.props.user.firstname,
          content: ReactDOM.findDOMNode(this.refs.msg).value,
          img: this.props.user.avatar
        }
      },
      () => {
        console.log(ReactDOM.findDOMNode(this.refs.msg).value);
        ReactDOM.findDOMNode(this.refs.msg).value = "";
        handler
          .post("/api/chats", this.state.newmessage)
          .then(res => {})
          .catch(err => console.log(err));
      }
    );
    console.log(this.state.newmessage);
  }

  render() {
    const username = this.props.user.firstname;
    const chats = [];
    console.log("LOOKING FOR CHATS", this.state.chats);

    return (
      <div className="chatroom">
        <h3>Chatroom</h3>
        <ul className="chats" ref="chats">
          {this.state.chats.map(chat => (
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
