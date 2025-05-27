import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li> <NavLink to="/" className={({isActive})=> isActive ? "active-link" : "" }>Home</NavLink></li>
        <li> <NavLink to="/about" className={({isActive})=> isActive ? "active-link" : "" }>About</NavLink></li>
        <li> <NavLink to="/contact" className={({isActive})=> isActive ? "active-link" : "" }>Contact</NavLink></li>
        <li> <NavLink to="/service" className={({isActive})=> isActive ? "active-link" : "" }>Service</NavLink></li>
      </ul>
    </div>
  );
};
