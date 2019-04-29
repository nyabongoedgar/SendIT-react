import React from "react";
import "../../node_modules/materialize-css/dist/css/materialize.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper red darken-3">
        <a href="#" className="brand-logo left">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
