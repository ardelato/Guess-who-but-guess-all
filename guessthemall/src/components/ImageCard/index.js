import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

class ImageCard extends Component {
  state = {
    checked: false
  };

  handleClick = () => {
    if (this.state.checked) {
      console.log("Already Checked");
    } else {
      this.setState({ checked: true });
    }
  };

  render() {
    return (
      <Card onClick={this.handleClick}>
        <Card.Img variant="top" src={this.props.src} />
      </Card>
    );
  }
}

export default ImageCard;
