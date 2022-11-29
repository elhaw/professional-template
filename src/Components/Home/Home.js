import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="info">
        <div className="top">
          <p>
            POSTED ON <span>STARTUP</span>
          </p>
          <h1>Step-by-step guide to choosing great font pairs</h1>
        </div>

        <div className="bottom">
          <p>
            By <span>James West</span> | May 23, 2022
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu <br />
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
          <button>Read More {">"}</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
