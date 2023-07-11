import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./navbar.css";
import { navItems, toolsDropdown } from "./navItems";
import Button from "./button";
import Dropdown from "./dropdown";


function Navbar() {
  // const [report, setReport] = useState(false);
  // const [service, setService] = useState(false);
  const [tools, setTools] = useState(false);

  return (
    <>
      <nav className="navbar-main">
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Tools") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setTools(true)}
                  onMouseLeave={() => setTools(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {tools && <Dropdown dropdownItems={toolsDropdown}/>}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;