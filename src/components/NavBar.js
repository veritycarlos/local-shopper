import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function NavBar() {
    const [active, setActive] = useState('nav_menu')
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const navToggle = () => {
      active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');
    
      //TogglerIcon

      toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
    
    }

  return (
    <nav className="nav">
      <NavLink className="nav_brand" to="/" exact >
        LS|TX
      </NavLink>
      <ul className={active}>

        <li className="nav_item">
          <NavLink className="nav_link" to="/" exact >Home</NavLink>
        </li>

        <br/>

        <li className="nav_item">          
          <NavLink className="nav_link" to="/dining" exact >Dining</NavLink>
        </li>  

        <br/>

        <li className="nav_item">   
          <NavLink className="nav_link" to="/grocery" exact >Grocery</NavLink>
        </li>  

        <br/>

        <li className="nav_item">   
          <NavLink className="nav_link" to="/entertainment" exact >Entertainment</NavLink>
        </li>  

        <li className="nav_item"> 
          <NavLink className="nav_link" to={'/dining/new'} >
            <button className="button">Add Your Buisness!</button>
          </NavLink>
        </li>

      </ul>
      <div onClick = {navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar

{/* <NavLink className="Buttons" to="/" exact >
Home
</NavLink>


<NavLink className="Buttons" to="/dining" exact >
Dining
</NavLink>


<NavLink className="Buttons" to="/grocery" exact >
Grocery
</NavLink>

<NavLink className="Buttons"to="/entertainment" exact >
Entertainment
</NavLink> */}