import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { isSidebarOpen, sidebarOpen } = useGlobalContext();
  console.log(sidebarOpen);
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3 className="logo">strapi</h3>
          <button className="toggle-btn" onClick={sidebarOpen}>
            <FaBars />
          </button>

          <NavLinks />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
