import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  // useRef
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // Function toggle
  function handleToggleLinks() {
    console.log(linksRef.current.getBoundingClientRect());
    setShowLinks((showLinks) => !showLinks);
  }

  // styles
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="logo" />
          <button className="nav-toggle" onClick={handleToggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* Show Links toggle */}

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Social Links */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
