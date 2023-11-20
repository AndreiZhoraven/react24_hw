import React from "react";
import { NavLink } from "react-router-dom";

import "./style.sass";

export default function Navigation() {
  const nav = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "countries",
      title: "Countries",
    },
  ];

  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
