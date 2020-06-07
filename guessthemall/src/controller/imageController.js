import React, { Component } from "react";

import { Container, Row, Col } from "../components/Grid";
import ImageCard from "../components/ImageCard";

class ImageLayout extends Component {
  state = {
    imageCards: [
      { src: "./images/dinosaur-1.png", checked: false },
      { src: "./images/dinosaur-2.png", checked: false },
      { src: "./images/dinosaur-3.png", checked: false },
      { src: "./images/dinosaur-4.png", checked: false },
      { src: "./images/dinosaur-5.png", checked: false },
      { src: "./images/dinosaur-6.png", checked: false },
      { src: "./images/dinosaur-7.png", checked: false },
      { src: "./images/dinosaur-8.png", checked: false },
      { src: "./images/dinosaur-9.png", checked: false },
      { src: "./images/dinosaur-10.png", checked: false },
      { src: "./images/dinosaur-11.png", checked: false },
      { src: "./images/dinosaur-12.png", checked: false }
    ]
  };

  handleChecked = (srcID, scoreCB) => {
    console.log("ID " + srcID);
    let index = this.state.imageCards.findIndex(obj => obj.src === srcID);
    if (this.state.imageCards[index].checked) {
      console.log("Reset Array");
      this.resetImages();
      scoreCB(true);
    } else {
      console.log("Update Status");
      let tempArray = this.state.imageCards;
      tempArray[index].checked = true;
      this.setState({ imageCards: tempArray });
      this.randomizeImages();
      scoreCB(false);
    }
    // if (imageStatus) {
    //   console.log("Reset Array");
    //   this.resetImages();
    // } else {
    //   console.log("Update Status");
    //   console.log(this.state.imageCards.findIndex(obj => obj.src === srcID));
    //   const index = this.state.imageCards.findIndex(obj => obj.src === srcID);

    //   let tempArray = this.state.imageCards;
    //   tempArray[index].checked = true;
    //   this.setState({ imageCards: tempArray });
    //   this.randomizeImages();
    // }
  };

  resetImages = () => {
    let images = this.state.imageCards;
    images.forEach(image => {
      image.checked = false;
    });
    this.setState({ imageCards: images });
    this.randomizeImages();
  };

  randomizeImages = () => {
    let tempArray = this.state.imageCards.sort(() => Math.random() - 0.5);
    this.setState({
      imageCards: tempArray
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[0]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[1]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[2]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[3]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[4]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[5]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[6]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[7]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[8]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[9]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[10]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[11]}
              scoreChange={this.props.scoreChange}
              handleChecked={this.handleChecked}
            ></ImageCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageLayout;
