import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ImageCard from "../components/ImageCard";
const imageArray = [
  "../../images/dinosaur-1.png",
  "../../images/dinosaur-2.png",
  "../../images/dinosaur-3.png",
  "../../images/dinosaur-4.png",
  "../../images/dinosaur-5.png",
  "../../images/dinosaur-6.png",
  "../../images/dinosaur-7.png",
  "../../images/dinosaur-8.png",
  "../../images/dinosaur-9.png",
  "../../images/dinosaur-10.png",
  "../../images/dinosaur-11.png",
  "../../images/dinosaur-12.png"
];

function randomizeImages() {
  imageArray.sort(() => Math.random() - 0.5);
}

function ImageLayout() {
  randomizeImages();
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <ImageCard src={imageArray[0]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[1]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[2]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[3]}></ImageCard>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <ImageCard src={imageArray[4]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[5]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[6]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[7]}></ImageCard>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <ImageCard src={imageArray[8]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[9]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[10]}></ImageCard>
        </Col>
        <Col size="md-12">
          <ImageCard src={imageArray[11]}></ImageCard>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageLayout;
