import React from "react";

class StreamMessage extends React.Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
  }

  componentDidMount() {
    this.InitializeMessage();
    this.streamMessage();
  }

  componentDidUpdate() {
    this.InitializeMessage();
    this.streamMessage();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.message === this.props.message ? false : true;
  }

  InitializeMessage() {
    this.messageChars = this.props.message.split("");
    this.charCount = 0;
    this.message = "";
  }

  streamMessage() {
    if (this.props.isStreamFinished) {
      this.messageRef.current.innerText = this.props.message;
      return;
    }
    if (this.messageChars.length > this.charCount) {
      setTimeout(() => {
        this.message += this.messageChars[this.charCount];
        this.charCount++;
        this.messageRef.current.innerText = this.message;
        this.streamMessage();
      }, 50);
      return;
    }
    this.props.onFinish();
  }

  render() {
    return <span ref={this.messageRef} />;
  }
}

export default StreamMessage;
