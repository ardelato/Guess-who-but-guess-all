import React from "react";
import "./style.css";
//Need to import score

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul>
        <li>Guess Them All!</li>
        <li>Click an image to begin!</li>
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
