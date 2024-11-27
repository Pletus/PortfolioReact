import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <div className="flex flex-col justify-center">
      <nav className="md:flex md:items-center md:justify-between bg-white px-4 md:px-16 nav items-center relative">
        <div className="flex justify-between items-center">
          <span>
            <h4 className="logo text-xl md:text-3xl lg:text-xl">Yago Pazos</h4>
          </span>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
          </span>
        </div>
        <ul className="md:flex md:items-center md:opacity-100 opacity-0 top-[-200px] transition-all ease-in duration-500 left-0 z-[-1] md:z-auto md:static bg-white align-middle absolute gap-10">
          <li>
            <a
              className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
