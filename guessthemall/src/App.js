import React from "react";
import ImageCard from "./components/ImageCard";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <ImageCard src={"../../public/images/150.png"}></ImageCard>
      </Container>
    </div>
  );
}

export default App;
