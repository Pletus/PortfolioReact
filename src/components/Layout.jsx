import { Outlet } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import "../App.css";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="flex flex-col justify-center">
      <nav
        className={`w-full flex flex-col md:flex-row justify-between items-center bg-white px-2 py-2 md:py-3 md:px-16 transition-all duration-300 ${
          navbarVisible
            ? "fixed top-0 left-0 w-full"
            : "-top-[70px]"
        }`}
      >
        <span className="text-2xl h3 text-center w-full md:w-auto md:text-left">
          Yago Pazos
        </span>
        <button onClick={handleMenuToggle} className="md:hidden text-3xl ml-2">
          {isMenuOpen ? (
            <IoCloseOutline size={24} />
          ) : (
            <IoMenuOutline size={24} />
          )}
        </button>
        <div
          className={`md:hidden w-full transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-row items-center justify-center gap-3 items-center bg-white gap-2">
            <li>
              <a className="navlinks hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navlinks hover:underline" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="navlinks hover:underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="navlinks hover:underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <ul className="hidden md:flex md:flex-row md:gap-7 md:bg-white items-center">
          <li>
            <a className="navlinks hover:underline" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navlinks hover:underline" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navlinks hover:underline" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navlinks hover:underline" href="#contact">
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
