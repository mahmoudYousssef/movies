import {Link, NavLink } from "react-router-dom";
import"./Header.css"; 
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">movies</Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Watch list</NavLink>
          </li>
          <li>
            <NavLink  to="/watched">Watched</NavLink>
          </li>
          <li>
            <NavLink  className="btn" to="/add">Add</NavLink>
          </li>
  
        </ul>
      </div>
    </div>
  );
};

export default Header;
