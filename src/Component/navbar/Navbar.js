import "./navbar.scss"
import { Link } from "@mui/material";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <span><span className="left2">{"{"}</span>{"Finsweet"}</span>
      </div>
      <div className="right">
        <Link to="/" style={{ textDecoration: "none"  ,"textAlign" :"center"}}>
          <span>Home</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Blog</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>About US</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Conact Us</span>
        </Link>
        <button type="Subscribe">Subscribe</button>
      </div>
    </div>
  );
}

export default Navbar;
