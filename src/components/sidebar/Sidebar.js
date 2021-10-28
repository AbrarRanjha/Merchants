import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>REACT JS</h1>
        </div>
        &nbsp;&nbsp;
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <NavLink to="/table">
            <a href="#">Admin </a>
          </NavLink>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Company</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Employees</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Warehouse</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Requests</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Payroll</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Paygrade</a>
        </div>

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <NavLink to="/">Log out</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
