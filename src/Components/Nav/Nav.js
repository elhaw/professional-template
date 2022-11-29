import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="navbar">
      <div className="left ">
        <span>{"{"}</span>
        Finsweet
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>
            <button>Subscibe</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
