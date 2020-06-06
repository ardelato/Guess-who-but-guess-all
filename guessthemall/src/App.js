import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import ImageLayout from "./controller/imageController";

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <ImageLayout />
    </div>
  );
}

export default App;
