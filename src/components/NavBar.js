import React from "react";
// import ReactDOM from "react-dom";
// import Dining from "./Dining";
// import Entertainment from "./Entertainment";
// import Grocery from "./Grocery";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
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