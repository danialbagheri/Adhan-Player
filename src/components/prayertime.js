import React from "react";
import Clock from "./clock";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "hh:mm:ss",
      message: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ time: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.time);
    this.setState({ message: "زمان اذان ثبت شد:" + this.state.time });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <p>لطفا زمانی که می خواهید اذان به صورت خودکار پخش شود را وارد کنید</p>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.time} onChange={this.handleChange} />
          <input type="submit" value="تایید زمان" />
        </form>
        <p>{this.state.message}</p>
        <Clock time={this.state.time} />
        <p> ساخته شده با React توسط دانیال باقری</p>
      </div>
    );
  }
}

export default Time;
