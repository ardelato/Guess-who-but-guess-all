import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ImageCard from "../components/ImageCard";
const imageArray = [
  "/images/dinosaur-1.png",
  "/images/dinosaur-2.png",
  "/images/dinosaur-3.png",
  "/images/dinosaur-4.png",
  "/images/dinosaur-5.png",
  "/images/dinosaur-6.png",
  "/images/dinosaur-7.png",
  "/images/dinosaur-8.png",
  "/images/dinosaur-9.png",
  "/images/dinosaur-10.png",
  "/images/dinosaur-11.png",
  "/images/dinosaur-12.png"
];

function randomizeImages() {
  imageArray.sort(() => Math.random() - 0.5);
}

function ImageLayout(props) {
  randomizeImages();
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <ImageCard
            src={imageArray[0]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[1]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[2]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[3]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <ImageCard
            src={imageArray[4]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[5]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[6]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[7]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <ImageCard
            src={imageArray[8]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[9]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[10]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard
            src={imageArray[11]}
            scoreChange={props.scoreChange}
          ></ImageCard>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageLayout;
