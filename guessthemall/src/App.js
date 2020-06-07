import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import ImageLayout from "./controller/imageController";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0
  };

  scoreChange = status => {
    if (status) {
      this.setState({ score: 0 });
    } else {
      this.setState({
        score: this.state.score + 1,
        topScore:
          this.state.score + 1 > this.state.topScore
            ? this.state.score + 1
            : this.state.topScore
      });
    }
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <ImageLayout scoreChange={this.scoreChange} />
      </div>
    );
  }
}

export default App;
