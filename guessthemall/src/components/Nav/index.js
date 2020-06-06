import React from "react";
import "./style.css";
//Need to import score

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul>
        <li>Guess them All!</li>
        <li>Click an image to begin!</li>
        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  );
}

export default Nav;
