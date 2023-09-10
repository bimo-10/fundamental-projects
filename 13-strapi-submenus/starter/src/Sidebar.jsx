import React from "react";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, sidebarClose } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={sidebarClose}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { pageId, page, links } = item;

            return (
              <article key={pageId}>
                <h4>{page}</h4>

                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, icon, url } = link;

                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
