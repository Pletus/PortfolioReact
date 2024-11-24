import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav class="nav-border complex-shadow md:flex md:items-center nav md:justify-between bg-white p-4 md:p-6 lg:p-6 items-center relative">
        <div class="flex justify-between items-center">
          <span>
            <h4 class="logo text-xl md:text-3xl lg:text-3xl pl-2 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-20">
              Yago Pazos
            </h4>
          </span>
          <span class="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
          </span>
        </div>
        <ul class="md:flex md:items-center w-full md:w-auto md:py-0 md:pl-0 pl-2 md:opacity-100 opacity-0 top-[-200px] transition-all ease-in duration-500 left-0 z-[-1] md:z-auto md:static bg-white align-middle absolute gap-4 md:gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 lg:pr-8 xl:pr-12 2xl:pr-20">
          <li class="my-4 md:my-0 mx-4">
            <a
              class="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="/"
            >
              home
            </a>
          </li>
          <li class="my-4 md:my-0 mx-4">
            <a
              class="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="#about"
            >
              about
            </a>
          </li>
          <li class="my-4 md:my-0 mx-4">
            <a
              class="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="#projects"
            >
              projects
            </a>
          </li>
          <li class="my-4 md:my-0 mx-4">
            <a
              class="navlinks p-1 inline-block transform transition-transform duration-300 hover:scale-110"
              href="#contact"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
