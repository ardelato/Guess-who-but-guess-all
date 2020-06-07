import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

class ImageCard extends Component {
  state = {
    checked: false
  };

  handleClick = cb => {
    if (this.state.checked) {
      console.log("Already Checked");
      // console.log(cb);
      cb(true);
    } else {
      this.setState({ checked: true });
      // console.log(cb);
      cb(false);
    }
  };

  render() {
    return (
      <Card onClick={() => this.handleClick(this.props.scoreChange)}>
        <Card.Img variant="top" src={this.props.src} />
      </Card>
    );
  }
}

export default ImageCard;
