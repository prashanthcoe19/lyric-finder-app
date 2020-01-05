import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
          <i class="fas fa-music" />
          <span /> Lyrics Finder
        </Link>
      </h1>
      <h6>
        {" "}
        <Link
          to="/about"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          About
        </Link>
      </h6>
    </nav>
  );
};

export default Navbar;
