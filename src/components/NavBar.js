import React from "react";
// import ReactDOM from "react-dom";
// import Dining from "./Dining";
// import Entertainment from "./Entertainment";
// import Grocery from "./Grocery";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <br/>
      <NavLink
        to="/dining"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Dining
      </NavLink>
      <NavLink
        to="/grocery"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Grocery
      </NavLink>
      <NavLink
        to="/entertainment"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Entertainment
      </NavLink>
    </div>
  );
}

export default NavBar