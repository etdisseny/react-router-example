import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-around">
      <NavLink to="/" className="btn btn-outline-primary">
        inicio
      </NavLink>
      <NavLink to="/blog" className="btn btn-outline-primary">
        Blog
      </NavLink>
      <NavLink to="/contacto" className="btn btn-outline-primary">
        Contacto
      </NavLink>
    </nav>
  );
};
