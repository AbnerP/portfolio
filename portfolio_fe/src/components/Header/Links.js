import React from "react";
import "./Links.css";
function Links() {
  const location = window.location.pathname;
  console.log(location);

  const routes = [
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/resume",
      name: "Resume",
    },
    {
      path: "/contactMe",
      name: "Contact Me",
    },
  ];

  return (
    <div className="links">
      <ul className="links__list">
        {routes.map((route, i) => {
          if (location.includes(route.path)) {
            return (
              <li
                className={`links__item ${
                  i === routes.length - 1 ? "links__item--last" : ""
                }`}
              >
                <a className=" links__item--anchor links__item--active" href={route.path}>
                  {route.name}
                </a>
              </li>
            );
          }
          return (
            <li
              className={`links__item ${
                i === routes.length - 1 ? "links__item--last" : ""
              }`}
            >
              <a className="links__item--anchor" href={route.path}>{route.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
