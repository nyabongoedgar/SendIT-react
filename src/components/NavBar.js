import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const authRoutes=(
    <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
    </li>
    </ul>
  )
  const privateRoutes=(
    <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li onClick={()=>{
            localStorage.removeItem("token");
            
            document.location.href="/login";
            
          }}>
            <Link  to="/logout">Logout</Link>
    </li>
    </ul>
  )
  return (
    <nav>
      <div className="nav-wrapper red darken-3">
        <a href="#" className="brand-logo left">
          SEND IT
        </a>
        {localStorage.getItem("token")?privateRoutes:authRoutes}
      </div>
    </nav>
  );
};

export default NavBar;
