import React, { useRef } from "react";
import { useGlobalContext } from "./context";

import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  // mendeklarasikan pencarian pageId di sublinks yang sama dengan pageId di globalContext
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  console.log(currentPage);

  const submenuContainer = useRef(null);

  function handleOnMouseLeave(e) {
    const submenu = submenuContainer.current;
    console.log(submenu);

    const { left, right, bottom } = submenu.getBoundingClientRect();
    console.log(left, right, bottom);

    const { clientX, clientY } = e;
    console.log(clientX, clientY);

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  }

  return (
    <div
      className={pageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleOnMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>

      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;

          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
