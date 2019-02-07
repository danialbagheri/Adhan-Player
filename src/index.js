import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/header";
import Time from "./components/prayertime";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Time />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
