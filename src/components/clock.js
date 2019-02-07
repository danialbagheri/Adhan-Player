import React from "react";
import Player from "./player";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), active: false };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    if (this.state.date.toLocaleTimeString() === this.props.time) {
      this.setState({
        active: true
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <Player enable={this.state.active} />
      </div>
    );
  }
}

export default Clock;
