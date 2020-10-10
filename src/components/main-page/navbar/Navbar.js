import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showContentById,
  hideContent,
} from "../../../store/reducers/navbarSlice";

const Navbar = (props) => {
  const navbar = useSelector((state) => state.navbar.value);
  const activeContent = navbar.filter((navitem) => navitem.show === true);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid rtl nav-shadow bg-white">
      <div className="row nav-height">
        <nav className="navbar navbar-expand-lg p-0">
          <ul className="navbar-nav" id="navbar">
            {navbar.map((navitem) => (
              <li
                key={navitem.id}
                className="list"
                active-color="var(--primary-gradient)"
              >
                <a className="nav-link">
                  <span className="navItem text-center nav-item">
                    {navitem.type}
                  </span>
                </a>
                <div className="nav-content border">
                  <div className="row">
                    <div className="col-2 border-left">
                      <div className="container-fluid">
                        {navitem.subcat.map((content) => (
                          <div className="row category">{content}</div>
                          ))}
                      </div>
                    </div>
                    <div className="col-10"></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
