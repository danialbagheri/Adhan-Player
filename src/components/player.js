import React from "react";
import ReactAudioPlayer from "react-audio-player";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.enable) {
      return (
        <ReactAudioPlayer
          src={require("../assets/azhan-aghayee.ogg")}
          autoPlay
          controls
        />
      );
    } else {
      return <p>التماس دعا</p>;
    }
  }
}

export default Player;
