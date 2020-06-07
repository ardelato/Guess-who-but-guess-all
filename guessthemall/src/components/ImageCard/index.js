import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

class ImageCard extends Component {
  handleClick = (event, clickCB, scoreCB) => {
    let domTarget =
      event.target.getAttribute("class") === "card"
        ? event.target
        : event.target.parentElement;
    clickCB(domTarget.getAttribute("value"), scoreCB);
  };

  render() {
    return (
      <Card
        onClick={event =>
          this.handleClick(
            event,
            this.props.handleChecked,
            this.props.scoreChange
          )
        }
        value={this.props.imageObj.src}
      >
        <Card.Img variant="top" src={this.props.imageObj.src} />
        <p>{this.props.imageObj.src}</p>
        <p>{this.props.imageObj.checked.toString()}</p>
      </Card>
    );
  }
}

export default ImageCard;
