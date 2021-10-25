import "./Navbar.css";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import { Button } from "@material-ui/core";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar__left">
        <NavLink to="/dashboard" className="home__but">
          <Button className="active_link">Home</Button>
        </NavLink>
      </div>

      <div className="navbar__right">
        <div className="navbar__logout">
          <NavLink to="/">
            <i className="fa fa-power-off"></i>
          </NavLink>
        </div>
        <a href="#">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
