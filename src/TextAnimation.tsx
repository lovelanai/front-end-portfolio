import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Front end developer", "Digital Designer", "Musician"];

class TextAnimation extends Component {
  state = {
    textIndex: 0,
    textFastIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        textIndex: this.state.textIndex + 1,
      });
    }, 2000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 5);
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <ReactTextTransition
            style={{ fontSize: "4.5rem", fontWeight: "800" }}
            text={texts[this.state.textIndex % texts.length]}
            springConfig={presets.wobbly}
            inline
          />
        </section>
      </React.Fragment>
    );
  }
}

export default TextAnimation;
