import React, { Component } from "react";

import { Container, Row, Col } from "../components/Grid";
import ImageCard from "../components/ImageCard";

class ImageLayout extends Component {
  state = {
    imageCards: [
      { src: "/images/dinosaur-1.png", checked: false },
      { src: "/images/dinosaur-2.png", checked: false },
      { src: "/images/dinosaur-3.png", checked: false },
      { src: "/images/dinosaur-4.png", checked: false },
      { src: "/images/dinosaur-5.png", checked: false },
      { src: "/images/dinosaur-6.png", checked: false },
      { src: "/images/dinosaur-7.png", checked: false },
      { src: "/images/dinosaur-8.png", checked: false },
      { src: "/images/dinosaur-9.png", checked: false },
      { src: "/images/dinosaur-10.png", checked: false },
      { src: "/images/dinosaur-11.png", checked: false },
      { src: "/images/dinosaur-12.png", checked: false }
    ]
  };

  componentDidMount() {
    this.randomizeImages();
  }

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
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[1]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[2]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[3]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[4]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[5]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[6]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[7]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[8]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[9]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[10]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
          <Col size="md-12">
            <ImageCard
              imageObj={this.state.imageCards[11]}
              scoreChange={this.props.scoreChange}
            ></ImageCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageLayout;
