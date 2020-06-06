import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import image from "../../images/150.png";
import "./style.css";

class ImageCard extends Component {
  state = {
    checked: false
  };

  render(props) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
      </Card>
    );
  }
}

export default ImageCard;
