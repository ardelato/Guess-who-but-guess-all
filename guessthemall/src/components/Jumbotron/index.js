import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Guess who!</h1>

      <br />
      <h3>Instructions:</h3>
      <h5>
        Click on an image that has not been clicked. <br />
        If it has not been clicked you will get 1 point, otherwise your score
        will reset.
      </h5>
    </div>
  );
}

export default Jumbotron;
