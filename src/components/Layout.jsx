import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";


function Layout() {
  return (
    <div className="flex flex-col justify-center">
      <nav className="nav-border complex-shadow md:flex md:items-center nav md:justify-between bg-white p-4 md:p-6 lg:p-6 items-center relative">
        <div className="flex justify-between items-center">
          <span>
            <h4 className="logo text-xl md:text-3xl lg:text-3xl">
              Yago Pazos
            </h4>
          </span>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
          </span>
        </div>
        <ul className="md:flex md:items-center w-full md:w-auto md:py-0 md:pl-0 pl-2 md:opacity-100 opacity-0 top-[-200px] transition-all ease-in duration-500 left-0 z-[-1] md:z-auto md:static bg-white align-middle absolute gap-4 md:gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 lg:pr-8 xl:pr-12 2xl:pr-20">
          <li className="my-4 md:my-0 mx-4">
            <a
              className="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="/"
            >
              home
            </a>
          </li>
          <li className="my-4 md:my-0 mx-4">
            <a
              className="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="#about"
            >
              about
            </a>
          </li>
          <li className="my-4 md:my-0 mx-4">
            <a
              className="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="#projects"
            >
              projects
            </a>
          </li>
          <li className="my-4 md:my-0 mx-4">
            <a
              className="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="#contact"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
